'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    // Verificar si existe el video de intro
    const video = document.createElement('video')
    video.src = '/intro.mp4'
    video.onloadeddata = () => setShowVideo(true)
    video.onerror = () => setShowVideo(false)

    // Timer para mostrar el preloader
    const timer = setTimeout(() => {
      onComplete()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        {showVideo ? (
          <video
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
            onEnded={onComplete}
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-display font-bold holo-text holo-glow mb-4"
              animate={{ 
                filter: [
                  'drop-shadow(0 0 8px rgba(0, 212, 255, 0.3))',
                  'drop-shadow(0 0 16px rgba(0, 212, 255, 0.5))',
                  'drop-shadow(0 0 24px rgba(0, 212, 255, 0.4))',
                  'drop-shadow(0 0 16px rgba(0, 212, 255, 0.3))',
                  'drop-shadow(0 0 8px rgba(0, 212, 255, 0.3))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              JeyLabbb
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-400 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              AI Engines
            </motion.p>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
