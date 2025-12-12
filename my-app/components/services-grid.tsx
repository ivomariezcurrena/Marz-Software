"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Smartphone, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Layers,
    title: "Sistemas de Gestión",
    description:
      "Soluciones personalizadas para optimizar y automatizar los procesos de tu empresa.",
  },
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Sitios web modernos, responsivos y optimizados para convertir visitantes en clientes.",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones",
    description:
      "Apps móviles y de escritorio con diseño intuitivo y experiencia de usuario excepcional.",
  },
  {
    icon: Workflow,
    title: "Integraciones",
    description:
      "Conectamos tus sistemas existentes para que trabajen juntos de manera fluida.",
  },
];

export function ServicesGrid() {
  return (
    <section
      id="servicios"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Soluciones completas de software diseñadas para impulsar tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent bg-card h-full">
                <CardContent className="p-8">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-foreground group-hover:text-accent-foreground transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-foreground mb-3 text-balance">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
