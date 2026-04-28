import Container from "@/components/Container";
import Button from "./shared/Button";

const HeroSection = () => {
  return (
    <section className="bg-background-300 w-full min-h-[calc(100vh-var(--navbar-height))] flex items-center">
      <Container>
        <div className="flex flex-col items-center justify-center text-center gap-12">
          <h1
            className="text-display-hero text-text-500"
            style={{
              textShadow:
                "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
            }}
          >
            <span className="block">Sistemas claros.</span>
            <span className="block">Negocios que avanzan.</span>
          </h1>

          <Button href="#contact">Toma el Control</Button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
