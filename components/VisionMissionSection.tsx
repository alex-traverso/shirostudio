import Container from "@/components/Container";

const PHOTO_URL =
  "https://www.figma.com/api/mcp/asset/2714e4bb-dcd8-48d0-83bc-b0d319014c40";

const VisionMissionSection = () => {
  return (
    <section
      id="vision"
      className="bg-background-300 min-h-[873px] flex items-center overflow-hidden"
    >
      <Container
        as="div"
        className="flex gap-[116px] items-center justify-center"
      >
        {/* Rotated photo */}
        <div className="relative shrink-0 flex items-center justify-center h-[562px] w-[360px]">
          <div className="-rotate-90 flex-none">
            <div className="w-[562px] h-[360px] rounded-[20px] overflow-hidden">
              <img
                src={PHOTO_URL}
                alt="Shiro Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12 shrink-0">
          <p
            className="text-body-lg-semibold text-text-500"
            style={{
              textShadow:
                "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
            }}
          >
            Visión y Misión
          </p>
          <div className="flex gap-24 items-start">
            {/* Visión */}
            <div className="flex flex-col gap-[74px]">
              <div className="w-[119px] h-[119px] rounded-full bg-accent-main" />
              <div className="flex flex-col gap-[17px]">
                <h3
                  className="text-display-lg text-text-500"
                  style={{
                    textShadow:
                      "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                  }}
                >
                  Visión
                </h3>
                <p
                  className="text-[20px] leading-[30px] text-text-500 whitespace-nowrap"
                  style={{
                    fontFamily:
                      "var(--font-montserrat), Montserrat, sans-serif",
                  }}
                >
                  Ser el estándar de claridad en
                  <br />
                  la industria tecnológica, donde
                  <br />
                  la complejidad se rinde ante la
                  <br />
                  simplicidad inteligente.
                </p>
              </div>
            </div>

            {/* Misión */}
            <div className="flex flex-col gap-[74px]">
              <div className="w-[119px] h-[119px] rounded-full border-[3px] border-accent-main" />
              <div className="flex flex-col gap-[17px]">
                <h3
                  className="text-display-lg text-text-500"
                  style={{
                    textShadow:
                      "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
                  }}
                >
                  Misión
                </h3>
                <p
                  className="text-[20px] leading-[30px] text-text-500 max-w-[412px]"
                  style={{
                    fontFamily:
                      "var(--font-montserrat), Montserrat, sans-serif",
                  }}
                >
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
