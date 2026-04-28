interface PillarCardProps {
  title: string;
  description: string;
}

export default function PilarCard({ title, description }: PillarCardProps) {
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
