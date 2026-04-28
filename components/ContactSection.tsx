"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const inputClass =
    "w-full px-3 bg-[#f7f7f7] border border-text-300 rounded-[6px] text-[16px] text-text-500 placeholder:text-text-400 outline-none focus:border-text-400 transition-colors";

  return (
    <section
      id="contact"
      className="bg-background-300 min-h-[841px] flex items-center"
    >
      <Container as="div" className="py-[100px] flex flex-col gap-[45px]">
        {/* Header */}
        <div
          className="flex flex-col gap-2.5 max-w-2xl"
          style={{
            textShadow:
              "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
          }}
        >
          <p className="text-body-lg-semibold text-text-500">Contacto</p>
          <h2 className="text-display-lg text-text-500">¡Hablanos!</h2>
          <p
            className="text-[20px] leading-[25px] text-text-500 mt-1"
            style={{
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            }}
          >
            Tu visión merece un producto digital que esté a la altura de tu
            ambición. Hablemos de cómo Shiro puede limpiar tu camino al éxito.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[21px] max-w-2xl"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`${inputClass} h-12`}
            placeholder="Nombre Completo"
            aria-label="Nombre Completo"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`${inputClass} h-12`}
            placeholder="Email"
            aria-label="Email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className={`${inputClass} pt-[9px] resize-none`}
            placeholder="¿Cómo podemos ayudarte?"
            aria-label="Mensaje"
          />
          <button
            type="submit"
            className="bg-accent-main hover:bg-accent-selected transition-colors text-text-100 text-body-lg-semibold h-12 w-[280px] rounded-[6px] shadow-sm"
          >
            Enviar
          </button>
        </form>
      </Container>
    </section>
  );
}
