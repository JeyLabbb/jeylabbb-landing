'use client'

import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  description: string
  ctaText: string
  ctaHref?: string
  isComingSoon?: boolean
  delay?: number
}

export default function ProjectCard({
  title,
  description,
  ctaText,
  ctaHref,
  isComingSoon = false,
  delay = 0
}: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: "easeOut"
      }
    }
  }

  const hoverVariants = {
    hover: {
      y: -10,
      transition: { duration: 0.3 }
    }
  }

  const CardContent = () => (
    <motion.div
      className={`glass rounded-xl p-6 sm:p-8 h-full flex flex-col justify-between ${
        isComingSoon ? 'opacity-60' : ''
      }`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
    >
      <div>
        <motion.h3 
          className="text-xl sm:text-2xl font-display font-bold holo-text mb-3 sm:mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
          {description}
        </p>
      </div>

      <div>
        {isComingSoon ? (
          <div className="text-center py-2 sm:py-3">
            <span className="text-gray-500 text-xs sm:text-sm font-medium">
              Próximamente...
            </span>
          </div>
        ) : ctaHref ? (
          <motion.a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block text-center w-full text-xs sm:text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {ctaText}
          </motion.a>
        ) : (
          <div className="text-center py-2 sm:py-3">
            <span className="text-gray-500 text-xs sm:text-sm font-medium">
              {ctaText}
            </span>
          </div>
        )}
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )

  if (isComingSoon || !ctaHref) {
    return (
      <div className="relative">
        <CardContent />
      </div>
    )
  }

  return (
    <motion.div 
      className="relative h-full"
      variants={hoverVariants}
    >
      <CardContent />
    </motion.div>
  )
}
