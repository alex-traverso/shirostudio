import Link from "next/link";
import Container from "@/components/Container";

function InstagramIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.75l7.73-8.835L2.003 2.25H8.06l4.263 5.633 5.921-5.633zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2 8l10 7 10-7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
          <span
            className="text-text-100 uppercase font-bold tracking-[0.12em]"
            style={{
              fontFamily: "var(--font-rokkitt), Rokkitt, serif",
              fontSize: "26px",
            }}
          >
            SHIRO
          </span>
          <span
            className="text-text-100 tracking-[0.42em] uppercase font-medium"
            style={{
              fontFamily: "var(--font-montserrat), Montserrat, sans-serif",
              fontSize: "9px",
            }}
          >
            STUDIO
          </span>
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
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-text-100 hover:text-accent-main transition-colors"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-text-100 hover:text-accent-main transition-colors"
          >
            <XIcon />
          </a>
          <a
            href="mailto:hola@shirostudio.com"
            aria-label="Email"
            className="text-text-100 hover:text-accent-main transition-colors"
          >
            <EmailIcon />
          </a>
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
