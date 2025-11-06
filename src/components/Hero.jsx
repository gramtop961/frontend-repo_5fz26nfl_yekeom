import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] md:h-[86vh] overflow-hidden">
      {/* Interactive Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for contrast (won't block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/50" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur text-sm text-gray-700 shadow-sm border border-white/60">
              <span className="inline-block h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
              Clean reading meets calm productivity
            </span>

            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight">
              Your minimalist library and workstation
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl">
              Collect, read, and work in one serene space. Built for deep focus with a modern, tactile feel.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#get-started"
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 font-medium shadow-lg shadow-gray-900/10 hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900/40"
              >
                Start Reading
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur text-gray-900 px-5 py-3 font-medium shadow-sm border border-gray-200 hover:bg-white"
              >
                Explore Features
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
