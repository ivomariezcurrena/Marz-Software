"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import React from "react";

const stats = [
  { number: 30, suffix: "+", label: "Proyectos Completados" },
  { number: 100, suffix: "%", label: "Satisfacción del Cliente" },
  { number: 24, suffix: "/7", label: "Soporte Disponible" },
  { number: 3, suffix: " años", label: "De Experiencia" },
];

function Counter({
  end,
  suffix,
  duration = 2,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-6xl font-bold md:text-7xl">
      <span className="text-white">{count}</span>
      <span className="bg-gradient-to-r from-[#e94e1b] to-[#ff7849] bg-clip-text text-transparent">
        {suffix}
      </span>
    </div>
  );
}

export function StatsSection() {
  // Generar posiciones y animaciones deterministas para las estrellas
  const stars = React.useMemo(() => {
    function seededRandom(seed: number) {
      let x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    }
    // Redondear a 4 decimales para evitar diferencias de precisión entre SSR y cliente
    const round = (num: number) => Math.round(num * 10000) / 10000;
    return Array.from({ length: 30 }, (_, i) => {
      const left = round(seededRandom(i + 1) * 100);
      const top = round(seededRandom(i + 31) * 100);
      const duration = round(3 + seededRandom(i + 61) * 2);
      const delay = round(seededRandom(i + 91) * 2);
      return { left, top, duration, delay };
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-black/95 py-32">
      {/* Animated background */}
      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Resultados Que Hablan
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/70">
            Números que reflejan nuestro compromiso con la excelencia
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <Counter end={stat.number} suffix={stat.suffix} />
              <p className="mt-4 text-lg text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
