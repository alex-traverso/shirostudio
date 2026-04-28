import Container from "@/components/Container";

export default function HeroSection() {
  return (
    <section className="bg-background-300 py-24">
      <Container fullHeight>
        <div className="flex flex-col items-center justify-center text-center gap-12">
          <h1
            className="text-display-hero text-text-500"
            style={{
              textShadow:
                "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
            }}
          >
            Sistemas claros. Negocios que avanzan.
          </h1>
          <button className="bg-accent-main hover:bg-accent-selected transition-colors text-text-100 text-body-lg-semibold h-12 w-68 rounded-lg shadow-sm">
            Toma el Control
          </button>
        </div>
      </Container>
    </section>
  );
}
