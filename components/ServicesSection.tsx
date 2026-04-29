"use client";

import { useState } from "react";
import Container from "@/components/Container";
import ServiceItem from "./ServicesItem";

const services = [
  {
    title: "Sistemas de Gestión y Dashboards a Medida",
    content: {
      description:
        "Creamos herramientas simples que organizan tu operación y convierten tus datos en información clara para tomar mejores decisiones.",
      items: [
        "Gestión de clientes y leads",
        "Seguimiento de procesos o trabajos",
        "Paneles administrativos adaptados a tu flujo",
        "Dashboards personalizados",
        "Métricas clave en tiempo real",
        "Visualización clara de operaciones",
        "Reportes automatizados",
      ],
    },
  },
  {
    title: "Automatización de Procesos",
    content: {
      description:
        "Eliminamos tareas manuales para que puedas enfocarte en hacer crecer tu negocio.",
      items: [
        "Envío automático de emails y mensajes",
        "Integraciones con WhatsApp, formularios y calendarios",
        "Flujos automatizados para seguimiento de clientes",
        "Automatizaciones simples con IA (chatbots, respuestas, clasificación de datos)",
      ],
    },
  },
  {
    title: "Sitios Web de Alto Rendimiento",
    content: {
      description:
        "Diseñamos y desarrollamos sitios rápidos, claros y pensados para convertir.",
      items: [
        "Landing pages",
        "Sitios institucionales",
        "Optimización de velocidad y experiencia de usuario",
        "Integración con sistemas y automatizaciones",
      ],
    },
  },
];

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="bg-background-100 py-37.5">
      <Container className="flex flex-col gap-16">
        <div
          className="flex flex-col gap-2.5"
          style={{
            textShadow:
              "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
          }}
        >
          <p className="text-body-lg-semibold text-text-100">¿Qué hacemos?</p>
          <h2 className="text-display-lg text-text-100">Servicios</h2>
        </div>
        <div className="flex flex-col w-full border-b border-text-100/20">
          {services.map((service, index) => (
            <ServiceItem
              key={service.title}
              title={service.title}
              content={service.content}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
