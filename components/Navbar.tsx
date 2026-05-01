"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import logo from "@/public/icons/logo.svg";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const SOCIALS = [
  { name: "Instagram", href: "#", icon: RiInstagramFill },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/design-shiro-studio",
    icon: TbBrandLinkedinFilled,
  },
  { name: "Email", href: "#", icon: MdEmail },
];

const SECTIONS = [
  {
    name: "Nosotros",
    href: "#us",
  },
  {
    name: "Servicios",
    href: "#services",
  },
  {
    name: "Visión y Misión",
    href: "#vision",
  },
  {
    name: "Contacto",
    href: "#contact",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 left-0 w-full z-50 overflow-x-hidden",
        scrolled
          ? "lg:shadow-md bg-background-300/80 backdrop-blur-md"
          : "bg-background-300",
      )}
    >
      {/* container-ds */}
      <div className="w-full px-8 md:px-8 lg:px-18.75 pt-5 lg:pt-13.75 lg:pb-8 flex h-auto items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-0 lg:gap-16">
          <Link href="#navbar">
            <Image src={logo} alt="Logo" width={120} height={60} />
          </Link>

          {/* Socials (hidden in mobile) */}
          <div className="hidden lg:flex items-center gap-3.5">
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              return (
                <Link key={social.name} href={social.href}>
                  <Icon className="w-6 h-6 text-text-500 hover:text-accent-main transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-20">
          {SECTIONS.map((item, i) => (
            <Link
              key={`${item.name}-${i}`}
              href={item.href}
              className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* HAMBURGER ICON (mobile/tablet) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-text-500"
        >
          {isOpen ? (
            <HiX className="w-7 h-7" />
          ) : (
            <HiMenu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`w-full px-4 md:px-10 mt-5 lg:hidden overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pb-0"}
        `}
      >
        <div className="w-full rounded-2xl overflow-hidden bg-background-200 shadow-lg">
          {/* SECTIONS */}
          {SECTIONS.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="w-full h-12 flex flex-col items-end justify-center pr-7.5 py-3 border-b border-b-border-300 last:border-none"
            >
              <Link
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}

          {/* SOCIALS */}
          {SOCIALS.map((social, i) => (
            <div
              key={`${social.name}-${i}`}
              className="w-full h-12 flex flex-col items-end justify-center pr-7.5 py-3 border-b border-b-border-300 last:border-none"
            >
              <Link
                href={social.href}
                className="text-body-lg-semibold text-text-500 hover:text-accent-main transition-colors"
              >
                {social.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
