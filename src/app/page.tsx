'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Preloader from '@/components/Preloader'
import Navbar from '@/components/Navbar'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(true)

  const handlePreloaderComplete = () => {
    setShowPreloader(false)
  }

  const projects = [
    {
      title: "Playlists de Spotify con IA",
      description: "Descubre playlists personalizadas generadas por inteligencia artificial. Desde música para trabajar hasta sesiones de entrenamiento, encuentra el soundtrack perfecto para cada momento. Estamos desarrollando la plataforma, apúntate para tener acceso anticipado.",
      ctaText: "Newsletter Early Access",
      ctaHref: "https://newsletterplaylists.jeylabbb.com"
    },
    {
      title: "Proyecto 2 — en proceso…",
      description: "Algo grande se está gestando en los laboratorios de JeyLabbb. Una nueva revolución en el mundo de la inteligencia artificial está por llegar. Los detalles se revelarán pronto.",
      ctaText: "Próximamente",
      isComingSoon: true
    },
    {
      title: "Proyecto 3 — en proceso…",
      description: "El futuro de la automatización está aquí. Un proyecto que cambiará la forma en que interactuamos con la tecnología en nuestro día a día. Mantente atento a nuestras actualizaciones.",
      ctaText: "Próximamente",
      isComingSoon: true
    }
  ]

  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section - Rediseñado */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Título principal */}
          <motion.div
            className="mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 sm:mb-4">
              <span className="holo-text">JeyLabbb</span>
              <span className="ai-engines-text ml-2 sm:ml-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">AI Engines</span>
            </h1>
          </motion.div>

          {/* Introducción motivadora */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-4 sm:mb-8 leading-relaxed">
              Somos dos chavales montando <strong>proyectos reales con IA</strong>, enseñando errores y aciertos, compartiendo el camino. 
              Te mostramos cómo se gana dinero, se aprende y se emprende <strong>desde cero</strong>, sin postureo, en tiempo real.
            </p>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              ¿Quieres seguir nuestro viaje y ser parte de algo grande?
            </p>
          </motion.div>

          {/* CTA Newsletter principal */}
          <motion.div
            className="mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="https://join.jeylabbb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block mb-3 sm:mb-4 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Únete a nuestra Newsletter
            </motion.a>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md mx-auto px-4">
              Gratis, con tu correo recibirás adelantos, aprendizajes, errores y aciertos de lo que vamos montando
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center mx-auto"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold holo-text mb-4 sm:mb-6">
              Proyectos Actuales
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
              Descubre los últimos experimentos en inteligencia artificial de JeyLabbb
            </p>
            <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-pink-500/10 border border-cyan-500/20">
              <p className="text-sm sm:text-base md:text-lg font-medium holo-text-subtle">
                Reto 30 días / 3 proyectos — sin postureo, en tiempo real
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                ctaText={project.ctaText}
                ctaHref={project.ctaHref}
                isComingSoon={project.isComingSoon}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-display font-bold holo-text mb-1 sm:mb-2">
                JeyLabbb <span className="ai-engines-text text-sm sm:text-lg">AI Engines</span>
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                © {new Date().getFullYear()} JeyLabbb. Todos los derechos reservados.
              </p>
            </div>

            <div className="flex space-x-4 sm:space-x-6">
              <motion.a
                href="https://www.instagram.com/jeylabbb?igsh=MXJodzV1anNoMzI3aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="link text-gray-400 hover:text-white text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@jeylabbb?_t=ZN-8zrajzhoeVq&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="link text-gray-400 hover:text-white text-sm sm:text-base"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                TikTok
              </motion.a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
