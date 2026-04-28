import Container from "@/components/Container";

function PlusIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4v16M4 12h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

const services = [
  "Sistemas de Gestión y Dashboards a Medida",
  "Automatización de Procesos",
  "Sitios Web de Alto Rendimiento",
];

function ServiceItem({ title }: { title: string }) {
  return (
    <div className="border-t border-text-100/20 py-[30px] flex items-center justify-between w-full group cursor-pointer hover:px-2 transition-all">
      <div className="flex items-center gap-3">
        <div className="w-[13px] h-[13px] rounded-full bg-accent-main shrink-0" />
        <h3
          className="font-bold text-[25px] leading-[40px] text-text-100 tracking-[-0.3px]"
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
            textShadow:
              "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
          }}
        >
          {title}
        </h3>
      </div>
      <span className="text-text-100 group-hover:text-accent-main transition-colors">
        <PlusIcon />
      </span>
    </div>
  );
}

const ServicesSection = () => {
  return (
    <section id="services" className="bg-background-100 py-37.5">
      <Container as="div" className="flex flex-col gap-16">
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
          {services.map((service) => (
            <ServiceItem key={service} title={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default ServicesSection;
