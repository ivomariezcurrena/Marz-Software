"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";

export function CTASection() {
  // Generar posiciones y animaciones deterministas para las estrellas
  const stars = useMemo(() => {
    function seededRandom(seed: number) {
      let x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }
    // Redondear a 4 decimales para evitar diferencias de precisión entre SSR y cliente
    const round = (num: number) => Math.round(num * 10000) / 10000;
    return Array.from({ length: 20 }, (_, i) => {
      const left = round(seededRandom(i + 1) * 100);
      const top = round(seededRandom(i + 21) * 100);
      const duration = round(4 + seededRandom(i + 41) * 2);
      const delay = round(seededRandom(i + 61) * 2);
      return { left, top, duration, delay };
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e94e1b] via-[#ff7849] to-[#e94e1b] p-16 shadow-2xl"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            {stars.map((star, i) => (
              <motion.div
                key={i}
                className="absolute h-2 w-2 rounded-full bg-white/20"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: star.duration,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: star.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-5xl font-bold text-white md:text-6xl"
            >
              ¿Listo para llevar tu negocio a Marte?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-xl text-white/90 md:text-2xl"
            >
              Comencemos una conversación sobre cómo podemos transformar tu
              visión en realidad
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="group bg-white text-lg font-semibold text-black shadow-xl hover:bg-white/90"
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Hablemos de tu proyecto
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
