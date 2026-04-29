"use server";

import ContactEmail from "@/components/email/email";
import { ContactFormData, contactSchema } from "../lib/schemas/contact";
import { Resend } from "resend";

export type FormState = {
  success: boolean;
  errors?: Record<string, string>;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(
  data: ContactFormData,
): Promise<FormState> {
  const result = contactSchema.safeParse(data);

  // Validation error
  if (!result.success) {
    const errors: Record<string, string> = {};

    result.error.issues.forEach((issue) => {
      const field = issue.path[0];
      if (typeof field === "string") {
        errors[field] = issue.message;
      }
    });

    return { success: false, errors };
  }

  const { name, email, message } = result.data;

  try {
    await resend.emails.send({
      from: "Shiro Studio <contacto@shirostudio.co>",
      to: "designshirostudio@gmail.com",
      replyTo: email,
      subject: `Nuevo contacto — ${name} - ${email}`,
      react: ContactEmail({ name, email, message }),
    });

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);

    return {
      success: false,
      errors: {
        _form: "No se pudo enviar el mensaje. Intentá nuevamente.",
      },
    };
  }
}
