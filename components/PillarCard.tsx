interface PillarCardProps {
  title: string;
  description: string;
}

export default function PilarCard({ title, description }: PillarCardProps) {
  return (
    <div
      className="bg-background-200 hover:bg-border-100 transition-all cursor-pointer border-b-14 border-accent-selected rounded-5xl lg:rounded-card min-w-40 md:w-48 min-h-48 px-4 lg:w-69.75 lg:h-69.25 flex items-center justify-center pb-3.5"
      style={{
        boxShadow:
          "0px 2.702px 5.404px 0px rgba(112,113,116,0.1), 0px 1.351px 2.702px 0px rgba(112,113,116,0.06)",
      }}
    >
      <div className="w-46.5 flex flex-col">
        <h3 className="font-bold text-base lg:text-[25px] md:leading-10 lg:leading-12.25 text-text-500 uppercase">
          {title}
        </h3>
        <p className="text-sm lg:text-[18px] md:max-w-[15ch] md:leading-5 lg:leading-7.25 text-text-500">
          {description}
        </p>
      </div>
    </div>
  );
}
