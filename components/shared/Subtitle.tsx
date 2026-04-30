import React from "react";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Subtitle = ({ children, className }: Props) => {
  return (
    <p
      className={clsx("text-xs lg:text-base font-semibold", className)}
      style={{
        textShadow:
          "0px 8px 8px rgba(112,113,116,0.04), 0px 20px 24px rgba(112,113,116,0.1)",
      }}
    >
      {children}
    </p>
  );
};

export default Subtitle;
