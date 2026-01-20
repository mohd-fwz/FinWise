// Text-to-Speech utility functions

// Preferred voice names for more natural, human-like speech
const PREFERRED_VOICES = [
  'Google UK English Female',
  'Google UK English Male',
  'Microsoft Zira',
  'Microsoft David',
  'Samantha',
  'Karen',
  'Daniel',
  'Moira',
  'Google US English',
  'Alex',
]

export const speak = (text, onEnd = null) => {
  // Cancel any ongoing speech
  window.speechSynthesis.cancel()

  if (!text) return

  const utterance = new SpeechSynthesisUtterance(text)

  // Configure voice settings for slower, more human-like speech
  utterance.rate = 0.85   // Slower rate for better comprehension
  utterance.pitch = 1.05  // Slightly higher pitch for warmth
  utterance.volume = 1.0

  // Try to get the most natural sounding voice available
  const voices = window.speechSynthesis.getVoices()

  // First, try to find one of our preferred voices
  let selectedVoice = null

  for (const preferredName of PREFERRED_VOICES) {
    selectedVoice = voices.find(voice =>
      voice.name.includes(preferredName) && voice.lang.startsWith('en')
    )
    if (selectedVoice) break
  }

  // Fallback: Look for any natural/premium voice
  if (!selectedVoice) {
    selectedVoice = voices.find(voice =>
      voice.lang.startsWith('en') &&
      (voice.name.includes('Natural') ||
       voice.name.includes('Premium') ||
       voice.name.includes('Enhanced'))
    )
  }

  // Fallback: Any female English voice (often sounds more natural)
  if (!selectedVoice) {
    selectedVoice = voices.find(voice =>
      voice.lang.startsWith('en') &&
      (voice.name.includes('Female') ||
       voice.name.includes('Zira') ||
       voice.name.includes('Samantha') ||
       voice.name.includes('Karen'))
    )
  }

  // Final fallback: Any English voice
  if (!selectedVoice) {
    selectedVoice = voices.find(voice => voice.lang.startsWith('en-US')) ||
                    voices.find(voice => voice.lang.startsWith('en-GB')) ||
                    voices.find(voice => voice.lang.startsWith('en'))
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice
  }

  // Add slight pauses between sentences for more natural flow
  // (The browser handles this, but the slower rate helps)

  if (onEnd) {
    utterance.onend = onEnd
  }

  // Small delay before speaking to feel more natural
  setTimeout(() => {
    window.speechSynthesis.speak(utterance)
  }, 100)
}

export const stopSpeaking = () => {
  window.speechSynthesis.cancel()
}

export const isSpeaking = () => {
  return window.speechSynthesis.speaking
}

// Preload voices (needed for some browsers)
export const preloadVoices = () => {
  return new Promise((resolve) => {
    const voices = window.speechSynthesis.getVoices()
    if (voices.length > 0) {
      resolve(voices)
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        resolve(window.speechSynthesis.getVoices())
      }
    }
  })
}

// Get available voices for debugging
export const getAvailableVoices = () => {
  return window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'))
}
