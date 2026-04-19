"use client";
import { motion } from "framer-motion";
import { Share2, MessageCircle, Scissors } from "lucide-react";

const links = {
  Servicios: ["Alisado Tradicional", "Eco Plastia", "Alisado Orgánico", "Botox Capilar", "Diagnóstico Gratuito"],
  Legal: ["Políticas de Privacidad", "Términos del Servicio", "Política de Reembolso"],
  Ayuda: ["Guía Post Cuidado", "Preguntas Frecuentes", "Contáctanos"],
};

export default function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Divider */}
        <div
          className="h-px w-full mb-16"
          style={{ background: "linear-gradient(to right, transparent, rgba(201,169,110,0.3), transparent)" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-secondary))" }}
              >
                <Scissors size={17} color="#080506" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-xl tracking-wider" style={{ color: "var(--accent)" }}>DVALEE</span>
              <span className="text-sm tracking-widest" style={{ color: "rgba(245,240,235,0.4)" }}>BEAUTY</span>
            </div>

            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: "rgba(245,240,235,0.45)" }}>
              Especialistas en transformación capilar. Alisados premium, tratamientos orgánicos y tecnología de vanguardia para el cabello que mereces.
            </p>

            {/* Social pills */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/dvalee_beauty/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(201,169,110,0.1)",
                  border: "1px solid rgba(201,169,110,0.2)",
                  color: "var(--accent)",
                }}
              >
                <Share2 size={14} /> @dvalee_beauty
              </motion.a>
              <motion.a
                href="https://wa.link/ox4rcr"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.08, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(232,149,109,0.1)",
                  border: "1px solid rgba(232,149,109,0.2)",
                  color: "var(--accent-secondary)",
                }}
              >
                <MessageCircle size={14} /> WhatsApp
              </motion.a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: "var(--accent)" }}>
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200 hover:text-[var(--accent)]"
                      style={{ color: "rgba(245,240,235,0.45)" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
          style={{
            borderTop: "1px solid rgba(201,169,110,0.1)",
            color: "rgba(245,240,235,0.3)",
          }}
        >
          <span>© 2026 DVALEE BEAUTY — Todos los derechos reservados.</span>
          <motion.span
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex items-center gap-1"
          >
            Hecho con <span style={{ color: "var(--accent-secondary)" }}>♥</span> para tu cabello
          </motion.span>
        </div>
      </div>
    </footer>
  );
}
