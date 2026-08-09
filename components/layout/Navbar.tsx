"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#internships", label: "Internships" },
  { href: "/#resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-border bg-ink/90 backdrop-blur">
      <nav className="container-custom flex items-center justify-between h-16">
        <Link href="/" className="font-display font-bold text-lg text-paper">
       SalmanNazar.
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-slate-muted hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-paper"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-6 font-mono text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-muted hover:text-teal transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}