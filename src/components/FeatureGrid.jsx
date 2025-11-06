import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, LayoutGrid, PenTool, Timer } from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Reading Library',
    desc: 'Save articles, PDFs, and books with clean typography and distraction-free view.',
  },
  {
    icon: LayoutGrid,
    title: 'Collections',
    desc: 'Curate themed shelves and smart folders that update automatically.',
  },
  {
    icon: PenTool,
    title: 'Focus Workstation',
    desc: 'Notes, highlights, and split-view for writing alongside your reading.',
  },
  {
    icon: Timer,
    title: 'Focus Timers',
    desc: 'Gentle sessions with ambient streaks to keep momentum without pressure.',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
            Designed for deep work
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A minimal toolkit that stays out of the way while you read, think, and create.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="h-11 w-11 rounded-xl bg-rose-50 text-rose-600 grid place-items-center">
                  {React.createElement(f.icon, { size: 22 })}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-rose-500 font-medium text-sm">
                  Learn more →
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{f.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
