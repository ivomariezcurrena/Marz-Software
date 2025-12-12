"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export function HeroParallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden bg-white">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-black/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-block rounded-full bg-gradient-to-r from-[#e94e1b] to-[#ff7849] px-6 py-2 text-sm font-semibold text-white shadow-lg"
        >
          El buen software está en Marte
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 max-w-5xl bg-gradient-to-b from-black to-black/70 bg-clip-text text-6xl font-bold leading-tight text-transparent md:text-8xl"
        >
          Marz Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 max-w-2xl text-xl text-black/70 md:text-2xl"
        >
          Creamos software excepcional para PYMES y empresas. Funcional, pulcro,
          intuitivo y visualmente impactante.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-[#e94e1b] to-[#ff7849] text-lg font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:shadow-[#e94e1b]/50"
            onClick={() =>
              document
                .getElementById("contacto")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative z-10">Comienza tu proyecto</span>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#ff7849] to-[#e94e1b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black bg-white text-lg font-semibold text-black hover:bg-black hover:text-white"
            onClick={() =>
              document
                .getElementById("servicios")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver servicios
          </Button>
        </motion.div>

        {/* Floating Mars planet */}
        <motion.div
          className="absolute bottom-20 right-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#e94e1b] to-[#ff7849] opacity-20 blur-3xl md:h-64 md:w-64"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="h-12 w-8 rounded-full border-2 border-black/30">
          <motion.div
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-[#e94e1b]"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </div>
  );
}
