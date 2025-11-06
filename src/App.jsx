import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Simple top nav */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/60 bg-white/70 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-gray-900">Tidy Library</a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#get-started" className="text-gray-600 hover:text-gray-900">Get started</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <FeatureGrid />
        <Showcase />

        {/* CTA */}
        <section id="get-started" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Bring order to your reading and work</h3>
            <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">Set up in seconds. Import what matters, then focus with a space that restores attention.</p>
            <div className="mt-8 inline-flex rounded-xl bg-gray-900 text-white px-6 py-3 font-medium shadow-lg shadow-gray-900/10 hover:bg-gray-800">Create your library</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
