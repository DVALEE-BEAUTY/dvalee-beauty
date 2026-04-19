"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Scissors } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotras", href: "#nosotras" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div
        className="max-w-6xl mx-auto flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(8,5,6,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderWidth: 1,
          borderStyle: "solid",
          borderColor: scrolled ? "rgba(201,169,110,0.2)" : "transparent",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.4)" : "none",
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))" }}
          >
            <Scissors size={16} color="#080506" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-lg tracking-wider" style={{ color: "var(--accent)" }}>
            DVALEE
          </span>
          <span className="text-sm tracking-widest" style={{ color: "var(--muted)" }}>
            BEAUTY
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm tracking-wide transition-colors duration-200 relative group"
              style={{ color: "rgba(245,240,235,0.65)" }}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ background: "var(--accent)" }}
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.link/ox4rcr"
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
            color: "#080506",
            boxShadow: "0 4px 20px rgba(201,169,110,0.3)",
          }}
        >
          Agenda tu Cita
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" style={{ color: "var(--accent)" }}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-auto max-w-6xl mt-2 rounded-2xl p-6 flex flex-col gap-4"
            style={{
              background: "rgba(8,5,6,0.95)",
              border: "1px solid rgba(201,169,110,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide py-2"
                style={{ color: "rgba(245,240,235,0.8)" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.link/ox4rcr"
              target="_blank"
              rel="noreferrer"
              className="mt-2 text-center py-3 rounded-xl text-sm font-bold"
              style={{
                background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                color: "#080506",
              }}
            >
              Agenda tu Cita
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
