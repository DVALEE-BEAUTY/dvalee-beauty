"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina M.",
    location: "Cali, Colombia",
    rating: 5,
    text: "Llevaba años buscando alguien que entendiera mi cabello rizado. El alisado orgánico que me hicieron en DVALEE duró 8 meses y mi cabello quedó más sano que antes. ¡Increíble!",
    treatment: "Alisado Orgánico",
    avatar: "V",
  },
  {
    name: "Daniela R.",
    location: "Bogotá, Colombia",
    rating: 5,
    text: "Fui embarazada y tenía miedo de los químicos. Me explicaron todo detalladamente y usaron una fórmula sin formol. Me sentí en manos profesionales en todo momento.",
    treatment: "Eco Plastia",
    avatar: "D",
  },
  {
    name: "Camila T.",
    location: "Medellín, Colombia",
    rating: 5,
    text: "El diagnóstico gratuito me pareció lo más profesional. No me vendieron el tratamiento más caro, sino el que de verdad necesitaba. El resultado habla solo. ¡Gracias!",
    treatment: "Botox Capilar",
    avatar: "C",
  },
];

export default function Testimonials() {
  return (
    <section id="resultados" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-4"
            style={{ background: "rgba(201,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            Testimonios Reales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Lo que Dicen Nuestras{" "}
            <span className="gradient-text">Clientas</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="glow-border rounded-3xl p-7"
              style={{ background: "rgba(255,245,235,0.02)" }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />
                ))}
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(245,240,235,0.65)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Treatment pill */}
              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs mb-5"
                style={{ background: "rgba(201,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(201,169,110,0.15)" }}
              >
                {t.treatment}
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
                  style={{
                    background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                    color: "#080506",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(245,240,235,0.4)" }}>{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
