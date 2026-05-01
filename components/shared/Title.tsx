import { ReactNode } from "react";
import clsx from "clsx";

type TitlesProps = {
  children: ReactNode;
  className?: string;
};

export default function Title({ children, className }: TitlesProps) {
  return (
    <h2
      className={clsx(
        `font-rokkitt text-[26px] md:text-[28px] xl:text-[50px] leading-[1.2] xl:leading-[1.16]
        `,
        className,
      )}
    >
      {children}
    </h2>
  );
}
