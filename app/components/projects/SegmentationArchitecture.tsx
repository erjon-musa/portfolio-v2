'use client'

export default function SegmentationArchitecture() {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 py-6 font-mono text-sm leading-relaxed">

      {/* Input */}
      <div className="flex flex-col items-center">
        <div className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] font-semibold">
          Input (3, H, W)
        </div>
        <div className="h-8 w-px bg-gradient-to-b from-cyan-500/50 to-purple-500/50 my-2" />
        <div className="text-purple-400 rotate-90 -mt-3 mb-1">▶</div>
      </div>

      {/* MobileNetV3 Backbone */}
      <div className="relative group">
        <div className="
          p-5 rounded-xl
          bg-white/[0.04] border border-white/[0.1]
          hover:bg-white/[0.06] hover:border-purple-500/50 transition-all duration-300
        ">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-bold text-white text-base">MobileNetV3-Small</h4>
            <span className="hidden sm:block text-xs text-gray-400 border border-gray-600 px-2 py-1 rounded-full bg-black/40">
              Pretrained ImageNet backbone
            </span>
          </div>
          <div className="space-y-3 pl-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-l-2 border-green-500/40 pl-3">
              <span className="text-gray-300">Low-level: 24 ch</span>
              <span className="text-green-400 text-xs sm:text-sm">→ Skip Connection</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-l-2 border-yellow-500/40 pl-3">
              <span className="text-gray-300">Mid-level: 40 ch</span>
              <span className="text-yellow-400 text-xs sm:text-sm">→ Auxiliary Classifier</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 border-l-2 border-purple-500/40 pl-3">
              <span className="text-gray-300">High-level: 576 ch</span>
            </div>
          </div>
        </div>
        {/* Desktop floating annotation for small screens that hide the top pill */}
        <span className="sm:hidden block mt-2 text-center text-xs text-gray-400">
          Pretrained ImageNet backbone
        </span>
      </div>

      {/* Arrow Down */}
      <div className="flex flex-col items-center">
        <div className="h-8 w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50 my-2" />
        <div className="text-blue-400 rotate-90 -mt-3 mb-1">▶</div>
      </div>

      {/* ASPP */}
      <div className="
        p-5 rounded-xl
        bg-white/[0.04] border border-white/[0.1]
        hover:bg-white/[0.06] hover:border-blue-500/50 transition-all duration-300
        flex items-center justify-between
      ">
        <div>
          <h4 className="font-bold text-white text-base mb-1">ASPP</h4>
          <span className="text-gray-400 block text-xs">(rates: 6, 12, 18)</span>
        </div>
        <div className="text-blue-300 text-xs sm:text-sm text-right max-w-[150px] sm:max-w-none">
          ← Multi-scale context
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex flex-col items-center">
        <div className="h-8 w-px bg-gradient-to-b from-blue-500/50 to-rose-500/50 my-2" />
        <div className="text-rose-400 rotate-90 -mt-3 mb-1">▶</div>
      </div>

      {/* Decoder */}
      <div className="
        p-5 rounded-xl
        bg-white/[0.04] border border-white/[0.1]
        hover:bg-white/[0.06] hover:border-rose-500/50 transition-all duration-300
        flex items-center justify-between
      ">
        <div>
          <h4 className="font-bold text-white text-base mb-1">Decoder</h4>
          <span className="text-gray-400 block text-xs">+ Skip Connection</span>
        </div>
        <div className="text-rose-300 text-xs sm:text-sm text-right max-w-[150px] sm:max-w-none">
          ← Fuses ASPP + low-level features
        </div>
      </div>

      {/* Arrow Down */}
      <div className="flex flex-col items-center">
        <div className="h-8 w-px bg-gradient-to-b from-rose-500/50 to-cyan-500/50 my-2" />
        <div className="text-cyan-400 rotate-90 -mt-3 mb-1">▶</div>
      </div>

      {/* Output */}
      <div className="flex flex-col items-center pb-2">
        <div className="px-6 py-2 rounded-full border border-transparent bg-white/[0.08] text-white shadow-lg text-center">
          <span className="font-semibold block sm:inline">Output (21, H, W)</span>
          <span className="sm:ml-3 text-gray-400 text-xs sm:text-sm block sm:inline mt-1 sm:mt-0">
            ← 21 VOC classes
          </span>
        </div>
      </div>

    </div>
  )
}
