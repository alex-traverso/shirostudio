type Props = {
  title: string;
  description: string;
  variant?: "filled" | "outlined";
};

const VisionMissionItem = ({
  title,
  description,
  variant = "filled",
}: Props) => {
  const isOutlined = variant === "outlined";

  return (
    <div className="flex flex-col gap-6 lg:gap-18.5">
      <div
        className={`w-22 h-22 md:w-29.75 md:h-29.75 rounded-full ${
          isOutlined ? "border-8 border-accent-main" : "bg-accent-main"
        }`}
      />

      <div className="flex flex-col gap-2 md:gap-0">
        <h3
          className="font-rokkitt font-bold uppercase leading-12 text-text-500 text-xl md:text-[28px] lg:text-3xl"
          style={{
            textShadow:
              "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
          }}
        >
          {title}
        </h3>

        <p className="text-sm md:text-base lg:text-base leading-5 text-text-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VisionMissionItem;
