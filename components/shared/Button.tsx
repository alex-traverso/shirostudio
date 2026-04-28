import Link from "next/link";

interface Props {
  children: string;
  href?: string;
}

const baseStyles =
  "bg-accent-main hover:bg-accent-selected transition-colors text-text-100 text-body-lg-semibold h-12 w-68 rounded-lg shadow-sm mx-auto lg:mx-0 flex items-center justify-center cursor-pointer";

const Button = ({ children, href }: Props) => {
  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    );
  }

  return <button className={baseStyles}>{children}</button>;
};

export default Button;
