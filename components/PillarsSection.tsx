import Container from "@/components/Container";
import Image from "next/image";
import logoIWCircles from "@/public/logo-i-circles.svg";
import Button from "./shared/Button";
import PilarCard from "./PillarCard";

const pillars = [
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

const PillarsSection = () => {
  return (
    <section id="us" className="py-32 w-full">
      <Container className="space-y-40">
        {/* TOP: text + logo */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between">
          {/* Text column */}
          <div className="flex flex-col justify-between gap-9 text-center lg:text-left">
            <div className="flex flex-col gap-2.5">
              <p className="text-body-lg-semibold text-text-500">Nosotros</p>
              <h2 className="text-display-lg text-text-500 max-w-[16ch] sm:max-w-[18ch] lg:max-w-[20ch]">
                Shiro significa pureza y potencial absoluto
              </h2>
              <p className="text-body-lg-regular leading-relaxed text-text-500 mt-1 max-w-[35ch] sm:max-w-[40ch] lg:max-w-[45ch]">
                Creamos sistemas simples y sitios web de alto rendimiento para
                ayudar a negocios en crecimiento a organizarse, automatizar
                procesos y escalar sin complejidad.
              </p>
            </div>
            <Button href="#contact">Toma el Control</Button>
          </div>

          {/* Logo */}
          <Image
            src={logoIWCircles}
            alt="Shiro Studio"
            width={485}
            height={350}
          />
        </div>

        {/* PILLARS */}
        <div className="flex flex-col gap-16 items-center">
          <h2 className="text-display-lg text-text-500 text-center">
            Los tres pilares
          </h2>
          <div className="flex gap-10 items-center justify-center flex-wrap">
            {pillars.map((pillar) => (
              <PilarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PillarsSection;
