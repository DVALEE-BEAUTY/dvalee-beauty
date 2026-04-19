"use client";
import { motion } from "framer-motion";

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 grid-pattern opacity-60" />
      {/* Orb 1 - Gold */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(201,169,110,0.13) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orb 2 - Rose/coral */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(232,149,109,0.10) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "10%",
          right: "-5%",
        }}
        animate={{ x: [0, -70, 0], y: [0, -50, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orb 3 - Subtle champagne */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(245,211,148,0.07) 0%, transparent 70%)",
          filter: "blur(100px)",
          top: "40%",
          left: "40%",
        }}
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
