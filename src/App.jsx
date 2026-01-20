import { useState, useEffect, useCallback } from 'react'
import LandingPage from './components/LandingPage'
import AudioNarrator from './components/AudioNarrator'
import { stopSpeaking } from './utils/speechUtils'

function App() {
  const [audioEnabled, setAudioEnabled] = useState(true) // Auto-enabled for evaluators
  const [currentNarration, setCurrentNarration] = useState('')
  const [hasPlayedWelcome, setHasPlayedWelcome] = useState(false)
  const [hasPlayedAbout, setHasPlayedAbout] = useState(false)
  const [pendingRedirect, setPendingRedirect] = useState(null)

  // Welcome message for evaluators - plays automatically on page load
  const welcomeMessage = `Welcome to FinWise, your complete AI-powered financial management suite.
    This platform brings together five powerful tools built by our team to help you take control of your finances.
    You can track your budget with AI-powered categorization, manage financial documents, calculate taxes,
    learn about personal finance through our chatbot, and get personalized financial guidance.
    Scroll down to explore each feature, or click on any card to try it out.`

  // About section narration
  const aboutMessage = `FinWise is a comprehensive financial management ecosystem built by a team of five developers.
    Each team member contributed a specialized AI-powered tool that addresses a unique financial need.
    From automatically categorizing your bank transactions using machine learning,
    to providing real-time tax calculations and personalized financial education,
    FinWise covers every aspect of modern personal finance management.`

  // Auto-play welcome message on page load
  useEffect(() => {
    if (audioEnabled && !hasPlayedWelcome) {
      // Small delay to let the page render first
      const timer = setTimeout(() => {
        setCurrentNarration(welcomeMessage)
        setHasPlayedWelcome(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [audioEnabled, hasPlayedWelcome, welcomeMessage])

  const handleNarrate = useCallback((text) => {
    if (audioEnabled && text) {
      setCurrentNarration(text)
    }
  }, [audioEnabled])

  // Called when About section comes into view
  const handleAboutVisible = useCallback(() => {
    if (audioEnabled && !hasPlayedAbout) {
      setCurrentNarration(aboutMessage)
      setHasPlayedAbout(true)
    }
  }, [audioEnabled, hasPlayedAbout, aboutMessage])

  // Called when user single-clicks a feature - narrates then redirects
  const handleFeatureClick = useCallback((feature) => {
    if (audioEnabled) {
      // Set the narration and store the URL for redirect after narration ends
      setCurrentNarration(feature.narration)
      setPendingRedirect(feature.url)
    } else {
      // If audio disabled, redirect immediately
      window.open(feature.url, '_blank', 'noopener,noreferrer')
    }
  }, [audioEnabled])

  // Called when user double-clicks a feature - skip narration, redirect immediately
  const handleFeatureDoubleClick = useCallback((feature) => {
    // Stop any ongoing narration
    stopSpeaking()
    setCurrentNarration('')
    setPendingRedirect(null)

    // Redirect immediately
    window.open(feature.url, '_blank', 'noopener,noreferrer')
  }, [])

  const handleNarrationEnd = useCallback(() => {
    setCurrentNarration('')

    // If there's a pending redirect, execute it now
    if (pendingRedirect) {
      window.open(pendingRedirect, '_blank', 'noopener,noreferrer')
      setPendingRedirect(null)
    }
  }, [pendingRedirect])

  const handleToggleAudio = () => {
    const newState = !audioEnabled
    setAudioEnabled(newState)

    if (newState && !hasPlayedWelcome) {
      setCurrentNarration(welcomeMessage)
      setHasPlayedWelcome(true)
    }

    // If turning off, clear any pending redirect
    if (!newState) {
      setPendingRedirect(null)
    }
  }

  return (
    <div className="min-h-screen gradient-bg">
      <AudioNarrator
        enabled={audioEnabled}
        text={currentNarration}
        onToggle={handleToggleAudio}
        onNarrationEnd={handleNarrationEnd}
      />
      <LandingPage
        onNarrate={handleNarrate}
        onAboutVisible={handleAboutVisible}
        onFeatureClick={handleFeatureClick}
        onFeatureDoubleClick={handleFeatureDoubleClick}
        audioEnabled={audioEnabled}
      />
    </div>
  )
}

export default App
