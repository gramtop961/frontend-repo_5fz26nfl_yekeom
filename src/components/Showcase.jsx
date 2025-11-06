import React from 'react'
import { motion } from 'framer-motion'

export default function Showcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-600 text-sm">
              Built for clarity
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
              A space that feels as calm as paper
            </h3>
            <p className="mt-3 text-lg text-gray-600">
              A soft palette, elegant type, and subtle motion create a reading experience that’s tidy and timeless. Your workspace adapts around your flow.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {['Clean layout', 'Keyboard-first', 'Comfortable contrast', 'Private by default'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-xl border border-gray-200 bg-white p-4 text-gray-800"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur shadow-xl overflow-hidden">
              <div className="aspect-[16/10] w-full bg-gradient-to-br from-rose-100 via-white to-rose-50" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-white to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
