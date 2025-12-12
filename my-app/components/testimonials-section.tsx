"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "CEO, TechStart",
    content:
      "Marz Software transformó completamente nuestra operación. El sistema de gestión que desarrollaron es intuitivo y nos ha ahorrado horas de trabajo manual cada día.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Director, Logística Express",
    content:
      "La comunicación constante y la atención al detalle de Marz Software superó todas nuestras expectativas. Realmente entienden lo que significa construir software de calidad.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Fundadora, CreativoLab",
    content:
      "Nuestra página web y aplicación móvil son impecables. El equipo de Marz Software no solo cumplió con nuestras expectativas, las superó ampliamente.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-black md:text-6xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-black/70">
            Construimos relaciones duraderas basadas en confianza y resultados
            excepcionales
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="relative h-full overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-white to-gray-50 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e94e1b]/5 to-[#ff7849]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Stars */}
                <div className="relative mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-[#e94e1b] text-[#e94e1b]"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="relative mb-6 text-black/80 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="relative">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#e94e1b] to-[#ff7849] mb-3" />
                  <p className="font-bold text-black">{testimonial.name}</p>
                  <p className="text-sm text-black/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
