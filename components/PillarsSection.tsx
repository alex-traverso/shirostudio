import Container from "@/components/Container";
import Image from "next/image";
import logoIWCircles from "@/public/logo-i-circles.svg";
import Button from "./shared/Button";
import PilarCard from "./PillarCard";
import Title from "./shared/Title";
import Subtitle from "./shared/Subtitle";
import FadeInSection from "./shared/FadeInSection";

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
    <section id="us" className="py-20 lg:py-32 w-full">
      <Container className="space-y-28 lg:space-y-40">
        {/* TOP: text + logo */}
        <FadeInSection>
          <div className="flex flex-col-reverse md:flex-row items-center lg:items-stretch justify-between gap-y-7">
            {/* Text column */}
            <div className="w-full md:w-auto flex flex-col items-start lg:justify-between gap-9 lg:text-left">
              <div className="flex flex-col gap-2.5">
                <Subtitle className="text-text-500">Nosotros</Subtitle>
                <Title className="text-text-500 max-w-[16ch] md:max-w-[20ch] lg:max-w-[20ch]">
                  Shiro significa pureza y potencial absoluto
                </Title>
                <p className="text-sm md:text-md lg:text-lg leading-relaxed text-text-500 mt-1 max-w-[30ch] md:max-w-[32ch] lg:max-w-[45ch]">
                  Creamos sistemas simples y sitios web de alto rendimiento para
                  ayudar a negocios en crecimiento a organizarse, automatizar
                  procesos y escalar sin complejidad.
                </p>
              </div>
              <Button href="#contact">Toma el Control</Button>
            </div>

            {/* Logo */}
            <div className="w-3xs lg:w-121.25 h-auto">
              <Image
                src={logoIWCircles}
                alt="Shiro Studio"
                width={485}
                height={350}
              />
            </div>
          </div>
        </FadeInSection>

        {/* PILLARS */}
        <FadeInSection>
          <div className="flex flex-col gap-7 md:gap-16 items-center">
            <Title className="uppercase">Los tres pilares</Title>
            <div className="flex gap-5 lg:gap-10 items-center justify-center flex-wrap">
              {pillars.map((pillar) => (
                <PilarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
};

export default PillarsSection;
