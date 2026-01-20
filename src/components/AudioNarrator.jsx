import { useEffect, useState } from 'react'
import { Volume2, VolumeX, Mic } from 'lucide-react'
import { speak, stopSpeaking, preloadVoices } from '../utils/speechUtils'

export default function AudioNarrator({ enabled, text, onToggle, onNarrationEnd }) {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voicesLoaded, setVoicesLoaded] = useState(false)

  // Preload voices on mount
  useEffect(() => {
    preloadVoices().then(() => {
      setVoicesLoaded(true)
    })
  }, [])

  // Speak when text changes and audio is enabled
  useEffect(() => {
    if (enabled && text && voicesLoaded) {
      setIsSpeaking(true)
      speak(text, () => {
        setIsSpeaking(false)
        onNarrationEnd?.()
      })
    }

    return () => {
      if (!enabled) {
        stopSpeaking()
      }
    }
  }, [text, enabled, voicesLoaded, onNarrationEnd])

  // Stop speaking when disabled
  useEffect(() => {
    if (!enabled) {
      stopSpeaking()
      setIsSpeaking(false)
    }
  }, [enabled])

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
        className={`
          relative flex items-center gap-2 px-4 py-3 rounded-full
          font-semibold text-white transition-all duration-300
          ${enabled
            ? 'bg-gradient-to-r from-purple-600 to-cyan-500 audio-pulse'
            : 'bg-gray-700 hover:bg-gray-600'
          }
          shadow-lg hover:scale-105 active:scale-95
        `}
        title={enabled ? 'Disable voice narration' : 'Enable voice narration'}
      >
        {enabled ? (
          <>
            {isSpeaking ? (
              <Mic className="w-5 h-5 animate-pulse" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
            <span className="hidden sm:inline">Audio On</span>
          </>
        ) : (
          <>
            <VolumeX className="w-5 h-5" />
            <span className="hidden sm:inline">Audio Off</span>
          </>
        )}

        {/* Speaking indicator */}
        {isSpeaking && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
          </span>
        )}
      </button>

      {/* Tooltip */}
      <div className={`
        absolute bottom-full right-0 mb-2 px-3 py-2
        bg-gray-900 text-white text-sm rounded-lg
        transition-opacity duration-300 whitespace-nowrap
        ${enabled ? 'opacity-0 pointer-events-none' : 'opacity-0 group-hover:opacity-100'}
      `}>
        Click to enable voice narration
      </div>
    </div>
  )
}
