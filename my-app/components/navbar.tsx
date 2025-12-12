"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, Rocket, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );
  const borderColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(229, 229, 229, 1)"]
  );

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      style={{ backgroundColor, borderColor }}
      className="fixed left-0 right-0 top-0 z-50 border-b backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Rocket className="h-7 w-7 text-[#e94e1b]" />
              <motion.div
                className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#e94e1b]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
            </div>
            <span className="text-xl font-bold text-black">MARZ SOFTWARE</span>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-medium text-black transition-colors hover:text-[#e94e1b]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
              </motion.button>
            ))}
            <Button
              onClick={() => scrollToSection("#contacto")}
              className="rounded-full bg-gradient-to-r from-[#e94e1b] to-[#ff7849] text-white hover:shadow-lg hover:shadow-[#e94e1b]/30"
            >
              Comenzar proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-black md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className="overflow-hidden md:hidden"
        >
          <div className="space-y-4 py-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full rounded-lg px-4 py-2 text-left font-medium text-black transition-colors hover:bg-gray-100 hover:text-[#e94e1b]"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4">
              <Button
                onClick={() => scrollToSection("#contacto")}
                className="w-full rounded-full bg-gradient-to-r from-[#e94e1b] to-[#ff7849] text-white"
              >
                Comenzar proyecto
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
