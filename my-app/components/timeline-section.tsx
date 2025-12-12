"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Rocket, Users, Target, Zap } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Descubrimiento",
    description:
      "Conversamos sobre tu visión, necesidades y objetivos. Mantenemos una comunicación constante para entender exactamente lo que necesitas.",
    gradient: "from-[#e94e1b] to-[#ff7849]",
  },
  {
    icon: Target,
    title: "Planificación Ágil",
    description:
      "Utilizamos metodologías ágiles para crear un plan flexible que se adapta a tus necesidades cambiantes y prioridades del negocio.",
    gradient: "from-[#ff7849] to-[#ffb849]",
  },
  {
    icon: Zap,
    title: "Desarrollo Iterativo",
    description:
      "Construimos tu software mostrandore avances semanales constantes y ajustando según tu feedback continuo.",
    gradient: "from-[#ffb849] to-[#ff9849]",
  },
  {
    icon: Rocket,
    title: "Lanzamiento y Soporte",
    description:
      "Lanzamos tu proyecto con confianza y mantenemos soporte continuo. Porque creemos que las cosas se construyen para durar.",
    gradient: "from-[#ff9849] to-[#e94e1b]",
  },
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-32"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-black md:text-6xl">
            Nuestro Proceso
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-black/70">
            Metodología ágil que garantiza resultados excepcionales en cada
            etapa
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl">
          {/* Animated timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-black/10 md:left-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-[#e94e1b] to-[#ff7849] md:left-1/2"
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#e94e1b] to-[#ff7849] shadow-lg md:left-1/2 md:-translate-x-1/2">
                <step.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content card */}
              <div
                className={`ml-28 w-full md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-8 shadow-xl"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />
                  <h3 className="relative mb-3 text-2xl font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="relative text-black/70">{step.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
