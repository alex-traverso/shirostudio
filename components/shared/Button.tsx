import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "filled" | "outline" | "link";

type ButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type AsLink = ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href">;

type AsButton = ButtonBaseProps & {
  href?: never;
  external?: never;
} & ComponentPropsWithoutRef<"button">;

type Props = AsLink | AsButton;

const baseStyles =
  "text-body-lg-semibold h-12 w-68 rounded-lg mx-auto lg:mx-0 flex items-center justify-center cursor-pointer transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  filled:
    "bg-accent-main hover:bg-accent-hover text-text-100 shadow-sm",
  outline:
    "border border-accent-main text-accent-main hover:bg-accent-main hover:text-text-100",
  link: "text-accent-main",
};

const Button = ({ children, className, variant = "filled", ...props }: Props) => {
  const classes = `${baseStyles} ${variantStyles[variant]}${className ? ` ${className}` : ""}`;

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props as AsLink;
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const { ...rest } = props as AsButton;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;