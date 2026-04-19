"use client";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const stats = [
  { value: 1200, suffix: "+", label: "Clientes Felices", description: "Transformaciones realizadas" },
  { value: 98, suffix: "%", label: "Satisfacción", description: "Clientes que repiten" },
  { value: 12, suffix: " meses", label: "Duración Máxima", description: "Con cuidados adecuados" },
  { value: 5, suffix: " años", label: "Experiencia", description: "En tratamientos capilares" },
];

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, value, count]);

  return (
    <span>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl p-8 md:p-12"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.06), rgba(232,149,109,0.04))",
            border: "1px solid rgba(201,169,110,0.15)",
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 gradient-text"
                >
                  <Counter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>
                <div className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>
                  {stat.label}
                </div>
                <div className="text-xs" style={{ color: "rgba(245,240,235,0.45)" }}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
