"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Roberto Fernández",
    role: "Dueño, Talleres El Eje",
    content:
      "La verdad, nos ordenaron la vida. Teníamos un lío bárbaro controlando los repuestos entre las sucursales, pero el sistema que nos armaron los chicos de Marz es un caño. Ahora sé exactamente qué tengo en cada taller sin volverme loco con planillas.",
    rating: 5,
  },
  {
    name: "Sofía Herrera",
    role: "Fundadora, Mundo Móvil",
    content:
      "La página quedó increíble, vuela. Los clientes ahora compran los equipos directo por la web sin dar tantas vueltas y nos entran los pedidos solos. La atención de Marz fue de diez, siempre predispuestos a dar una mano con los cambios que pedimos.",
    rating: 5,
  },
  {
    name: "Diego Torres",
    role: "Director, Academia Futuro",
    content:
      "Fue un antes y un después para la academia. Antes perdía mucho tiempo cobrando manual, ahora el sistema hace todo solo: la gente paga y accede al curso al toque. Me solucionaron la parte técnica para que yo me dedique a enseñar. Recomendadísimos.",
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
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                y: { duration: 0.15, ease: "easeOut" },
              }}
              whileHover={{ y: -4 }}
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
