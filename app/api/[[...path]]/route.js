import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';
import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';

export const runtime = 'nodejs';

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM = process.env.EMAIL_FROM;
const TEAM_TO = process.env.EMAIL_TO;
const MAX_FILE = 20 * 1024 * 1024; // 20 MB app cap (Resend total email limit is 40MB after encoding)
const ALLOWED_EXT = ['pdf', 'dwg', 'dxf', 'step', 'stp', 'igs', 'iges', 'jpg', 'jpeg', 'png'];

let client;
async function getDb() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URL);
    await client.connect();
  }
  return client.db(process.env.DB_NAME);
}

const clean = (v) => (typeof v === 'string' ? v.trim() : '');
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const ext = (name = '') => (name.split('.').pop() || '').toLowerCase();
const esc = (v = '') =>
  String(v)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const emailShell = (title, rows, bodyLabel, bodyText) => `
  <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;">
    <div style="background:#1a2845;padding:20px 28px;">
      <h1 style="color:#d9b25f;font-size:18px;margin:0;letter-spacing:1px;">SUPER BRASS INDUSTRIES</h1>
      <p style="color:#cbd5e1;font-size:13px;margin:6px 0 0;">${title}</p>
    </div>
    <div style="padding:24px 28px;">
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1e293b;">
        ${rows
          .map(
            ([k, v]) => `<tr>
              <td style="padding:8px 0;color:#64748b;width:130px;vertical-align:top;"><b>${k}</b></td>
              <td style="padding:8px 0;">${esc(v) || '-'}</td>
            </tr>`
          )
          .join('')}
      </table>
      <div style="margin-top:16px;padding:16px;background:#f6f7f9;border-left:3px solid #b7852c;">
        <p style="margin:0 0 6px;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:1px;"><b>${bodyLabel}</b></p>
        <p style="margin:0;font-size:14px;color:#1e293b;line-height:1.6;">${esc(bodyText).replaceAll('\n', '<br/>')}</p>
      </div>
    </div>
  </div>`;

async function sendContact(formData) {
  const fullName = clean(formData.get('fullName'));
  const companyName = clean(formData.get('companyName'));
  const email = clean(formData.get('email'));
  const phone = clean(formData.get('phone'));
  const message = clean(formData.get('message'));

  if (!fullName || !emailOk(email) || !message) {
    return NextResponse.json({ error: 'Invalid contact payload' }, { status: 400 });
  }

  // Save to MongoDB first (survives email failures)
  const db = await getDb();
  const submission = {
    id: uuidv4(),
    type: 'contact',
    fullName,
    companyName,
    email,
    phone,
    message,
    emailStatus: 'pending',
    createdAt: new Date().toISOString(),
  };
  await db.collection('submissions').insertOne({ ...submission });

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [TEAM_TO],
    replyTo: email,
    subject: `New contact form: ${fullName} (${companyName})`,
    html: emailShell(
      'New Contact Form Submission',
      [
        ['Name', fullName],
        ['Company', companyName],
        ['Email', email],
        ['Phone', phone],
      ],
      'Message',
      message
    ),
  });

  if (error) {
    await db.collection('submissions').updateOne({ id: submission.id }, { $set: { emailStatus: 'failed', emailError: error.message || String(error) } });
    return NextResponse.json({ error: error.message || 'Email delivery failed' }, { status: 502 });
  }

  await db.collection('submissions').updateOne({ id: submission.id }, { $set: { emailStatus: 'sent', resendId: data?.id } });

  // Auto-reply to visitor (non-blocking)
  try {
    await resend.emails.send({
      from: FROM,
      to: [email],
      subject: 'We received your message - Super Brass Industries',
      html: emailShell(
        'Thank you for contacting us',
        [['Name', fullName]],
        'What happens next',
        `Thanks, ${fullName}. Our team has received your message and will reply within one business day.`
      ),
    });
  } catch (e) {
    // auto-reply failure should not fail the request
  }

  return NextResponse.json({ ok: true, id: data?.id });
}

async function sendQuote(formData) {
  const fullName = clean(formData.get('fullName'));
  const companyName = clean(formData.get('companyName'));
  const email = clean(formData.get('email'));
  const phone = clean(formData.get('phone'));
  const projectDetails = clean(formData.get('projectDetails'));
  const file = formData.get('drawing');

  if (!fullName || !emailOk(email) || !projectDetails) {
    return NextResponse.json({ error: 'Invalid quote payload' }, { status: 400 });
  }

  let attachment = null;
  if (file && typeof file === 'object' && file.size > 0) {
    if (file.size > MAX_FILE) {
      return NextResponse.json({ error: 'File too large (max 20 MB)' }, { status: 413 });
    }
    if (!ALLOWED_EXT.includes(ext(file.name))) {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }
    attachment = {
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString('base64'),
      contentType: file.type || undefined,
    };
  }

  const db = await getDb();
  const submission = {
    id: uuidv4(),
    type: 'quote',
    fullName,
    companyName,
    email,
    phone,
    projectDetails,
    attachment: attachment ? { filename: file.name, mimeType: file.type, size: file.size } : null,
    emailStatus: 'pending',
    createdAt: new Date().toISOString(),
  };
  await db.collection('submissions').insertOne({ ...submission });

  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [TEAM_TO],
    replyTo: email,
    subject: `Quote request: ${fullName} (${companyName})${attachment ? ' [drawing attached]' : ''}`,
    html: emailShell(
      'New Quote Request',
      [
        ['Name', fullName],
        ['Company', companyName],
        ['Email', email],
        ['Phone', phone],
        ['Drawing', attachment ? file.name : 'Not attached'],
      ],
      'Project Details',
      projectDetails
    ),
    attachments: attachment ? [attachment] : [],
  });

  if (error) {
    await db.collection('submissions').updateOne({ id: submission.id }, { $set: { emailStatus: 'failed', emailError: error.message || String(error) } });
    return NextResponse.json({ error: error.message || 'Email delivery failed' }, { status: 502 });
  }

  await db.collection('submissions').updateOne({ id: submission.id }, { $set: { emailStatus: 'sent', resendId: data?.id } });

  try {
    await resend.emails.send({
      from: FROM,
      to: [email],
      subject: 'Quote request received - Super Brass Industries',
      html: emailShell(
        'Your quote request is in good hands',
        [['Name', fullName]],
        'What happens next',
        `Thanks, ${fullName}. Our engineering team is reviewing your project and will send a detailed quotation within 24 hours.`
      ),
    });
  } catch (e) {
    // non-blocking
  }

  return NextResponse.json({ ok: true, id: data?.id });
}

export async function POST(request, context) {
  const params = await context.params;
  const type = params?.path?.[0];

  if (!process.env.RESEND_API_KEY || !FROM || !TEAM_TO) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }
  if (type !== 'contact' && type !== 'quote') {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  try {
    const formData = await request.formData();
    return type === 'contact' ? await sendContact(formData) : await sendQuote(formData);
  } catch (e) {
    return NextResponse.json({ error: 'Bad request' }, { status: 400 });
  }
}

export async function GET(request, context) {
  const params = await context.params;
  const type = params?.path?.[0];

  if (type === 'submissions') {
    try {
      const db = await getDb();
      const items = await db
        .collection('submissions')
        .find({}, { projection: { _id: 0 } })
        .sort({ createdAt: -1 })
        .limit(50)
        .toArray();
      return NextResponse.json({ submissions: items });
    } catch (e) {
      return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
  }

  return NextResponse.json({ status: 'ok', service: 'Super Brass Industries API' });
}
