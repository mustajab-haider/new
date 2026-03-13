import { useState } from 'react'

import Loading       from './components/Loading'
import FloatingHearts from './components/FloatingHearts'
import MusicBtn      from './components/MusicBtn'
import Overlay       from './components/Overlay'
import Hero          from './components/Hero'
import CardSection   from './components/CardSection'
import GameSection   from './components/GameSection'
import GallerySection from './components/GallerySection'
import FinalSection  from './components/FinalSection'
import Divider       from './components/Divider'

export default function App() {
  const [loaded,      setLoaded]      = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  function scrollToCard() {
    document.getElementById('card-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Loading screen — unmounts itself after fade */}
      {!loaded && <Loading onDone={() => setLoaded(true)} />}

      {/* Global decorations — only render after load */}
      {loaded && <FloatingHearts />}
      {/* {loaded && <MusicBtn />} */}

      {/* Surprise modal */}
      {showOverlay && <Overlay onClose={() => setShowOverlay(false)} />}

      {/* Page */}
      <main className="relative z-[1]">
        <Hero onOpenCard={scrollToCard} />

        <CardSection onShowOverlay={() => setShowOverlay(true)} />

        <Divider emoji="💕" />

        <GameSection />

        <GallerySection />

        <Divider emoji="🌹" />

        <FinalSection onShowOverlay={() => setShowOverlay(true)} />
      </main>
    </>
  )
}
