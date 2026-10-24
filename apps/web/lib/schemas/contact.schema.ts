import { z } from "@super/types";

// Max 15MB file size
export const MAX_FILE_SIZE = 15 * 1024 * 1024;

export const ACCEPTED_FILE_EXTENSIONS = [
  ".pdf",
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".svg",
  ".dwg",
  ".dxf",
  ".step",
  ".stp",
  ".iges",
  ".igs",
  ".zip",
  ".rar",
  ".7z",
  ".doc",
  ".docx",
];

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." })
    .max(100, { message: "Name cannot exceed 100 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .toLowerCase(),
  contact: z
    .string()
    .min(7, { message: "Contact number must be at least 7 digits." })
    .max(25, { message: "Contact number cannot exceed 25 characters." })
    .regex(/^[+0-9\s\-()]{7,25}$/, {
      message: "Please enter a valid phone number (e.g. +91 98765 43210).",
    }),
  company_name: z.string().optional(),
  subject: z
    .string()
    .min(3, { message: "Please enter or select an inquiry subject." })
    .max(150, { message: "Subject cannot exceed 150 characters." }),
  message: z
    .string()
    .min(10, { message: "Please provide at least 10 characters describing your inquiry." })
    .max(3000, { message: "Message cannot exceed 3000 characters." }),
  attachment: z
    .custom<File | null | undefined>()
    .refine(
      (file) => {
        if (!file || typeof file !== "object" || !("size" in file)) return true;
        return (file as File).size <= MAX_FILE_SIZE;
      },
      {
        message: "File exceeds the 15MB maximum size limit.",
      }
    )
    .refine(
      (file) => {
        if (!file || typeof file !== "object" || !("name" in file)) return true;
        const fileName = (file as File).name.toLowerCase();
        return ACCEPTED_FILE_EXTENSIONS.some((ext) => fileName.endsWith(ext));
      },
      {
        message:
          "Unsupported file format. Please upload PDF, images (PNG, JPG, WEBP), CAD files (DWG, DXF, STEP, IGES), or ZIP.",
      }
    )
    .optional()
    .nullable(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const POPULAR_SUBJECTS = [
  "Request for Quotation (RFQ)",
  "Custom CNC Machining & Turning",
  "Material Specification & RoHS",
  "OEM / Distribution Partnership",
  "Quality & Metrology Report Inquiry",
  "General Inquiry",
] as const;
