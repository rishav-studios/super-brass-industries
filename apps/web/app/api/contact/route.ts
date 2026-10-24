import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas/contact.schema";

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";

    let rawData: Record<string, any> = {};
    let fileMeta: { name: string; size: number; type: string } | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      rawData = {
        name: formData.get("name")?.toString() || "",
        email: formData.get("email")?.toString() || "",
        contact: formData.get("contact")?.toString() || "",
        company_name: formData.get("company_name")?.toString() || undefined,
        subject: formData.get("subject")?.toString() || "",
        message: formData.get("message")?.toString() || "",
      };

      const file = formData.get("attachment");
      if (file && typeof file === "object" && "size" in file && (file as File).size > 0) {
        rawData.attachment = file as File;
        fileMeta = {
          name: (file as File).name,
          size: (file as File).size,
          type: (file as File).type,
        };
      } else {
        rawData.attachment = null;
      }
    } else {
      rawData = await req.json();
    }

    const validationResult = contactFormSchema.safeParse(rawData);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    // Generate an inquiry reference code for the client
    const referenceId = `SBI-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;

    console.log("[Contact Submission Received]", {
      referenceId,
      name: data.name,
      email: data.email,
      contact: data.contact,
      company: data.company_name,
      subject: data.subject,
      hasAttachment: !!fileMeta,
      fileMeta,
    });

    return NextResponse.json({
      success: true,
      referenceId,
      message:
        "Your inquiry has been successfully received. Our engineering and sales team will review your specifications and respond within 24 hours.",
    });
  } catch (error: any) {
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "An unexpected error occurred while processing your request. Please try again or contact us directly via email.",
      },
      { status: 500 }
    );
  }
}
