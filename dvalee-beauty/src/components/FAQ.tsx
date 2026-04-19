"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "¿Cuánto dura el tratamiento de alisado?",
    a: "Dependiendo del tipo de alisado (tradicional, orgánico o tecnológico) y los cuidados posteriores, los resultados pueden durar entre 3 a 12 meses.",
  },
  {
    q: "¿Los tratamientos dañan mi cabello?",
    a: "Todo lo contrario. Nuestros tratamientos están diseñados para restaurar y proteger. Utilizamos tecnología de punta que respeta la estructura capilar y devuelve el brillo natural.",
  },
  {
    q: "¿Puedo hacerme un tratamiento si tengo el cabello teñido?",
    a: "¡Por supuesto! De hecho, muchos de nuestros tratamientos son ideales para cabellos con color, ya que sellan y prolongan la pigmentación.",
  },
  {
    q: "¿Necesito cita previa?",
    a: "Sí, trabajamos con agenda personalizada para brindarte atención exclusiva y dedicada. Puedes agendar directo por WhatsApp.",
  },
  {
    q: "¿Puedo hacerme tratamientos si estoy embarazada?",
    a: "Sí, contamos con opciones seguras para embarazadas. Ofrecemos alisados orgánicos y tratamientos libres de formol. Siempre realizamos una evaluación previa.",
  },
  {
    q: "¿Qué incluye el diagnóstico capilar gratuito?",
    a: "Analizamos el poroso, la hidratación, el grosor de la hebra y los daños previos. Con eso determinamos el tratamiento ideal para tus necesidades específicas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase mb-4"
            style={{ background: "rgba(201,169,110,0.1)", color: "var(--accent)", border: "1px solid rgba(201,169,110,0.2)" }}
          >
            Preguntas Frecuentes
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Todo lo que Necesitas{" "}
            <span className="gradient-text">Saber</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${open === i ? "rgba(201,169,110,0.3)" : "rgba(201,169,110,0.12)"}`,
                background: open === i ? "rgba(201,169,110,0.05)" : "rgba(255,245,235,0.02)",
                transition: "background 0.3s ease, border-color 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-sm md:text-base" style={{ color: "var(--foreground)" }}>
                  {faq.q}
                </span>
                <span style={{ color: "var(--accent)", flexShrink: 0, marginLeft: 12 }}>
                  {open === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgba(245,240,235,0.6)" }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
