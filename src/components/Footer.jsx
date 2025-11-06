import React from 'react'

export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Tidy Library — Built for readers who work.</p>
        <nav className="flex items-center gap-5 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900">Features</a>
          <a href="#get-started" className="hover:text-gray-900">Get started</a>
          <a href="#" className="hover:text-gray-900">Privacy</a>
        </nav>
      </div>
    </footer>
  )
}
