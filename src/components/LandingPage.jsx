import { useState, useEffect, useRef } from 'react'
import {
  DollarSign,
  FileText,
  Calculator,
  MessageCircle,
  BookOpen,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users
} from 'lucide-react'
import Header from './Header'
import FeatureCard from './FeatureCard'

// Feature configurations with all teammate links
const FEATURES = [
  {
    id: 'budget-tracker',
    name: 'AI Budget Tracker',
    description: 'Upload bank statements and let AI automatically categorize your expenses. Track spending patterns and get personalized insights.',
    url: 'https://ai-budget-tracker-phi.vercel.app/',
    icon: DollarSign,
    color: 'purple',
    author: 'Fawaz',
    narration: 'AI Budget Tracker, built by Fawaz. This tool lets you upload your bank statements in PDF or CSV format. Our AI automatically categorizes every transaction for you. You can track your spending patterns, view detailed analytics, and get personalized budget recommendations. Redirecting you to AI Budget Tracker now.',
  },
  {
    id: 'document-tracker',
    name: 'Document Tracker',
    description: 'Securely track and manage all your important financial documents in one organized place.',
    url: 'https://document-tracker-el.vercel.app/',
    icon: FileText,
    color: 'blue',
    author: 'Shriyans',
    narration: 'Document Tracker, built by Shriyans. This tool helps you keep all your financial documents organized and easily accessible. You can track receipts, invoices, tax documents, and other important papers securely in one place. Redirecting you to Document Tracker now.',
  },
  {
    id: 'tax-buddy',
    name: 'Tax Buddy',
    description: 'AI-powered tax calculator that helps you estimate taxes, find deductions, and plan your finances smartly.',
    url: 'https://ai-finance-tax-buddy.vercel.app/',
    icon: Calculator,
    color: 'green',
    author: 'Aaradhya',
    narration: 'Tax Buddy, built by Aaradhya. This AI-powered tax calculator helps you estimate your taxes accurately. It can find potential deductions you might have missed, estimate your tax liability, and help you plan your finances for the tax season. Redirecting you to Tax Buddy now.',
  },
  {
    id: 'finlit-chatbot',
    name: 'FinLit ChatBot',
    description: 'Chat with an AI assistant to learn about personal finance, investments, and improve your financial literacy.',
    url: 'https://finlit5.vercel.app',
    icon: MessageCircle,
    color: 'orange',
    author: 'Anwesha',
    narration: 'FinLit ChatBot, built by Anwesha. This is an interactive AI chatbot where you can have conversations about personal finance. Ask questions about investments, savings strategies, budgeting tips, and more. It helps improve your financial literacy in an engaging way. Redirecting you to FinLit ChatBot now.',
  },
  {
    id: 'financial-guide',
    name: 'Financial Guide AI',
    description: 'Get personalized financial guidance and tips powered by AI to make better money decisions.',
    url: 'https://fintech-articles-video-delta.vercel.app',
    icon: BookOpen,
    color: 'cyan',
    author: 'Saakshi',
    narration: 'Financial Guide AI, built by Saakshi. This tool provides personalized financial guidance tailored to your specific situation. Get expert tips on saving money, smart investing, debt management, and making better financial decisions. Redirecting you to Financial Guide AI now.',
  },
]

// Stats display
const STATS = [
  { label: 'AI-Powered Tools', value: '5' },
  { label: 'Team Members', value: '5' },
  { label: 'Financial Features', value: '20+' },
]

export default function LandingPage({ onNarrate, onAboutVisible, onFeatureClick, onFeatureDoubleClick, audioEnabled }) {
  const aboutRef = useRef(null)

  // Intersection Observer for About section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onAboutVisible?.()
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '0px'
      }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [onAboutVisible])

  // Handle feature single click - narrate then redirect
  const handleExplore = (feature) => {
    onFeatureClick?.(feature)
  }

  // Handle feature double click - skip narration, redirect immediately
  const handleDoubleClick = (feature) => {
    onFeatureDoubleClick?.(feature)
  }

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative px-6 pt-12 pb-20 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-[128px] opacity-20 float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-[128px] opacity-20 float" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 fade-in-up">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-white/80 text-sm">AI-Powered Financial Suite</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in-up stagger-1">
            Your Complete
            <br />
            <span className="text-gradient">Financial Command Center</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10 fade-in-up stagger-2">
            FinWise brings together five powerful AI tools to help you track expenses,
            manage documents, calculate taxes, learn finance, and get personalized guidance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 fade-in-up stagger-3">
            <a
              href="#features"
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 fade-in-up stagger-4">
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Five Powerful Tools, One Platform
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Each tool is designed to handle a specific aspect of your financial life,
              working together to give you complete control.
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                index={index}
                onExplore={handleExplore}
                onDoubleClick={handleDoubleClick}
                audioEnabled={audioEnabled}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section - with ref for intersection observer */}
      <section id="about" className="px-6 py-20" ref={aboutRef}>
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  How FinWise Works
                </h2>
                <p className="text-white/70 mb-6 leading-relaxed">
                  FinWise is a comprehensive financial management ecosystem built by a team
                  of five developers. Each member contributed a specialized AI-powered tool
                  that addresses a unique financial need.
                </p>
                <p className="text-white/70 mb-8 leading-relaxed">
                  From automatically categorizing your bank transactions using machine learning,
                  to providing real-time tax calculations and personalized financial education,
                  FinWise covers every aspect of modern personal finance management.
                </p>

                {/* Feature highlights */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">AI-Powered Analysis</h4>
                      <p className="text-white/60 text-sm">Advanced machine learning categorizes transactions and provides insights automatically.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Secure & Private</h4>
                      <p className="text-white/60 text-sm">Your financial data is encrypted and processed securely with JWT authentication.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Built by Students</h4>
                      <p className="text-white/60 text-sm">Created as a collaborative project showcasing modern web development skills.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Visual element */}
              <div className="relative">
                <div className="relative z-10 bg-gradient-to-br from-purple-900/50 to-cyan-900/50 rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold text-white mb-6">The FinWise Ecosystem</h3>

                  <div className="space-y-4">
                    {FEATURES.map((feature) => {
                      const Icon = feature.icon
                      const bgColors = {
                        purple: 'bg-purple-500/20',
                        blue: 'bg-blue-500/20',
                        green: 'bg-emerald-500/20',
                        orange: 'bg-orange-500/20',
                        cyan: 'bg-cyan-500/20',
                      }
                      return (
                        <div
                          key={feature.id}
                          className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                          onClick={() => handleExplore(feature)}
                          onDoubleClick={() => handleDoubleClick(feature)}
                        >
                          <div className={`w-10 h-10 rounded-lg ${bgColors[feature.color]} flex items-center justify-center`}>
                            <Icon className="w-5 h-5 text-white/80" />
                          </div>
                          <div className="flex-1">
                            <div className="text-white font-medium text-sm">{feature.name}</div>
                            <div className="text-white/50 text-xs">{feature.author}</div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-white/40" />
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12">
            Five developers, five unique tools, one unified platform.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              // Define gradient colors explicitly for Tailwind
              const gradientColors = {
                purple: 'from-purple-500 to-purple-700',
                blue: 'from-blue-500 to-blue-700',
                green: 'from-emerald-500 to-emerald-700',
                orange: 'from-orange-500 to-orange-700',
                cyan: 'from-cyan-500 to-cyan-700',
              }
              return (
                <div
                  key={feature.id}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-xl"
                  onClick={() => handleExplore(feature)}
                  onDoubleClick={() => handleDoubleClick(feature)}
                >
                  {/* Avatar with gradient */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradientColors[feature.color]} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <span className="text-2xl font-bold text-white">
                      {feature.author.charAt(0)}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-white font-semibold mb-1 text-base">
                    {feature.author}
                  </h3>

                  {/* Tool name */}
                  <p className="text-white/50 text-xs mb-3">
                    {feature.name}
                  </p>

                  {/* Icon badge */}
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br ${gradientColors[feature.color]} opacity-60 group-hover:opacity-100 transition-opacity`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Fin<span className="text-cyan-400">Wise</span>
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <a href="#features" className="text-white/60 hover:text-white transition-colors text-sm">
                Features
              </a>
              <a href="#about" className="text-white/60 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#team" className="text-white/60 hover:text-white transition-colors text-sm">
                Team
              </a>
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              &copy; 2025 FinWise. Built with React & AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
