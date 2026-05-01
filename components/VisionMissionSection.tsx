import Container from "@/components/Container";
import Image from "next/image";
import mision from "@/public/mission/mision-vision.jpg";
import Subtitle from "./shared/Subtitle";
import FadeInSection from "./shared/FadeInSection";

const VisionMissionSection = () => {
  return (
    <section
      id="vision"
      className="bg-background-300 py-20 lg:py-0 lg:overflow-hidden lg:min-h-218.25 lg:flex lg:items-center"
    >
      <Container
        as="div"
        className="flex flex-col gap-10 md:flex-row md:gap-16.75 md:items-start md:justify-center lg:gap-29 lg:items-center"
      >
        {/* Mobile image — landscape, full-width, no rotation */}
        <FadeInSection>
          <div className="md:hidden w-full h-64 rounded-5xl overflow-hidden">
            <Image
              src={mision}
              alt="Shiro Studio"
              height={300}
              width={560}
              className="w-full h-full object-cover"
            />
          </div>
        </FadeInSection>

        {/* Tablet/Desktop image — rotated portrait, sticky on tablet */}
        <FadeInSection>
          <div className="hidden md:sticky md:top-(--navbar-height) md:self-start lg:static md:overflow-hidden md:shrink-0 md:flex md:items-center md:justify-center md:h-97.5 md:w-62.5 lg:h-140 lg:w-90 group">
            <div className="-rotate-90 flex-none">
              <div className="md:w-97.5 md:h-62.5 lg:w-140 lg:h-90 rounded-[20px] overflow-hidden">
                <Image
                  src={mision}
                  alt="Shiro Studio"
                  height={300}
                  width={560}
                  className="w-full h-full object-cover transition-transform duration-200 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </FadeInSection>

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
              <div className="flex flex-col gap-6 lg:gap-18.5">
                <div className="w-22 h-22 md:w-29.75 md:h-29.75 rounded-full bg-accent-main" />
                <div className="flex flex-col gap-2 md:gap-4.25">
                  <h3
                    className="font-rokkitt font-bold uppercase leading-12 text-text-500 text-xl md:text-[28px] lg:text-5xl"
                    style={{
                      textShadow:
                        "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                    }}
                  >
                    Visión
                  </h3>
                  <p className="text-sm md:text-base lg:text-xl leading-5 text-text-500 lg:leading-7.5">
                    Ser el estándar de claridad en la industria tecnológica,
                    donde la complejidad se rinde ante la simplicidad
                    inteligente.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Mision */}
            <FadeInSection>
              <div className="flex flex-col gap-6 lg:gap-18.5">
                <div className="w-22 h-22 md:w-29.75 md:h-29.75 rounded-full border-8 border-accent-main" />
                <div className="flex flex-col gap-2 md:gap-4.25">
                  <h3
                    className="font-rokkitt font-bold uppercase leading-12 text-text-500 text-xl md:text-[28px] lg:text-5xl"
                    style={{
                      textShadow:
                        "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                    }}
                  >
                    Misión
                  </h3>
                  <p className="text-sm md:text-base lg:text-xl leading-5 text-text-500 lg:leading-7.5">
                    Ayudar a las empresas en transición a digitalizar su
                    autoridad, transformando su estructura en un vehículo
                    imparable hacia la abundancia.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default VisionMissionSection;
