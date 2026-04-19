"use client";

const keywords = [
  "✦ Alisado Perfecto",
  "✦ Eco Plastia",
  "✦ Brillo Natural",
  "✦ Sin Formol",
  "✦ Duración hasta 12 meses",
  "✦ Diagnóstico Capilar",
  "✦ Resultados Garantizados",
  "✦ Alisado Orgánico",
  "✦ Tratamiento Botox Capilar",
  "✦ Cabello Liso & Saludable",
];

export default function Marquee() {
  const doubled = [...keywords, ...keywords];

  return (
    <div
      className="relative py-5 overflow-hidden"
      style={{
        borderTop: "1px solid rgba(201,169,110,0.12)",
        borderBottom: "1px solid rgba(201,169,110,0.12)",
        background: "rgba(201,169,110,0.03)",
      }}
    >
      {/* Left/Right fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080506, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080506, transparent)" }}
      />

      <div className="marquee-track">
        {doubled.map((word, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm tracking-widest font-medium uppercase whitespace-nowrap"
            style={{ color: i % 4 === 1 ? "var(--accent)" : "rgba(245,240,235,0.45)" }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
