"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FormField from "@/components/FormField";
import { submitContactForm } from "@/app/actions/contact";
import Button from "./shared/Button";
import { contactSchema } from "@/app/lib/schemas/contact";
import Subtitle from "./shared/Subtitle";
import Title from "./shared/Title";

type FormData = { name: string; email: string; message: string };
type FormErrors = Partial<FormData>;

function validate(data: FormData): FormErrors {
  const result = contactSchema.safeParse(data);
  if (result.success) return {};

  const errors: FormErrors = {};

  result.error.issues.forEach((issue) => {
    const field = issue.path[0] as keyof FormErrors;

    errors[field] = issue.message;
  });

  return errors;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const result = await submitContactForm(formData);

      if (!result.success && result.errors) {
        setErrors(result.errors);
        return;
      }

      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background-300 flex items-center py-32">
      <Container as="div" className="flex flex-col gap-11.25">
        {/* Header */}
        <div
          className="flex flex-col gap-2.5"
          style={{
            textShadow:
              "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
          }}
        >
          <Subtitle className="text-text-500">Contacto</Subtitle>
          <Title className="text-text-500">¡Hablanos!</Title>

          <div className="mt-1 text-text-500 text-base lg:text-xl">
            <p className=" leading-6.25">
              Tu visión merece un producto digital que esté a la altura de tu
              ambición.
            </p>
            <p className="leading-6.25">
              Hablemos de cómo Shiro puede limpiar tu camino al éxito.
            </p>
          </div>
        </div>

        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-16 min-h-96">
            <p className="text-body-lg-semibold text-text-500">
              ¡En breve estaremos en contacto!
            </p>
            <p className="text-base text-text-400">
              Nos pondremos en contacto a la brevedad.
            </p>
            <Button onClick={handleReset} type="button" variant="outline">
              Enviar otra consulta
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5.25 w-full"
          >
            <FormField
              label="Nombre Completo"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
            />
            <FormField
              label="¿Cómo podemos ayudarte?"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              rows={6}
            />

            <Button disabled={loading} type="submit">
              {loading ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
};

export default ContactSection;
