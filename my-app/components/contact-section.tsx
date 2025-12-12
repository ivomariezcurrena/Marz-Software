"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const empresa = formData.get("empresa");
    const mensaje = formData.get("mensaje");

    const subject = `Nuevo contacto web de ${nombre}`;
    const body = `Nombre: ${nombre}\nEmail: ${email}\nEmpresa: ${empresa}\n\nMensaje:\n${mensaje}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, email, empresa, mensaje }),
      });

      if (!res.ok) {
        let details = "";
        try {
          const json = await res.json();
          details = json?.details || json?.error || "";
        } catch (e) {
          details = await res.text().catch(() => "");
        }
        throw new Error(
          details ? `Error servidor: ${details}` : "Error enviando el mensaje"
        );
      }

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
    } catch (err: any) {
      // Fallback: abrir cliente de correo si el envío por servidor falla
      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);
      window.location.href = `mailto:marzsoftware@outlook.com?subject=${encodedSubject}&body=${encodedBody}`;

      toast({
        title: "Error al enviar",
        description:
          err?.message || "Se abrió tu cliente de correo como alternativa.",
      });
    } finally {
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-white py-32">
      <div className="absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <motion.div
        className="absolute right-10 top-20 h-64 w-64 rounded-full"
        style={{
          background: "radial-gradient(circle, #e94e1b 0%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.1,
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-balance text-5xl font-bold text-black md:text-6xl">
            Hablemos de tu proyecto
          </h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-black/70">
            Estamos listos para ayudarte a llevar tu idea al siguiente nivel
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-3xl font-bold text-black">
                Información de contacto
              </h3>
              <p className="mb-8 leading-relaxed text-black/70">
                Completa el formulario y nos pondremos en contacto contigo en
                menos de 24 horas.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e94e1b] to-[#ff7849]">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-black">Email</p>
                  <a
                    href="mailto:contacto@marzsoftware.com"
                    className="text-black/70 transition-colors hover:text-[#e94e1b]"
                  >
                    marzsoftware@outlook.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e94e1b] to-[#ff7849]">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-black">Teléfono</p>
                  <a
                    href="tel:+1234567890"
                    className="text-black/70 transition-colors hover:text-[#e94e1b]"
                  >
                    2804198174
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4 rounded-xl p-4 transition-colors duration-300 hover:bg-gray-50"
                whileHover={{ x: 5 }}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e94e1b] to-[#ff7849]">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-black">Ubicación</p>
                  <p className="text-black/70">Puerto Madryn, Chubut</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-black">
                    Nombre
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre"
                    className="border border-gray-200 transition-all duration-300 focus-visible:border-transparent focus-visible:!ring-0 focus-visible:shadow-[0_0_0_1px_rgba(233,78,27,0.10),0_0_25px_rgba(233,78,27,0.4)]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tu@email.com"
                    className="border border-gray-200 transition-all duration-300 focus-visible:border-transparent focus-visible:!ring-0 focus-visible:shadow-[0_0_0_1px_rgba(233,78,27,0.10),0_0_25px_rgba(233,78,27,0.4)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-black">
                  Empresa
                </Label>
                <Input
                  id="empresa"
                  name="empresa"
                  placeholder="Nombre de tu empresa"
                  className="border border-gray-200 transition-all duration-300 focus-visible:border-transparent focus-visible:!ring-0 focus-visible:shadow-[0_0_0_1px_rgba(233,78,27,0.10),0_0_25px_rgba(233,78,27,0.4)]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje" className="text-black">
                  Mensaje
                </Label>
                <Textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={6}
                  className="border border-gray-200 transition-all duration-300 focus-visible:border-transparent focus-visible:!ring-0 focus-visible:shadow-[0_0_0_1px_rgba(233,78,27,0.10),0_0_25px_rgba(233,78,27,0.4)]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="group w-full rounded-xl bg-gradient-to-r from-[#e94e1b] to-[#ff7849] py-6 text-lg text-white hover:shadow-xl hover:shadow-[#e94e1b]/30"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
