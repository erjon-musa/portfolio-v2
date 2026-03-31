'use client'

export default function SnoutNetResults() {
  return (
    <div className="w-full space-y-8">
      
      {/* Table: Benchmark Results */}
      <div className="w-full overflow-x-auto">
        <h4 className="text-sm font-bold text-cyan-400 mb-3 border-b border-white/[0.1] pb-2">
          Model Localization Performance (Oxford-IIIT Pet Dataset)
        </h4>
        <table className="w-full text-base min-w-[500px]">
          <thead>
            <tr className="border-b border-white/[0.1]">
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Architecture</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Approach</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Mean Localization Error</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
              <td className="py-3 px-4 text-gray-300 font-medium">Custom SnoutNet</td>
              <td className="py-3 px-4 text-gray-400 text-sm">Trained from Scratch</td>
              <td className="py-3 px-4 text-yellow-400 font-mono">30.32 px</td>
              <td className="py-3 px-4 text-gray-500 text-sm">Baseline</td>
            </tr>
            <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
              <td className="py-3 px-4 text-gray-300 font-medium">AlexNet</td>
              <td className="py-3 px-4 text-gray-400 text-sm">Transfer Learning (ImageNet)</td>
              <td className="py-3 px-4 text-cyan-400 font-mono">12.35 px</td>
              <td className="py-3 px-4 text-gray-400 text-sm">Strong Improvement</td>
            </tr>
            <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors bg-white/[0.02]">
              <td className="py-3 px-4 text-white font-bold">VGG16</td>
              <td className="py-3 px-4 text-gray-300 text-sm">Transfer Learning (ImageNet)</td>
              <td className="py-3 px-4 text-green-400 font-mono font-bold">4.46 px</td>
              <td className="py-3 px-4 text-green-400 font-medium text-sm drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">State-of-the-Art</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
