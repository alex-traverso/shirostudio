import Container from "@/components/Container";
import Image from "next/image";
import mision from "@/public/mission/mision-vision.jpg";
import Subtitle from "./shared/Subtitle";
import FadeInSection from "./shared/FadeInSection";
import VisionMissionItem from "./VissionMissionItem";

const VisionMissionSection = () => {
  return (
    <section
      id="vision"
      className="bg-background-300 py-20 lg:py-37.5 lg:overflow-hidden lg:flex lg:items-center"
    >
      <Container
        as="div"
        className="flex flex-col gap-10 md:flex-row md:gap-16.75 md:items-start md:justify-center lg:gap-29 lg:items-stretch"
      >
        {/* Mobile image — landscape, full-width, no rotation */}
        <div className="md:hidden w-full h-64 relative rounded-5xl overflow-hidden">
          <FadeInSection>
            <Image
              src={mision}
              alt="Shiro Studio"
              fill
              className="w-full h-full object-cover"
            />
          </FadeInSection>
        </div>

        {/* Tablet/Desktop image — rotated portrait, sticky on tablet */}
        <div className="hidden md:sticky md:top-(--navbar-height) md:self-start lg:static md:overflow-hidden md:shrink-0 md:flex md:items-center md:justify-center md:h-97.5 md:w-62.5 lg:self-stretch lg:w-90 group">
          {/* Tablet: rotated portrait */}
          <FadeInSection className="lg:hidden">
            <div className="-rotate-90 flex-none">
              <div className="md:w-97.5 md:h-62.5 rounded-[20px] overflow-hidden">
                <Image
                  src={mision}
                  alt="Shiro Studio"
                  height={300}
                  width={560}
                  className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </FadeInSection>

          {/* Desktop: upright, full height of content */}
          <FadeInSection className="hidden lg:flex h-full w-full">
            <div className="h-full w-full rounded-[20px] overflow-hidden">
              <Image
                src={mision}
                alt="Shiro Studio"
                height={560}
                width={360}
                className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
              />
            </div>
          </FadeInSection>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 md:flex-1 md:min-w-0 lg:gap-12">
          <FadeInSection>
            <Subtitle>Visión y Misión</Subtitle>
          </FadeInSection>

          <div className="flex flex-col gap-16 relative lg:grid lg:grid-cols-2 lg:gap-24">
            {/* Line between circles (only desktop) */}
            <div
              className="hidden lg:block absolute top-[59.5px] left-29.75 right-[calc(50%-48px)] h-0.5 bg-border-400"
              aria-hidden="true"
            />

            {/* Vision */}
            <FadeInSection>
              <VisionMissionItem
                title="Visión"
                description="Ser el estándar de claridad en la industria tecnológica, donde la complejidad se rinde ante la simplicidad inteligente."
              />
            </FadeInSection>

            {/* Mission */}
            <FadeInSection>
              <VisionMissionItem
                title="Misión"
                description="Digitalizar la autoridad de empresas en transición, transformando su estructura en crecimiento claro y sostenible a largo plazo."
                variant="outlined"
              />
            </FadeInSection>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default VisionMissionSection;
