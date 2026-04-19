"use client";
import { motion } from "framer-motion";
import { Sparkles, Star, Wind, Droplets, Crown, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const headline = "Cabello que Habla por Sí Solo";

const floatingIcons = [
  { Icon: Crown, x: "8%", y: "20%", delay: 0 },
  { Icon: Star, x: "88%", y: "15%", delay: 0.4 },
  { Icon: Sparkles, x: "5%", y: "70%", delay: 0.8 },
  { Icon: Wind, x: "90%", y: "65%", delay: 0.2 },
  { Icon: Droplets, x: "75%", y: "82%", delay: 0.6 },
  { Icon: Zap, x: "22%", y: "85%", delay: 1.0 },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
      {/* Floating icons */}
      {mounted && floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-2xl glass-card"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0.6],
            scale: [0, 1, 1],
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { delay: delay + 1.2, duration: 0.6 },
            scale: { delay: delay + 1.2, duration: 0.6 },
            y: { delay: delay + 1.8, duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <Icon size={20} style={{ color: "var(--accent)" }} />
        </motion.div>
      ))}

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full mb-8 glass-card"
        style={{ border: "1px solid rgba(201,169,110,0.3)" }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "var(--accent)" }}>
          Premium Hair Experience · Colombia
        </span>
      </motion.div>

      {/* Main headline – letter by letter */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 max-w-5xl">
        {headline.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40, rotateX: -90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              delay: 0.5 + i * 0.025,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={char === " " ? "inline-block w-4 md:w-6" : "inline-block"}
            style={
              i >= headline.indexOf("Sí") - 0
                ? { color: "var(--foreground)" }
                : {}
            }
          >
            {char === " " ? "\u00A0" : (
              <span className={i > 18 ? "gradient-text" : ""}>{char}</span>
            )}
          </motion.span>
        ))}
      </h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.7 }}
        className="text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        style={{ color: "rgba(245,240,235,0.6)" }}
      >
        Transformamos tu cabello con alisados premium, tratamientos orgánicos y tecnología de vanguardia.
        Resultados visibles desde la primera sesión.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <motion.a
          href="https://wa.link/ox4rcr"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-2xl font-bold text-base tracking-wide transition-shadow duration-300"
          style={{
            background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
            color: "#080506",
            boxShadow: "0 8px 32px rgba(201,169,110,0.35)",
          }}
        >
          💬 Agenda tu Cita Gratis
        </motion.a>
        <motion.a
          href="#servicios"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-4 rounded-2xl font-semibold text-base tracking-wide glass-card"
          style={{ border: "1px solid rgba(201,169,110,0.25)", color: "var(--foreground)" }}
        >
          Ver Servicios →
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "rgba(201,169,110,0.5)" }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--accent), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
