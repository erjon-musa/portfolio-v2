'use client'

export default function CLIPArchitecture() {
  return (
    <div className="w-full space-y-4">
      {/* Encoder pair */}
      <div className="flex flex-col md:flex-row items-stretch gap-4">
        {/* Image Encoder */}
        <div className="flex-1 p-5 rounded-xl bg-white/[0.04] border border-white/[0.1]">
          <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Image Encoder (Trainable)
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>ResNet50 Backbone</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Projection Head <span className="text-gray-500">(2048 → 512)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Dropout <span className="text-gray-500">(p=0.5)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>L2 Normalized Output</span>
            </li>
          </ul>
        </div>

        {/* Shared Embedding Space */}
        <div className="flex flex-col items-center justify-center py-2 md:py-0">
          {/* Image embedding arrow */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-[10px] text-gray-500 hidden md:block">img emb</span>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-r from-cyan-500/60 to-cyan-400" />
            <svg className="w-3 h-3 text-cyan-400 -ml-1" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1l8 5-8 5V1z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-400 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-center">
            Shared<br />Embedding
          </span>
          {/* Text embedding arrow */}
          <div className="flex items-center gap-1 mt-2">
            <svg className="w-3 h-3 text-cyan-400 -mr-1 rotate-180" viewBox="0 0 12 12" fill="currentColor">
              <path d="M2 1l8 5-8 5V1z" />
            </svg>
            <div className="w-12 md:w-16 h-[2px] bg-gradient-to-l from-cyan-500/60 to-cyan-400" />
            <span className="text-[10px] text-gray-500 hidden md:block">txt emb</span>
          </div>
        </div>

        {/* Text Encoder */}
        <div className="flex-1 p-5 rounded-xl bg-white/[0.04] border border-white/[0.1]">
          <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
            <svg className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Text Encoder (Frozen)
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>OpenAI CLIP <span className="text-gray-500">(ViT-B/32)</span></span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Pretrained Weights</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>512-dim Text Embeddings</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-500 mt-0.5">&#8226;</span>
              <span>Tokenizer <span className="text-gray-500">(77 max tokens)</span></span>
            </li>
          </ul>
        </div>
      </div>

      {/* Loss function bar */}
      <div className="p-4 rounded-xl bg-white/[0.04] border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Loss</span>
          <span className="text-sm text-gray-300">InfoNCE with learnable temperature</span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="px-2 py-1 rounded bg-white/[0.06] border border-white/[0.08]">
            τ = 0.07
          </span>
          <span className="px-2 py-1 rounded bg-white/[0.06] border border-white/[0.08]">
            Cosine Annealing LR
          </span>
          <span className="px-2 py-1 rounded bg-white/[0.06] border border-white/[0.08]">
            Batch 128
          </span>
        </div>
      </div>
    </div>
  )
}
