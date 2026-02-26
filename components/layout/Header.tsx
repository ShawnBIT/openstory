"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#research", label: "Research" },
  { href: "#projects", label: "Projects" },
  { href: "#competitions", label: "Competitions" },
  { href: "#blog", label: "Blog" },
  { href: "#life", label: "Life" },
];

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-base/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium text-primary hover:text-accent-green transition-colors"
        >
          WangShen
        </Link>
        <ul className="flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
