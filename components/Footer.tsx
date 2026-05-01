import Link from "next/link";
import Container from "./Container";
import logoFooter from "@/public/icons/logo-footer.svg";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { FooterShape } from "./FooterShape";
import FadeInSection from "./shared/FadeInSection";

const SOCIALS = [
  {
    name: "Instagram",
    href: "https://instagram.com/shiro.studio.co",
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
    <div className="text-[#212121] w-full overflow-hidden">
      <FooterShape className="-mb-px" />
      <footer className="bg-[#212121] pb-7">
        {/* contenido */}
        <Container as="div" className="flex flex-col items-center gap-16 pb-0">
          {/* Logo + Nav */}
          <FadeInSection>
            <div className="flex flex-col items-center gap-6">
              <Link href="#navbar">
                <Image
                  src={logoFooter}
                  alt="Logo Shiro Studio"
                  height={31}
                  width={100}
                />
              </Link>

              <nav className="flex flex-col items-center gap-2.5">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-base font-semibold leading-5 text-text-100 hover:text-accent-main transition-colors"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </FadeInSection>

          {/* Socials + Copyright */}
          <FadeInSection>
            <div className="flex flex-col items-center gap-3.75">
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

              <p className="text-body-sm-medium text-text-100 text-center">
                Shiro Studio © All rights reserved
              </p>
            </div>
          </FadeInSection>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
