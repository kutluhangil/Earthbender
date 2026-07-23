import { useEffect, useState } from 'react'
import type { CelestialBodyId } from '@/lib/planets'
import { CELESTIAL_FACTS } from '@/lib/celestial-facts'

interface CinematicTitleOverlayProps {
  bodyId: CelestialBodyId
}

const DESIGNATION_CODES: Record<CelestialBodyId, { sector: string; code: string }> = {
  sun: { sector: 'SECTOR-00 // CENTRAL STAR', code: 'DESIGNATION: SOL-PRIME' },
  mercury: { sector: 'SECTOR-01 // INNER ORBIT', code: 'DESIGNATION: MERCURY-01' },
  venus: { sector: 'SECTOR-02 // VEILED ZONE', code: 'DESIGNATION: VENUS-ALPHA' },
  earth: { sector: 'SECTOR-03 // HABITABLE ZONE', code: 'DESIGNATION: TERRA-HOME' },
  moon: { sector: 'SECTOR-03 // LUNAR ORBIT', code: 'DESIGNATION: LUNA-PRIMARY' },
  mars: { sector: 'SECTOR-04 // RED FRONTIER', code: 'DESIGNATION: MARS-COLONY' },
  phobos: { sector: 'SECTOR-04 // AREAN ORBIT', code: 'DESIGNATION: PHOBOS-OUTPOST' },
  deimos: { sector: 'SECTOR-04 // AREAN ORBIT', code: 'DESIGNATION: DEIMOS-STATION' },
  jupiter: { sector: 'SECTOR-05 // JOVIAN SYSTEM', code: 'DESIGNATION: JUPITER-KING' },
  io: { sector: 'SECTOR-05 // JOVIAN MOON', code: 'DESIGNATION: IO-VOLCANIC' },
  europa: { sector: 'SECTOR-05 // JOVIAN MOON', code: 'DESIGNATION: EUROPA-OCEANUS' },
  ganymede: { sector: 'SECTOR-05 // JOVIAN MOON', code: 'DESIGNATION: GANYMEDE-HUB' },
  callisto: { sector: 'SECTOR-05 // JOVIAN MOON', code: 'DESIGNATION: CALLISTO-BASE' },
  saturn: { sector: 'SECTOR-06 // RINGWORLD ZONE', code: 'DESIGNATION: SATURN-PRIME' },
  titan: { sector: 'SECTOR-06 // SATURNIAN MOON', code: 'DESIGNATION: TITAN-METHOUS' },
  enceladus: { sector: 'SECTOR-06 // SATURNIAN MOON', code: 'DESIGNATION: ENCELADUS-CRYOS' },
  uranus: { sector: 'SECTOR-07 // ICE GIANT REALM', code: 'DESIGNATION: URANUS-TILT' },
  titania: { sector: 'SECTOR-07 // URANIAN MOON', code: 'DESIGNATION: TITANIA-01' },
  oberon: { sector: 'SECTOR-07 // URANIAN MOON', code: 'DESIGNATION: OBERON-01' },
  neptune: { sector: 'SECTOR-08 // DEEP FROST REALM', code: 'DESIGNATION: NEPTUNE-WINDS' },
  triton: { sector: 'SECTOR-08 // NEPTUNIAN MOON', code: 'DESIGNATION: TRITON-RETRO' },
  pluto: { sector: 'SECTOR-09 // KUIPER RIM', code: 'DESIGNATION: PLUTO-TOMBAUGH' },
}

export default function CinematicTitleOverlay({ bodyId }: CinematicTitleOverlayProps) {
  const [active, setActive] = useState(true)
  const [animKey, setAnimKey] = useState(0)

  const fact = CELESTIAL_FACTS[bodyId]
  const info = DESIGNATION_CODES[bodyId] ?? { sector: 'SECTOR-UNKNOWN', code: 'DESIGNATION: UNKNOWN' }

  // Re-trigger animation on body change
  useEffect(() => {
    setActive(true)
    setAnimKey((k) => k + 1)
    const timer = setTimeout(() => {
      setActive(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [bodyId])

  if (!fact) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center select-none">
      {/* Sci-Fi Center Cinematic Banner */}
      <div
        key={animKey}
        className={`flex flex-col items-center text-center transition-all duration-700 ${
          active
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-4'
        }`}
      >
        {/* Sci-Fi Top Header Lines */}
        <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.4em] text-cyan-400/90 uppercase mb-1 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]">
          <span className="h-[1px] w-8 bg-cyan-400/50" />
          <span>{info.sector}</span>
          <span className="h-[1px] w-8 bg-cyan-400/50" />
        </div>

        {/* Main Sci-Fi Movie Title */}
        <div className="relative px-8 py-2">
          {/* Brackets */}
          <div className="absolute left-0 top-0 bottom-0 w-2 border-l-2 border-t-2 border-b-2 border-cyan-400/60" />
          <div className="absolute right-0 top-0 bottom-0 w-2 border-r-2 border-t-2 border-b-2 border-cyan-400/60" />

          <h2 className="font-mono text-3xl font-extrabold tracking-[0.45em] text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] md:text-5xl uppercase">
            {fact.name}
          </h2>
        </div>

        {/* Sci-Fi Bottom Subtitle & Coordinates */}
        <div className="mt-2 flex flex-col items-center gap-1 font-mono text-[11px] tracking-[0.25em] text-slate-300">
          <span className="text-cyan-300/90 font-semibold">{info.code}</span>
          <span className="text-[10px] text-slate-400">
            {fact.typeTr.toUpperCase()} · RADIUS: {fact.radiusKm}
          </span>
        </div>

        {/* Sci-Fi Scanline bar effect */}
        <div className="mt-3 h-[2px] w-48 overflow-hidden rounded-full bg-cyan-950">
          <div className="h-full w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  )
}
