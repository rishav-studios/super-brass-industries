import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  return NextResponse.json({ status: 'ok', service: 'Super Brass Industries API' });
}

export async function POST(request, { params }) {
  return NextResponse.json({ status: 'ok' });
}
