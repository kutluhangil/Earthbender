import * as THREE from 'three'

export interface BeltAsteroid {
  x: number
  y: number
  z: number
  scale: number
  color: number
}

/** Generate 3,500 procedural asteroids for Main Belt (Mars-Jupiter) and 2,000 for Kuiper Belt */
export function generateAsteroidBelts() {
  const mainBelt: BeltAsteroid[] = []
  const kuiperBelt: BeltAsteroid[] = []

  // Main Belt: orbit radius 55 to 85 units around Sun
  for (let i = 0; i < 3500; i++) {
    const angle = Math.random() * Math.PI * 2
    const r = 55 + Math.random() * 30
    const inc = (Math.random() - 0.5) * 0.25 // subtle tilt
    const x = Math.cos(angle) * r
    const y = Math.sin(angle) * Math.cos(inc) * r
    const z = Math.sin(angle) * Math.sin(inc) * r + (Math.random() - 0.5) * 3
    const scale = 0.08 + Math.random() * 0.22
    const grey = 0.4 + Math.random() * 0.4
    const color = new THREE.Color(grey, grey * 0.9, grey * 0.8).getHex()

    mainBelt.push({ x, y, z, scale, color })
  }

  // Kuiper Belt: orbit radius 130 to 220 units around Sun
  for (let i = 0; i < 2000; i++) {
    const angle = Math.random() * Math.PI * 2
    const r = 130 + Math.random() * 90
    const inc = (Math.random() - 0.5) * 0.4
    const x = Math.cos(angle) * r
    const y = Math.sin(angle) * Math.cos(inc) * r
    const z = Math.sin(angle) * Math.sin(inc) * r + (Math.random() - 0.5) * 8
    const scale = 0.12 + Math.random() * 0.35
    const blueGrey = 0.5 + Math.random() * 0.3
    const color = new THREE.Color(blueGrey * 0.8, blueGrey * 0.9, blueGrey).getHex()

    kuiperBelt.push({ x, y, z, scale, color })
  }

  return { mainBelt, kuiperBelt }
}
