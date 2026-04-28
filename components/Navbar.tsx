"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/icons/logo.svg";
import email from "@/public/icons/email.svg";
import linkedin from "@/public/icons/linkedin.svg";
import instagram from "@/public/icons/instagram.svg";

export type SocialItem = {
  name: string;
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const SOCIALS: SocialItem[] = [
  {
    name: "Instagram",
    href: "https://instagram.com/tuusuario",
    src: instagram,
    alt: "Instagram",
    width: 24,
    height: 24,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/design-shiro-studio",
    src: linkedin,
    alt: "LinkedIn",
    width: 24,
    height: 24,
  },
  {
    name: "Email",
    href: "designshirostudio@gmail.com",
    src: email,
    alt: "Email",
    width: 24,
    height: 24,
  },
];

export default function Navbar() {
  return (
    <header
      id="navbar"
      // fixed top-0 right-0
      className="w-full z-50 bg-background-300"
    >
      <div className="max-w-480 mx-auto px-18.75 h-20 flex items-center justify-between">
        {/* Logo + Social Icons */}
        <div className="flex items-center gap-16">
          <Link
            href="#navbar"
            className="flex flex-col leading-none select-none"
          >
            <Image src={logo} alt="Shiro Studio Logo" width={150} height={60} />
          </Link>
          <div className="flex items-center gap-3.5">
            {SOCIALS.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <Image
                  src={social.src}
                  alt={social.alt}
                  width={social.width}
                  height={social.height}
                  className="opacity-70 hover:opacity-100 transition"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-20">
          <Link
            href="#about"
            className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
          >
            Nosotros
          </Link>
          <Link
            href="#services"
            className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#vision"
            className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
          >
            Visión y Misión
          </Link>
          <Link
            href="#contact"
            className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
