import * as THREE from 'three'

/**
 * 3D Asteroid & Kuiper Belt Instanced Swarm Generator.
 * Creates realistic, 3D cratered rocky asteroids and icy Kuiper objects
 * orbiting the Sun with real Keplerian orbital mechanics.
 */

export interface AsteroidSwarm {
  mainBelt: THREE.InstancedMesh
  kuiperBelt: THREE.InstancedMesh
  update: (simS: number) => void
}

export function createAsteroidSwarm(sunPos: THREE.Vector3): AsteroidSwarm {
  // Create an irregular, cratered rock geometry
  const rockGeo = new THREE.DodecahedronGeometry(0.35, 1)
  const posAttr = rockGeo.attributes.position
  // Displace vertices to make realistic irregular cratered asteroid shapes
  for (let i = 0; i < posAttr.count; i++) {
    const x = posAttr.getX(i)
    const y = posAttr.getY(i)
    const z = posAttr.getZ(i)
    const disp = (Math.sin(x * 5) * Math.cos(y * 5) * Math.sin(z * 5)) * 0.12
    posAttr.setXYZ(i, x + disp, y + disp, z + disp)
  }
  rockGeo.computeVertexNormals()

  // 1. Main Asteroid Belt (Mars - Jupiter: r = 78 to 92 AU)
  const mainCount = 2200
  const mainMat = new THREE.MeshLambertMaterial({
    color: 0x64748b,
    emissive: 0x0f172a,
    flatShading: true,
  })
  const mainBelt = new THREE.InstancedMesh(rockGeo, mainMat, mainCount)

  const mainData: { radius: number; angleOffset: number; speed: number; rotAxis: THREE.Vector3; scale: number; inc: number; yOffset: number }[] = []
  const dummy = new THREE.Object3D()

  for (let i = 0; i < mainCount; i++) {
    const radius = 78 + Math.random() * 14 // between Mars (70) and Jupiter (100)
    const angleOffset = Math.random() * Math.PI * 2
    const speed = (2 * Math.PI) / ((1200 + Math.random() * 800) * 86400) // orbital speed
    const inc = (Math.random() - 0.5) * 0.18 // orbital inclination
    const yOffset = (Math.random() - 0.5) * 4.5
    const scale = 0.2 + Math.random() * 0.5
    const rotAxis = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

    mainData.push({ radius, angleOffset, speed, rotAxis, scale, inc, yOffset })
  }

  // 2. Kuiper Belt (Beyond Neptune: r = 130 to 175 AU)
  const kuiperCount = 1800
  const kuiperMat = new THREE.MeshLambertMaterial({
    color: 0x38bdf8,
    emissive: 0x0369a1,
    flatShading: true,
  })
  const kuiperBelt = new THREE.InstancedMesh(rockGeo, kuiperMat, kuiperCount)

  const kuiperData: { radius: number; angleOffset: number; speed: number; rotAxis: THREE.Vector3; scale: number; inc: number; yOffset: number }[] = []

  for (let i = 0; i < kuiperCount; i++) {
    const radius = 130 + Math.random() * 45 // beyond Neptune (120)
    const angleOffset = Math.random() * Math.PI * 2
    const speed = (2 * Math.PI) / ((3000 + Math.random() * 2000) * 86400)
    const inc = (Math.random() - 0.5) * 0.25
    const yOffset = (Math.random() - 0.5) * 8.0
    const scale = 0.3 + Math.random() * 0.7
    const rotAxis = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()

    kuiperData.push({ radius, angleOffset, speed, rotAxis, scale, inc, yOffset })
  }

  // Update function to animate 3D asteroid rotation & Keplerian orbits
  const update = (simS: number) => {
    // Update Main Belt
    for (let i = 0; i < mainCount; i++) {
      const d = mainData[i]
      const angle = d.angleOffset + simS * d.speed
      const x = sunPos.x + Math.cos(angle) * d.radius
      const y = sunPos.y + Math.sin(angle) * Math.cos(d.inc) * d.radius + d.yOffset
      const z = sunPos.z + Math.sin(angle) * Math.sin(d.inc) * d.radius

      dummy.position.set(x, y, z)
      dummy.scale.setScalar(d.scale)
      dummy.rotation.set(simS * 0.0005 * (i % 3 + 1), simS * 0.0008 * (i % 2 + 1), 0)
      dummy.updateMatrix()
      mainBelt.setMatrixAt(i, dummy.matrix)
    }
    mainBelt.instanceMatrix.needsUpdate = true

    // Update Kuiper Belt
    for (let i = 0; i < kuiperCount; i++) {
      const d = kuiperData[i]
      const angle = d.angleOffset + simS * d.speed
      const x = sunPos.x + Math.cos(angle) * d.radius
      const y = sunPos.y + Math.sin(angle) * Math.cos(d.inc) * d.radius + d.yOffset
      const z = sunPos.z + Math.sin(angle) * Math.sin(d.inc) * d.radius

      dummy.position.set(x, y, z)
      dummy.scale.setScalar(d.scale)
      dummy.rotation.set(simS * 0.0003 * (i % 3 + 1), simS * 0.0006 * (i % 2 + 1), 0)
      dummy.updateMatrix()
      kuiperBelt.setMatrixAt(i, dummy.matrix)
    }
    kuiperBelt.instanceMatrix.needsUpdate = true
  }

  return { mainBelt, kuiperBelt, update }
}
