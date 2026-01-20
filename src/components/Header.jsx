import { Sparkles } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative z-20 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 blur-lg opacity-50" />
          </div>
          <span className="text-2xl font-bold text-white">
            Fin<span className="text-cyan-400">Wise</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">
            Features
          </a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#team" className="text-white/70 hover:text-white transition-colors">
            Team
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#features"
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25"
        >
          Get Started
        </a>
      </nav>
    </header>
  )
}
