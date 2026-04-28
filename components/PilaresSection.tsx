import Container from "@/components/Container";
import Image from "next/image";
import logoI from "@/public/logo-i.svg";

interface PilarCardProps {
  title: string;
  description: string;
}

function PilarCard({ title, description }: PilarCardProps) {
  return (
    <div
      className="bg-background-200 border-b-[14.86px] border-accent-selected rounded-card w-69.75 h-69.25 flex items-center justify-center pb-3.5"
      style={{
        boxShadow:
          "0px 2.702px 5.404px 0px rgba(112,113,116,0.1), 0px 1.351px 2.702px 0px rgba(112,113,116,0.06)",
      }}
    >
      <div className="w-46.5 flex flex-col">
        <h3
          className="font-bold text-[25px] leading-12.25 text-text-500 uppercase"
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
          }}
        >
          {title}
        </h3>
        <p
          className="text-[18px] leading-7.25 text-text-500"
          style={{
            fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

const pilares = [
  {
    title: "Claridad",
    description: "Menos funciones innecesarias, más foco estratégico.",
  },
  {
    title: "Potencial",
    description:
      "Construimos activos digitales de lujo, impecables y escalables.",
  },
  {
    title: "Orden",
    description: "Convertimos procesos tensos en flujos de trabajo armónicos.",
  },
];

export default function PilaresSection() {
  return (
    <section className="bg-background-300">
      {/* Nosotros */}
      <Container
        as="div"
        className="py-32 flex gap-23 items-center justify-center"
      >
        {/* Text column */}
        <div className="flex flex-col gap-9 max-w-180.5">
          <div className="flex flex-col gap-2.5">
            <p
              className="text-body-lg-semibold text-text-500"
              style={{
                textShadow:
                  "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
              }}
            >
              Nosotros
            </p>
            <h2
              className="text-display-lg text-text-500"
              style={{
                textShadow:
                  "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
              }}
            >
              Shiro significa
              <br />
              pureza y potencial
              <br />
              absoluto
            </h2>
            <p
              className="text-[18px] leading-5 text-text-500 mt-1"
              style={{
                fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              }}
            >
              Creamos sistemas simples y sitios web de alto rendimiento para
              ayudar a negocios en crecimiento a organizarse, automatizar
              procesos y escalar sin complejidad.
            </p>
          </div>
          <button className="bg-accent-main hover:bg-accent-selected transition-colors text-text-100 text-body-lg-semibold h-12 w-68 rounded-lg shadow-sm">
            Toma el Control
          </button>
        </div>

        {/* Logo I */}
        <div className="relative shrink-0 w-122.5 h-90 hidden lg:block">
          <div className="absolute top-8.5 left-42.5 w-79.5 h-79.5 rounded-full bg-text-200" />
          <div className="absolute top-0 left-0 w-61 h-61 rounded-full bg-text-200" />
          <Image src={logoI} alt="Shiro Studio" height={230} width={230} />
        </div>
      </Container>

      {/* Los tres pilares */}
      <Container as="div" className="pb-32 flex flex-col gap-16 items-center">
        <h2
          className="text-display-lg text-text-500 text-center"
          style={{
            textShadow:
              "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
          }}
        >
          Los tres pilares
        </h2>
        <div className="flex gap-10 items-center justify-center flex-wrap">
          {pilares.map((pilar) => (
            <PilarCard
              key={pilar.title}
              title={pilar.title}
              description={pilar.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
