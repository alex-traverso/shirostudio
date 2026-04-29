import Link from "next/link";
import Container from "./Container";
import logoFooter from "@/public/icons/logo-footer.svg";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/tuusuario",
    icon: RiInstagramFill,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/design-shiro-studio",
    icon: TbBrandLinkedinFilled,
  },
  {
    name: "Email",
    href: "mailto:designshirostudio@gmail.com",
    icon: MdEmail,
  },
];

const navLinks = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#vision", label: "Visión y Misión" },
  { href: "#contact", label: "Contacto" },
];

const Footer = () => {
  return (
    <footer className="bg-background-100 py-12">
      <Container as="div" className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex flex-col items-center leading-none select-none">
          <Link href="#navbar">
            <Image
              src={logoFooter}
              alt="Logo Shiro Studio"
              height={40}
              width={100}
            />
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col items-center gap-2.5">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-body-lg-semibold text-text-100 hover:text-accent-main transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-3.5">
          {SOCIALS.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-text-100 hover:text-accent-main transition-colors"
              >
                <Icon className="w-6 h-6" />
              </Link>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-body-sm-medium text-text-100 text-center">
          Shiro Studio © All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
