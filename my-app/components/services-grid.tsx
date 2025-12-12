"use client";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Smartphone,
  Link2,
  Database,
  Workflow,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Sitios web modernos, responsivos y optimizados para SEO que convierten visitantes en clientes.",
    gradient: "from-[#e94e1b] to-[#ff7849]",
  },
  {
    icon: Code2,
    title: "Sistemas de Gestión",
    description:
      "ERPs y CRMs personalizados que automatizan y optimizan tus procesos empresariales.",
    gradient: "from-[#ff7849] to-[#ffb849]",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Apps nativas y multiplataforma con experiencias de usuario excepcionales.",
    gradient: "from-[#e94e1b] to-[#d43e0b]",
  },
  {
    icon: Link2,
    title: "Integraciones",
    description:
      "Conectamos tus herramientas y sistemas para un flujo de trabajo unificado.",
    gradient: "from-[#ff9849] to-[#e94e1b]",
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description:
      "Diseño y optimización de bases de datos escalables y seguras para tu negocio.",
    gradient: "from-[#ffb849] to-[#ff7849]",
  },
  {
    icon: Workflow,
    title: "Automatización",
    description:
      "Flujos de trabajo automatizados que ahorran tiempo y reducen errores humanos.",
    gradient: "from-[#d43e0b] to-[#e94e1b]",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="servicios"
      className="relative overflow-visible bg-[#e14624] pt-56 pb-32 rounded-b-[50px]"
    >
      {/* Gradiente concentrado arriba */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#842b20] via-[#972e1f] via-[#ad2e1e] via-[#c5301b] via-[#ca4929] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold text-white md:text-6xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-white/80">
            Soluciones completas de software para impulsar tu negocio al
            siguiente nivel
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
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
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-8 shadow-lg transition-all duration-300 hover:shadow-2xl">
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                {/* Icon with gradient */}
                <div className="relative mb-6">
                  <div
                    className={`inline-flex rounded-2xl bg-gradient-to-br ${service.gradient} p-4 shadow-lg`}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="relative mb-3 text-2xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="relative text-white/80">{service.description}</p>

                {/* Decorative corner */}
                <div
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${service.gradient} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
