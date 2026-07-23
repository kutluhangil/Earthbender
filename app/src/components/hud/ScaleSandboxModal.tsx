import { PLANETS } from '@/lib/planets'

interface ScaleSandboxModalProps {
  onClose: () => void
}

export default function ScaleSandboxModal({ onClose }: ScaleSandboxModalProps) {
  return (
    <div className="pointer-events-auto fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl rounded-2xl border border-cyan-500/30 bg-[#0a0e17]/95 p-6 text-slate-100 shadow-[0_0_50px_rgba(6,182,212,0.3)]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <h2 className="font-mono text-xl font-bold text-cyan-200 tracking-wide">
              ⚖️ GÜNEŞ SİSTEMİ GERÇEK BOYUT KARŞILAŞTIRMASI (SCALE SANDBOX)
            </h2>
            <p className="font-mono text-xs text-slate-400 mt-1">
              Gezegenlerin ve Güneş'in gerçek göreceli yarıçap ve hacim oranları (Dünya Yarıçapı = 1.0)
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-300 hover:bg-white/10 transition-all"
          >
            Kapat ✖
          </button>
        </div>

        {/* Planet Comparison Bars / Spheres */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-cyan-500/30">
          {/* Sun Row */}
          <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3 font-mono text-sm">
              <span className="text-2xl">☀️</span>
              <div>
                <div className="font-bold text-amber-200">Güneş (Sun)</div>
                <div className="text-[11px] text-amber-300/80">Çap: 1,392,700 km (109.2× Dünya)</div>
              </div>
            </div>
            <div className="w-1/2 bg-amber-950/60 rounded-full h-4 overflow-hidden border border-amber-500/40">
              <div className="bg-gradient-to-r from-amber-500 to-yellow-300 h-full w-full animate-pulse" />
            </div>
          </div>

          {/* Planets Rows */}
          {PLANETS.map((p) => {
            // Earth radius = 6371km. Percent relative to Jupiter (70000km)
            const ratioToEarth = p.radius / 1.0
            const barWidthPercent = Math.max(2, Math.min(100, (p.radius / 1.8) * 100))

            return (
              <div key={p.id} className="rounded-xl border border-white/5 bg-white/[0.03] p-3 flex items-center justify-between">
                <div className="flex items-center gap-3 font-mono text-xs w-1/3">
                  <span className="text-xl">{p.emoji}</span>
                  <div>
                    <div className="font-bold text-slate-200">{p.name}</div>
                    <div className="text-[10px] text-slate-400">{ratioToEarth.toFixed(2)}× Dünya Yarıçapı</div>
                  </div>
                </div>
                <div className="w-2/3 bg-slate-900 rounded-full h-3 overflow-hidden border border-white/10">
                  <div
                    className="bg-cyan-400 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${barWidthPercent}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
