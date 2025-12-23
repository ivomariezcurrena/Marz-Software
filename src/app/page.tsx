export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">
              <span className="text-black">Marz</span>
              <span className="text-[#e94e1b]">.</span>
              <span className="text-black">Software</span>
            </span>
          </div>
          <ul className="hidden md:flex items-center gap-8">
            <li><a href="#inicio" className="hover:text-[#e94e1b] transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-[#e94e1b] transition-colors">Servicios</a></li>
            <li><a href="#nosotros" className="hover:text-[#e94e1b] transition-colors">Nosotros</a></li>
            <li><a href="#contacto" className="hover:text-[#e94e1b] transition-colors">Contacto</a></li>
          </ul>
          <a
            href="#contacto"
            className="bg-[#e94e1b] text-white px-6 py-2 rounded-full hover:bg-[#d44518] transition-colors font-medium"
          >
            Empezar
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Llevamos tu negocio a
                <span className="text-[#e94e1b]"> nuevas fronteras</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                En Marz Software creamos soluciones digitales innovadoras que impulsan el crecimiento de tu empresa. 
                Como Marte representa nuevos horizontes, nosotros llevamos tu visión más allá.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contacto"
                  className="bg-[#e94e1b] text-white px-8 py-4 rounded-full hover:bg-[#d44518] transition-colors font-medium text-lg"
                >
                  Solicitar Cotización
                </a>
                <a
                  href="#servicios"
                  className="border-2 border-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-colors font-medium text-lg"
                >
                  Ver Servicios
                </a>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-[#e94e1b]/10 rounded-full flex items-center justify-center">
                  <div className="w-60 h-60 bg-[#e94e1b]/20 rounded-full flex items-center justify-center">
                    <div className="w-40 h-40 bg-[#e94e1b] rounded-full flex items-center justify-center shadow-2xl shadow-[#e94e1b]/40">
                      <span className="text-white text-5xl font-bold">M</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#e94e1b] rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 -left-8 w-4 h-4 bg-black rounded-full"></div>
                <div className="absolute top-20 -left-6 w-3 h-3 bg-[#e94e1b]/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos soluciones tecnológicas completas para transformar tu negocio
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#e94e1b]/30 transition-all group">
              <div className="w-14 h-14 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94e1b] transition-colors">
                <svg className="w-7 h-7 text-[#e94e1b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Desarrollo Web</h3>
              <p className="text-gray-600">
                Creamos sitios web y aplicaciones web modernas, responsivas y optimizadas para el mejor rendimiento.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#e94e1b]/30 transition-all group">
              <div className="w-14 h-14 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94e1b] transition-colors">
                <svg className="w-7 h-7 text-[#e94e1b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Apps Móviles</h3>
              <p className="text-gray-600">
                Desarrollamos aplicaciones nativas y multiplataforma que ofrecen experiencias excepcionales.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#e94e1b]/30 transition-all group">
              <div className="w-14 h-14 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94e1b] transition-colors">
                <svg className="w-7 h-7 text-[#e94e1b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Software a Medida</h3>
              <p className="text-gray-600">
                Soluciones personalizadas que se adaptan perfectamente a los procesos de tu negocio.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#e94e1b]/30 transition-all group">
              <div className="w-14 h-14 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94e1b] transition-colors">
                <svg className="w-7 h-7 text-[#e94e1b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Servicios Cloud</h3>
              <p className="text-gray-600">
                Implementación y gestión de infraestructura en la nube para escalar tu negocio.
              </p>
            </div>
            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#e94e1b]/30 transition-all group">
              <div className="w-14 h-14 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94e1b] transition-colors">
                <svg className="w-7 h-7 text-[#e94e1b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Análisis de Datos</h3>
              <p className="text-gray-600">
                Transformamos tus datos en insights accionables para tomar mejores decisiones.
              </p>
            </div>
            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#e94e1b]/30 transition-all group">
              <div className="w-14 h-14 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e94e1b] transition-colors">
                <svg className="w-7 h-7 text-[#e94e1b] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Soporte 24/7</h3>
              <p className="text-gray-600">
                Mantenimiento y soporte continuo para garantizar el funcionamiento óptimo de tus sistemas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <div className="relative">
                <div className="w-full aspect-square max-w-md bg-gradient-to-br from-[#e94e1b]/20 to-[#e94e1b]/5 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-bold text-[#e94e1b] mb-4">M</div>
                    <div className="text-2xl font-semibold text-black">arz Software</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#e94e1b] rounded-2xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-black rounded-xl"></div>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-xl text-gray-600 mb-6">
                <strong className="text-black">Marz Software</strong> nace de la combinación de pasión por la tecnología y visión hacia el futuro. 
                Nuestro nombre fusiona la identidad personal con la inspiración de Marte - símbolo de exploración, 
                innovación y nuevos horizontes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Creemos que cada proyecto es una misión hacia nuevas fronteras digitales. 
                Trabajamos con dedicación para transformar ideas en soluciones tecnológicas 
                que impulsen el crecimiento de nuestros clientes.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-[#e94e1b]">100+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-2xl">
                  <div className="text-4xl font-bold text-[#e94e1b]">50+</div>
                  <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-[#e94e1b] text-white px-10 py-4 rounded-full hover:bg-[#d44518] transition-colors font-medium text-lg"
          >
            Iniciar Conversación
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estamos listos para escuchar tu proyecto y convertirlo en realidad
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#e94e1b] focus:ring-2 focus:ring-[#e94e1b]/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#e94e1b] focus:ring-2 focus:ring-[#e94e1b]/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-[#e94e1b] focus:ring-2 focus:ring-[#e94e1b]/20 transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#e94e1b] text-white py-4 rounded-xl hover:bg-[#d44518] transition-colors font-medium text-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#e94e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Email</div>
                      <div className="font-medium">contacto@marzsoftware.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#e94e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Teléfono</div>
                      <div className="font-medium">+1 234 567 890</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#e94e1b]/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#e94e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Ubicación</div>
                      <div className="font-medium">Buenos Aires, Argentina</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-2xl">
                <h4 className="font-bold mb-2">Horario de Atención</h4>
                <p className="text-gray-600">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Sábados: 10:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-white">Marz</span>
                <span className="text-[#e94e1b]">.</span>
                <span className="text-white">Software</span>
              </span>
            </div>
            <ul className="flex items-center gap-8">
              <li><a href="#inicio" className="hover:text-[#e94e1b] transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-[#e94e1b] transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-[#e94e1b] transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-[#e94e1b] transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Marz Software. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
