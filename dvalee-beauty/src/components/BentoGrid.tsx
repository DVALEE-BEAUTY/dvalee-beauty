"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Wind, Leaf, Zap, Heart, Crown, Droplets } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Alisado Tradicional",
    description: "El clásico reinventado. Resultados lisos y perfectos que duran hasta 6 meses con fórmulas mejoradas que respetan tu cabello.",
    span: "col-span-1 md:col-span-2",
    accent: true,
  },
  {
    icon: Leaf,
    title: "Alisado Orgánico",
    description: "Fórmulas 100% libres de formol. Ideal para cabellos sensibles, teñidos y embarazadas.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Wind,
    title: "Eco Plastia",
    description: "Tecnología de alisado de última generación. Sella la cutícula, elimina el frizz y devuelve la vida al cabello dañado.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Zap,
    title: "Botox Capilar",
    description: "Rellena y reconstruye cada hebra. Efecto antiedad capilar que devuelve volumen, brillo y suavidad extrema.",
    span: "col-span-1",
    accent: false,
  },
  {
    icon: Droplets,
    title: "Diagnóstico Gratuito",
    description: "Cada cabello es único. Analizamos tu estructura capilar para recomendarte el tratamiento perfecto para ti.",
    span: "col-span-1 md:col-span-2",
    accent: true,
  },
  {
    icon: Heart,
    title: "Post Cuidado",
    description: "Te entregamos un protocolo personalizado para mantener tus resultados. Te acompañamos antes, durante y después.",
    span: "col-span-1",
    accent: false,
  },
];

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-4"
            style={{ background: "rgba(201,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            Nuestros Servicios
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cada Tratamiento,{" "}
            <span className="gradient-text">Una Transformación</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(245,240,235,0.55)" }}>
            Trabajamos con tecnología de vanguardia y productos premium para lograr el cabello que siempre soñaste.
          </p>
        </motion.div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`${s.span} glow-border rounded-3xl p-6 md:p-8 cursor-default`}
                style={{
                  background: s.accent
                    ? "linear-gradient(135deg, rgba(201,169,110,0.08) 0%, rgba(232,149,109,0.05) 100%)"
                    : "rgba(255,245,235,0.02)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    background: s.accent
                      ? "linear-gradient(135deg, var(--accent), var(--accent-secondary))"
                      : "rgba(201,169,110,0.1)",
                  }}
                >
                  <Icon
                    size={22}
                    style={{ color: s.accent ? "#080506" : "var(--accent)" }}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.55)" }}>
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
