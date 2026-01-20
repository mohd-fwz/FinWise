import { ExternalLink } from 'lucide-react'

const colorClasses = {
  purple: {
    bg: 'from-purple-600 to-purple-800',
    glow: 'hover:shadow-purple-500/30',
    icon: 'bg-purple-500/20 text-purple-300',
    badge: 'bg-purple-500/20 text-purple-300',
  },
  blue: {
    bg: 'from-blue-600 to-blue-800',
    glow: 'hover:shadow-blue-500/30',
    icon: 'bg-blue-500/20 text-blue-300',
    badge: 'bg-blue-500/20 text-blue-300',
  },
  green: {
    bg: 'from-emerald-600 to-emerald-800',
    glow: 'hover:shadow-emerald-500/30',
    icon: 'bg-emerald-500/20 text-emerald-300',
    badge: 'bg-emerald-500/20 text-emerald-300',
  },
  orange: {
    bg: 'from-orange-500 to-orange-700',
    glow: 'hover:shadow-orange-500/30',
    icon: 'bg-orange-500/20 text-orange-300',
    badge: 'bg-orange-500/20 text-orange-300',
  },
  cyan: {
    bg: 'from-cyan-600 to-cyan-800',
    glow: 'hover:shadow-cyan-500/30',
    icon: 'bg-cyan-500/20 text-cyan-300',
    badge: 'bg-cyan-500/20 text-cyan-300',
  },
}

export default function FeatureCard({
  feature,
  index,
  onExplore,
  onDoubleClick,
  audioEnabled
}) {
  const colors = colorClasses[feature.color] || colorClasses.purple
  const Icon = feature.icon

  const handleClick = () => {
    if (onExplore) {
      onExplore(feature)
    }
  }

  const handleDoubleClick = (e) => {
    e.preventDefault()
    if (onDoubleClick) {
      onDoubleClick(feature)
    }
  }

  return (
    <div
      className={`
        relative group cursor-pointer
        fade-in-up stagger-${index + 1}
      `}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div
        className={`
          relative overflow-hidden rounded-2xl p-6
          bg-gradient-to-br ${colors.bg}
          card-hover ${colors.glow}
          hover:shadow-2xl
          border border-white/10
        `}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl transform -translate-x-16 translate-y-16" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`
            w-14 h-14 rounded-xl ${colors.icon}
            flex items-center justify-center mb-4
            group-hover:scale-110 transition-transform duration-300
          `}>
            <Icon className="w-7 h-7" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">
            {feature.name}
          </h3>

          {/* Description */}
          <p className="text-white/70 text-sm mb-4 line-clamp-2">
            {feature.description}
          </p>

          {/* Author badge */}
          <div className={`
            inline-flex items-center gap-1 px-3 py-1 rounded-full
            ${colors.badge} text-xs font-medium mb-4
          `}>
            <span>by {feature.author}</span>
          </div>

          {/* Explore button */}
          <div className="flex items-center justify-between">
            <span className="text-white/60 text-sm">Click to explore</span>
            <div className={`
              w-10 h-10 rounded-full bg-white/10
              flex items-center justify-center
              group-hover:bg-white/20 group-hover:translate-x-1
              transition-all duration-300
            `}>
              <ExternalLink className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      </div>
    </div>
  )
}
