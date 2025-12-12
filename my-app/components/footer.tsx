"use client";

import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import React from "react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black py-12 text-white">
      {/* Decorative stars */}
      {/* Estrellas decorativas con posiciones deterministas */}
      {(() => {
        const stars = React.useMemo(() => {
          function seededRandom(seed: number) {
            let x = Math.sin(seed) * 10000;
            return x - Math.floor(x);
          }
          // Redondear a 4 decimales para evitar diferencias de precisión entre SSR y cliente
          const round = (num: number) => Math.round(num * 10000) / 10000;
          return Array.from({ length: 20 }, (_, i) => {
            const left = round(seededRandom(i + 1) * 100);
            const top = round(seededRandom(i + 21) * 100);
            const duration = round(2 + seededRandom(i + 41) * 2);
            const delay = round(seededRandom(i + 61) * 2);
            return { left, top, duration, delay };
          });
        }, []);
        return (
          <div className="absolute inset-0 overflow-hidden">
            {stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-white"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: star.delay,
                }}
              />
            ))}
          </div>
        );
      })()}

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="./Marz_blanco_completo.svg"
              alt=""
              width={120}
              height={120}
            />
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
