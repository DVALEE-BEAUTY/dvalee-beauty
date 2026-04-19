"use client";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle } from "lucide-react";

const sparklePositions = [
  { x: "10%", y: "20%", size: 12, delay: 0 },
  { x: "85%", y: "15%", size: 16, delay: 0.5 },
  { x: "5%", y: "75%", size: 10, delay: 1.0 },
  { x: "90%", y: "70%", size: 14, delay: 0.3 },
  { x: "50%", y: "8%", size: 8, delay: 0.8 },
  { x: "70%", y: "85%", size: 12, delay: 0.6 },
];

export default function CTA() {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(201,169,110,0.12) 0%, rgba(232,149,109,0.08) 50%, rgba(201,169,110,0.06) 100%)",
            border: "1px solid rgba(201,169,110,0.25)",
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.08) 0%, transparent 70%)",
            }}
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Floating sparkles */}
          {sparklePositions.map((s, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: s.x, top: s.y }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 3 + s.delay, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={s.size} style={{ color: "var(--accent)" }} />
            </motion.div>
          ))}

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-5xl mb-6 inline-block"
            >
              💇‍♀️
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
              ¿Lista Para Tu{" "}
              <span className="gradient-text">Transformación</span>?
            </h2>

            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "rgba(245,240,235,0.6)" }}>
              No esperes más para tener el cabello que siempre soñaste.
              Tu diagnóstico capilar es completamente <strong style={{ color: "var(--accent)" }}>gratis</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.link/ox4rcr"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-base"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))",
                  color: "#080506",
                  boxShadow: "0 8px 40px rgba(201,169,110,0.4)",
                }}
              >
                <MessageCircle size={18} />
                Solicita tu Diagnóstico Gratis
              </motion.a>
              <motion.a
                href="https://www.instagram.com/dvalee_beauty/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-semibold text-base glass-card"
                style={{ border: "1px solid rgba(201,169,110,0.25)", color: "var(--foreground)" }}
              >
                📸 Ver Resultados
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
