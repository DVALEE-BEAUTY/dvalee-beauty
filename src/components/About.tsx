"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Diagnóstico capilar gratuito antes de cada tratamiento",
  "Productos profesionales libres de parabenos y sulfatos",
  "Atención personalizada 1 a 1, sin prisas",
  "Protocolo de post cuidado incluido en cada servicio",
  "Opciones seguras para embarazadas y cabellos teñidos",
  "Resultados visibles y duraderos desde la primera sesión",
];

export default function About() {
  return (
    <section id="nosotras" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Visual — rotating rings */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center"
          style={{ height: 380 }}
        >
          {/* Outer ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 340,
              height: 340,
              border: "1px solid rgba(201,169,110,0.15)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Dot on ring */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
              style={{ background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }}
            />
          </motion.div>

          {/* Middle ring */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 250,
              height: 250,
              border: "1px solid rgba(232,149,109,0.2)",
            }}
            animate={{ rotate: -360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          >
            <div
              className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full"
              style={{ background: "var(--accent-secondary)", boxShadow: "0 0 10px var(--accent-secondary)" }}
            />
          </motion.div>

          {/* Center circle */}
          <div
            className="relative z-10 w-40 h-40 rounded-full flex flex-col items-center justify-center text-center"
            style={{
              background: "linear-gradient(135deg, rgba(201,169,110,0.12), rgba(232,149,109,0.08))",
              border: "1px solid rgba(201,169,110,0.25)",
            }}
          >
            <span className="text-3xl mb-1">👑</span>
            <span className="text-xs tracking-widest uppercase font-medium" style={{ color: "var(--accent)" }}>
              Premium
            </span>
            <span className="text-xs" style={{ color: "rgba(245,240,235,0.5)" }}>
              Hair Care
            </span>
          </div>

          {/* Glow behind circle */}
          <div
            className="absolute w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(201,169,110,0.15), transparent 70%)", filter: "blur(20px)" }}
          />
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-5"
            style={{ background: "rgba(201,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            Nuestra Filosofía
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Más que un Alisado,<br />
            <span className="gradient-text">Una Experiencia</span>
          </h2>

          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(245,240,235,0.6)" }}>
            En DVALEE BEAUTY nos dedicamos exclusivamente al cuidado capilar profesional.
            Cada sesión comienza con un diagnóstico detallado para entender las necesidades reales de tu cabello.
            No somos un salón más — somos expertas apasionadas por resultados que duran.
          </p>

          <div className="flex flex-col gap-3">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 size={18} style={{ color: "var(--accent)", flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm" style={{ color: "rgba(245,240,235,0.7)" }}>{feat}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
