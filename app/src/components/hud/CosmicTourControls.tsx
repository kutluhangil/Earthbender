import { useEffect, useState } from 'react'
import type { CelestialBodyId } from '@/lib/planets'

interface CosmicTourControlsProps {
  onSelectBody: (bodyId: CelestialBodyId) => void
  currentBodyId: CelestialBodyId
}

const TOUR_SEQUENCE: CelestialBodyId[] = [
  'sun',
  'mercury',
  'venus',
  'earth',
  'moon',
  'mars',
  'jupiter',
  'saturn',
  'titan',
  'uranus',
  'neptune',
  'pluto',
]

export default function CosmicTourControls({ onSelectBody }: CosmicTourControlsProps) {
  const [isTourActive, setIsTourActive] = useState(false)
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    if (!isTourActive) return
    const timer = setInterval(() => {
      setStepIndex((prev) => {
        const next = (prev + 1) % TOUR_SEQUENCE.length
        onSelectBody(TOUR_SEQUENCE[next])
        return next
      })
    }, 7000) // 7 seconds per planet

    return () => clearInterval(timer)
  }, [isTourActive, onSelectBody])

  const handleStartTour = () => {
    setIsTourActive(true)
    setStepIndex(0)
    onSelectBody(TOUR_SEQUENCE[0])
  }

  const handleStopTour = () => {
    setIsTourActive(false)
  }

  return (
    <div className="pointer-events-auto flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-[#0a0e17]/80 px-3 py-2 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
      {!isTourActive ? (
        <button
          onClick={handleStartTour}
          className="flex items-center gap-2 font-mono text-xs font-semibold text-cyan-300 hover:text-cyan-200 transition-all"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span>🚀 UZAY TURUNU BAŞLAT</span>
        </button>
      ) : (
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-cyan-200 animate-pulse font-semibold">
            🎬 OTOPİLOT TUR: <span className="uppercase text-cyan-400">{TOUR_SEQUENCE[stepIndex]}</span> ({stepIndex + 1}/{TOUR_SEQUENCE.length})
          </span>
          <button
            onClick={handleStopTour}
            className="rounded border border-rose-500/40 bg-rose-500/20 px-2 py-0.5 text-[10px] text-rose-200 hover:bg-rose-500/40 transition-all"
          >
            DURDUR ⏹️
          </button>
        </div>
      )}
    </div>
  )
}
