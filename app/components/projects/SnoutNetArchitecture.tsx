'use client'

export default function SnoutNetArchitecture() {
  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Custom Model */}
        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.1] flex flex-col items-center text-center group hover:bg-white/[0.06] transition-colors">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-4 border border-cyan-500/50">
            <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h4 className="text-white font-bold mb-2">Custom SnoutNet</h4>
          <p className="text-gray-400 text-sm mb-4">Built from Scratch</p>
          <div className="mt-auto w-full pt-4 border-t border-white/[0.1] text-xs text-gray-300 space-y-1">
            <p>3 Convolutional Layers</p>
            <p>3 Fully-Connected Layers</p>
            <p>Max Pooling & ReLU</p>
          </div>
        </div>

        {/* AlexNet */}
        <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.1] flex flex-col items-center text-center group hover:bg-white/[0.06] transition-colors">
          <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center mb-4 border border-yellow-500/50">
            <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <h4 className="text-white font-bold mb-2">AlexNet</h4>
          <p className="text-gray-400 text-sm mb-4">Transfer Learning</p>
          <div className="mt-auto w-full pt-4 border-t border-white/[0.1] text-xs text-gray-300 space-y-1">
            <p>ImageNet Pretrained</p>
            <p>Frozen Conv Backbone</p>
            <p>Custom Regression Head</p>
          </div>
        </div>

        {/* VGG16 */}
        <div className="p-5 rounded-xl bg-white/[0.04] border border-green-500/30 flex flex-col items-center text-center group shadow-[0_0_15px_rgba(34,197,94,0.1)] relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            Best Performer
          </div>
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/50 mt-2">
            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h4 className="text-white font-bold mb-2">VGG16</h4>
          <p className="text-gray-400 text-sm mb-4">Transfer Learning</p>
          <div className="mt-auto w-full pt-4 border-t border-white/[0.1] text-xs text-gray-300 space-y-1">
            <p>ImageNet Pretrained</p>
            <p>Deep 16-Layer Stack</p>
            <p>High-Resolution Features</p>
          </div>
        </div>

      </div>
    </div>
  )
}
