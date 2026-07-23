export interface Constellation {
  name: string
  nameTr: string
  points: [number, number, number][] // spherical coordinates mapped to 3D celestial sphere
}

/** Converts Right Ascension (hours 0..24) and Declination (deg -90..90) to 3D unit vector */
function radecToVec(raHours: number, decDeg: number, radius = 250): [number, number, number] {
  const raRad = (raHours / 24) * Math.PI * 2
  const decRad = (decDeg / 180) * Math.PI
  const x = Math.cos(decRad) * Math.cos(raRad) * radius
  const y = Math.cos(decRad) * Math.sin(raRad) * radius
  const z = Math.sin(decRad) * radius
  return [x, y, z]
}

export const CONSTELLATIONS: Constellation[] = [
  {
    name: 'Orion',
    nameTr: 'Avcı (Orion)',
    points: [
      radecToVec(5.92, 7.41), radecToVec(5.24, 6.35), // Betelgeuse to Bellatrix
      radecToVec(5.24, 6.35), radecToVec(5.6, -1.94), // Bellatrix to Belt
      radecToVec(5.6, -1.94), radecToVec(5.24, -8.2), // Belt to Rigel
      radecToVec(5.24, -8.2), radecToVec(5.92, 7.41), // Rigel to Betelgeuse
    ],
  },
  {
    name: 'Ursa Major',
    nameTr: 'Büyük Ayı (Ursa Major)',
    points: [
      radecToVec(11.06, 61.75), radecToVec(11.03, 56.38), // Dubhe to Merak
      radecToVec(11.03, 56.38), radecToVec(11.9, 53.69), // Merak to Phecda
      radecToVec(11.9, 53.69), radecToVec(12.25, 57.03), // Phecda to Megrez
      radecToVec(12.25, 57.03), radecToVec(12.9, 55.96), // Megrez to Alioth
      radecToVec(12.9, 55.96), radecToVec(13.4, 49.31), // Alioth to Mizar
      radecToVec(13.4, 49.31), radecToVec(13.79, 49.31), // Mizar to Alkaid
    ],
  },
  {
    name: 'Cassiopeia',
    nameTr: 'Kraliçe (Cassiopeia)',
    points: [
      radecToVec(0.15, 59.15), radecToVec(0.67, 56.54), // Schedar to Caph
      radecToVec(0.67, 56.54), radecToVec(0.94, 60.72), // Caph to Gamma Cas
      radecToVec(0.94, 60.72), radecToVec(1.43, 60.23), // Gamma Cas to Ruchbah
      radecToVec(1.43, 60.23), radecToVec(1.9, 63.67), // Ruchbah to Segin
    ],
  },
  {
    name: 'Scorpius',
    nameTr: 'Akrep (Scorpius)',
    points: [
      radecToVec(16.49, -26.43), radecToVec(16.09, -19.8), // Antares to Graffias
      radecToVec(16.49, -26.43), radecToVec(16.84, -34.29), // Antares to Wei
      radecToVec(16.84, -34.29), radecToVec(17.56, -37.0), // Wei to Shaula
    ],
  },
  {
    name: 'Cygnus',
    nameTr: 'Kuğu (Cygnus / Northern Cross)',
    points: [
      radecToVec(20.69, 45.28), radecToVec(20.37, 40.26), // Deneb to Sadr
      radecToVec(20.37, 40.26), radecToVec(19.51, 27.96), // Sadr to Albireo
      radecToVec(19.75, 45.13), radecToVec(20.37, 40.26), // Gienah to Sadr
      radecToVec(20.37, 40.26), radecToVec(21.31, 30.22), // Sadr to Delta Cyg
    ],
  },
]
