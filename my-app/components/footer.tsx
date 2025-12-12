"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black py-12 text-white">
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Rocket className="h-8 w-8 text-[#e94e1b]" />
              <motion.div
                className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#e94e1b]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
            <span className="text-2xl font-bold">MARZ SOFTWARE</span>
          </motion.div>

          <p className="max-w-md text-balance text-center text-white/70">
            "Creemos que el buen software sigue existiendo pero está en marte"
          </p>

          <div className="h-px w-32 bg-white/20" />

          <p className="text-sm text-white/60">
            © {currentYear} Marz Software. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
