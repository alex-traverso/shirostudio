import Container from "@/components/Container";
import Image from "next/image";
import mision from "@/public/mission/mision-vision.jpg";

const VisionMissionSection = () => {
  return (
    <section
      id="vision"
      className="bg-background-300 min-h-218.25 flex items-center overflow-hidden"
    >
      <Container as="div" className="flex gap-29 items-center justify-center">
        {/* Rotated photo */}
        <div className="relative shrink-0 flex items-center justify-center h-140.5 w-90 group">
          <div className="-rotate-90 flex-none">
            <div className="w-140.5 h-90 rounded-[20px] overflow-hidden">
              <Image
                src={mision}
                alt="Shiro Studio"
                height={500}
                width={500}
                className="
          w-full h-full object-cover
          transition-transform duration-200 ease-out
          group-hover:scale-105
        "
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12 flex-1 min-w-0">
          <p
            className="text-body-lg-semibold text-text-500"
            style={{
              textShadow:
                "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
            }}
          >
            Visión y Misión
          </p>

          {/* grid-cols-2: columnas iguales → la línea usa medidas relativas al grid */}
          <div className="grid grid-cols-2 gap-24 relative">
            {/* Línea entre círculos:
                top    = mitad del círculo (119px / 2 = 59.5px)
                left   = borde derecho del círculo de Visión (119px)
                right  = 50% del grid − mitad del gap (50% − 48px) → borde izquierdo de la col Misión */}
            <div
              className="absolute top-[59.5px] left-29.75 right-[calc(50%-48px)] h-0.5 bg-border-400"
              aria-hidden="true"
            />

            {/* Visión */}
            <div className="flex flex-col gap-18.5">
              <div className="w-29.75 h-29.75 rounded-full bg-accent-main" />
              <div className="flex flex-col gap-4.25">
                <h3
                  className="text-display-lg text-text-500"
                  style={{
                    textShadow:
                      "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                  }}
                >
                  Visión
                </h3>
                <p className="text-[20px] leading-7.5 text-text-500">
                  Ser el estándar de claridad en la industria tecnológica, donde
                  la complejidad se rinde ante la simplicidad inteligente.
                </p>
              </div>
            </div>

            {/* Misión */}
            <div className="flex flex-col gap-18.5">
              <div className="w-29.75 h-29.75 rounded-full border-8 border-accent-main" />
              <div className="flex flex-col gap-4.25">
                <h3
                  className="text-display-lg text-text-500"
                  style={{
                    textShadow:
                      "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                  }}
                >
                  Misión
                </h3>
                <p className="text-[20px] leading-7.5 text-text-500">
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
