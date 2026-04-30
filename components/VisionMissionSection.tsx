import Container from "@/components/Container";
import Image from "next/image";
import mision from "@/public/mission/mision-vision.jpg";
import Subtitle from "./shared/Subtitle";

const VisionMissionSection = () => {
  return (
    <section
      id="vision"
      className="bg-background-300 py-15 lg:overflow-hidden lg:py-0 lg:min-h-218.25 lg:flex lg:items-center"
    >
      <Container
        as="div"
        className="flex gap-16.75 items-start justify-center lg:gap-29 lg:items-center"
      >
        {/* Rotated photo */}
        <div className="sticky top-(--navbar-height) self-start lg:static overflow-hidden shrink-0 flex items-center justify-center h-97.5 w-62.5 lg:h-140 lg:w-90 group">
          <div className="-rotate-90 flex-none">
            <div className="w-97.5 h-62.5 lg:w-140 lg:h-90 rounded-[20px] overflow-hidden">
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

        {/* Content */}
        <div className="flex flex-col gap-6 flex-1 min-w-0 lg:gap-12">
          <Subtitle>Visión y Misión</Subtitle>

          <div className="flex flex-col gap-16 relative lg:grid lg:grid-cols-2 lg:gap-24">
            {/* Line between circles (only desktop) */}
            <div
              className="hidden lg:block absolute top-[59.5px] left-29.75 right-[calc(50%-48px)] h-0.5 bg-border-400"
              aria-hidden="true"
            />

            {/* Vision */}
            <div className="flex flex-col gap-6 lg:gap-18.5">
              <div className="w-29.75 h-29.75 rounded-full bg-accent-main" />
              <div className="flex flex-col gap-4.25">
                <h3
                  className="font-rokkitt font-bold uppercase leading-12 text-text-500 text-[28px] lg:text-5xl"
                  style={{
                    textShadow:
                      "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                  }}
                >
                  Visión
                </h3>
                <p className="text-base lg:text-xl leading-5 text-text-500  lg:leading-7.5">
                  Ser el estándar de claridad en la industria tecnológica, donde
                  la complejidad se rinde ante la simplicidad inteligente.
                </p>
              </div>
            </div>

            {/* Mision */}
            <div className="flex flex-col gap-6 lg:gap-18.5">
              <div className="w-29.75 h-29.75 rounded-full border-8 border-accent-main" />
              <div className="flex flex-col gap-4.25">
                <h3
                  className="font-rokkitt font-bold uppercase leading-12 text-text-500 text-[28px] lg:text-5xl"
                  style={{
                    textShadow:
                      "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                  }}
                >
                  Misión
                </h3>
                <p className="text-base lg:text-xl leading-5 text-text-500 lg:leading-7.5">
                  Ayudar a las empresas en transición a digitalizar su
                  autoridad, transformando su estructura en un vehículo
                  imparable hacia la abundancia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default VisionMissionSection;
