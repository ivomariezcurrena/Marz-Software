"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Users, Zap } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Trato Constante",
    description:
      "Mantenemos comunicación continua durante todo el desarrollo para asegurar que cada detalle cumpla tus expectativas.",
  },
  {
    icon: Lightbulb,
    title: "Diseño Pulcro",
    description:
      "Creamos software visualmente atractivo e intuitivo, porque creemos que la forma es tan importante como la función.",
  },
  {
    icon: Zap,
    title: "Alta Funcionalidad",
    description: "Construimos soluciones robustas y eficientes que resuelven problemas reales de tu negocio.",
  },
  {
    icon: Users,
    title: "Metodologías Ágiles",
    description: "Trabajamos con sprints iterativos para entregarte exactamente lo que quieres y necesitas.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-2 h-2 bg-accent rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-20 w-2 h-2 bg-foreground rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">Por qué elegirnos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creemos que las cosas se construyen como para dios. Damos lo mejor para que todo sea funcional, pulcro e
            intuitivo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 group"
            >
              <motion.div
                className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
