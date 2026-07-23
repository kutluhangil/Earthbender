<div align="center">

<br />

<img src="https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge&logoColor=white" alt="status" />
<img src="https://img.shields.io/badge/Three.js-r160-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="threejs" />
<img src="https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react&logoColor=black" alt="react" />
<img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="tailwind" />
<img src="https://img.shields.io/badge/Vite-5.0-646cff?style=for-the-badge&logo=vite&logoColor=white" alt="vite" />

<br /><br />

```
 █████╗ ███████╗████████╗██████╗  ██████╗ ██████╗ ███████╗███╗   ██╗██████╗ ███████╗██╗██████╗ 
██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗██╔════╝██║██╔══██╗
███████║███████╗   ██║   ██████╔╝██║   ██║██████╔╝█████╗  ██╔██╗ ██║██║  ██║█████╗  ██║██████╔╝
██╔══██║╚════██║   ██║   ██╔══██╗██║   ██║██╔══██╗██╔══╝  ██║╚██╗██║██║  ██║██╔══╝  ██║██╔══██╗
██║  ██║███████║   ██║   ██║  ██║╚██████╔╝██████╔╝███████╗██║ ╚████║██████╔╝███████╗██║██║  ██║
╚═╝  ╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝╚═╝  ╚═══╝
```

### **Astrobender** — Gerçek Zamanlı Güneş Sistemi & 3D Gök Cismi Simülatörü

**8K/4K/2K Fotogerçekçi Gezegenler & Uydular** · 10,000+ Canlı Uydu · Güneş, Merkür, Venüs, Dünya, Mars, Jüpiter, Satürn, Uranüs, Neptün, Plüton · WebGL & Three.js

[🚀 Canlı Uygulama](http://localhost:3000) · [📡 CelesTrak TLE API](https://celestrak.org/) · [⚡ Satellite.js](https://github.com/shashwatak/satellite-js)

</div>

---

## ✦ Genel Bakış

**Astrobender**, Güneş Sistemi'nin tüm gezegenlerini ve önemli uydularını **3D Globe** olarak simüle ederken, Dünya etrafındaki 10.000'den fazla uydunun (Starlink, ISS, Hubble, GPS, enkazlar) yörüngelerini **SGP4 uzay fiziği hesaplamaları** ile gerçek zamanlı olarak 3D uzay ortamında sunan fotogerçekçi bir uzay gözlem platformudur. 

Platform; **Güneş**, **Merkür**, **Venüs**, **Dünya**, **Ay**, **Mars (Phobos & Deimos)**, **Jüpiter (Io, Europa, Ganymede, Callisto)**, **Satürn (3D Halka, Titan, Enceladus)**, **Uranüs (Titania, Oberon)**, **Neptün (Triton)** ve **Plüton** gök cisimlerini yüksek çözünürlüklü kaplamalar, özel GLSL plazma/atmosfer shader'ları, halka geometrileri, tarihi uzay iniş sahaları (Apollo 11, Perseverance, Huygens) ve sinematik camera takibi ile 3D ortamda sunar.

> **Tüm yörüngeler gerçektir.** Uyduların anlık ECI konumları NORAD TLE verileri üzerinden `satellite.js` ve Web Workers ile mikro-saniyelik hassasiyetle hesaplanır.

---

## ⚡ Öne Çıkan Özellikler

| Özellik | Açıklama |
|--------|----------|
| 🪐 **3D Güneş Sistemi (8 Gezegen + Plüton + 12 Uydu)** | Merkür'den Plüton'a kadar tüm gezegenler ve uyduları 3D mesh ve orbital animasyonlarla sahnede. |
| 🎬 **Remedy Control Oyun Stili Lokasyon Başlıkları** | Gezegen ve uydulara uçarken beliren devasa tipografik "Control" oyunu lokasyon kartları. |
| 🌍 **8K Fotogerçekçi Dünya** | 8192x4096 Gündüz, Gece, Bulut, Topografya Bump & Speküler Yansıma katmanları. |
| 🌕 **8K Ay & Krater Topografyası** | Ay 3D küresi, 8K Bump map, regolit yansıması ve Apollo İniş Bölgeleri. |
| 🚀 **Tarihi Uzay İniş Alanları (Apollo, Perseverance, Huygens)** | Ay, Mars, Venüs ve Titan yüzeyindeki tarihi keşif görevlerinin 3D pinleri ve bilimsel modal kartları. |
| ☀️ **8K 3D Güneş & Canlı Plazma** | GLSL plazma akışı, fotosfer fırtına animasyonu ve Hacimsel Korona Tacı. |
| 🪐 **3D Satürn Halkası** | Şeffaf alpha kanallı özel 3D Ring geometry ile detaylı Satürn halka sistemi. |
| 🛰️ **10,000+ Canlı Uydu Takibi** | Starlink, ISS, Hubble, GPS ve uzay enkazlarının canlı SGP4 yörünge simülasyonu. |
| 🚀 **Sinematik Otopilot Uzay Turu** | Güneş'ten Plüton'a tüm gezegenler ve uydular arasında otomatik sinematik kamera gezintisi. |
| ⚖️ **Scale Sandbox (Gerçek Boyut Karşılaştırması)** | Gezegenlerin ve Güneş'in gerçek göreceli yarıçap ve hacim oranlarını yan yana karşılaştıran interaktif ekran. |
| 🔊 **Derin Uzay Ambiyans Sesi (Web Audio API)** | Canlı sentezlenen uzay boşluğu ve radyo dalgaları ambiyans ses üreteci. |
| 🏙️ **Metropol & İniş Bölgeleri** | İstanbul, Tokyo, London, NY ve Apollo 11/12/15/17 iniş sahaları 3D pin etiketleri. |
| ⏱️ **Zaman Makinesi & Zaman Çubuğu** | Zamanı ileri/geri sarma, simülasyon hızını ayarlama ve anlık TLE güncelleme. |

---

## 🛠️ Teknoloji

```
Çatı         →  Vite 5 · React 18 · TypeScript
3D Motoru    →  Three.js (r160) · GLSL Custom Shaders · Post-processing Bloom
Uzay Fiziği →  SGP4 Orbit Propagator · Satellite.js · Web Workers
Tipografi    →  Remedy's Control Game Style (Syncopate Bold + Outfit Heavy)
Stil         →  Tailwind CSS v3.4 · Glassmorphism HUD
Veri Kaynağı →  CelesTrak NORAD Live TLE Data (Active + Debris)
```

---

## 🔄 Proje Yapısı

```
Astrobender/
├── app/
│   ├── public/
│   │   ├── textures/       # 8K/4K/2K Earth, Moon, Sun & All Planets + Moons maps
│   │   └── data/           # Live NORAD TLE Data Snapshots
│   ├── src/
│   │   ├── components/
│   │   │   └── hud/        # IdentityBlock, ClockCard, SearchBox, LayerPanel, DetailPanel, LandingSiteModal, CinematicTitleOverlay
│   │   ├── hooks/          # useTleData, useSimClock, usePropagator
│   │   ├── lib/            # globe-engine.ts (3D Core Engine) · planets.ts · landing-sites.ts · audio-synth.ts
│   │   ├── workers/        # propagator.worker.ts (Background SGP4 Calculation)
│   │   └── pages/          # Home.tsx (Main 3D Viewport)
```

---

## 🚀 Kurulum & Çalıştırma

### Gereksinimler
- Node.js `>= 18`
- npm `>= 9`

```bash
# Projeye gidin
cd app

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev        # http://localhost:3000

# Derleme / Build
npm run build
```

---

<div align="center">

Uzay meraklıları ve araştırmacılar için ❤️ ile yapıldı · **[kutluhangil](https://github.com/kutluhangil)**

<br />

*Faydalı bulduysan bir ⭐ bırakmayı düşün.*

</div>
