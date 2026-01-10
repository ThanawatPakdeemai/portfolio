import { z } from "zod";

export const FORM_SCHEMA_CONTACT = z.object({
  subject: z.string().min(1, "Subject is required"),
  full_name: z.string().min(1, "Full name is required"),
  email: z
    .email({ message: "Invalid email address" })
    .min(1, "Email is required"),
  message: z
    .string({ message: "Invalid message address" })
    .min(1, "Message is required"),
});
