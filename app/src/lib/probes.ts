export interface DeepSpaceProbe {
  id: string
  name: string
  nameTr: string
  emoji: string
  launchYear: number
  targetBodyId: string
  distanceAu: number
  angleRad: number
  inclinationRad: number
  speedKmS: number
  statusTr: string
  descriptionTr: string
}

export const DEEP_SPACE_PROBES: DeepSpaceProbe[] = [
  {
    id: 'voyager1',
    name: 'Voyager 1',
    nameTr: 'Voyager 1',
    emoji: '🛰️',
    launchYear: 1977,
    targetBodyId: 'sun',
    distanceAu: 163.0,
    angleRad: 0.85,
    inclinationRad: 0.61,
    speedKmS: 16.9,
    statusTr: 'Yıldızlararası Uzayda (Interstellar Space)',
    descriptionTr: 'İnsanlık tarihinin Dünya\'dan en uzağa ulaşmış yapay nesnesidir. Üzerinde Altın Plak (Golden Record) taşır.',
  },
  {
    id: 'voyager2',
    name: 'Voyager 2',
    nameTr: 'Voyager 2',
    emoji: '🛰️',
    launchYear: 1977,
    targetBodyId: 'sun',
    distanceAu: 136.0,
    angleRad: 3.42,
    inclinationRad: -0.55,
    speedKmS: 15.3,
    statusTr: 'Yıldızlararası Uzayda (Interstellar Space)',
    descriptionTr: 'Jüpiter, Satürn, Uranüs ve Neptün\'ün dördünü de ziyaret etmiş tek uzay aracıdır.',
  },
  {
    id: 'jwst',
    name: 'James Webb Space Telescope (JWST)',
    nameTr: 'James Webb Uzay Teleskobu',
    emoji: '🔭',
    launchYear: 2021,
    targetBodyId: 'earth',
    distanceAu: 0.01, // L2 Point (~1.5M km from Earth)
    angleRad: -0.2,
    inclinationRad: 0.05,
    speedKmS: 0.2,
    statusTr: 'L2 Lagrange Noktasında Aktif',
    descriptionTr: 'İnsanlığın inşa ettiği en güçlü kızılötesi uzay teleskobudur. İlk galaksileri gözlemler.',
  },
  {
    id: 'newhorizons',
    name: 'New Horizons',
    nameTr: 'New Horizons',
    emoji: '🛸',
    launchYear: 2006,
    targetBodyId: 'pluto',
    distanceAu: 58.0,
    angleRad: 4.12,
    inclinationRad: 0.12,
    speedKmS: 13.8,
    statusTr: 'Kuiper Kuşağında İlerliyor',
    descriptionTr: '2015 yılında Plüton\'a ilk yakın geçişi yapmış ve Plüton\'un kalp şeklindeki buzullarını fotoğraflamıştır.',
  },
]
