'use client'

export default function SegmentationResults() {
  return (
    <div className="w-full space-y-10">
      
      {/* Table 1: Results */}
      <div className="w-full overflow-x-auto">
        <h4 className="text-sm font-bold text-cyan-400 mb-3 border-b border-white/[0.1] pb-2">
          Knowledge Distillation Results (PASCAL VOC 2012)
        </h4>
        <table className="w-full text-base min-w-[500px]">
          <thead>
            <tr className="border-b border-white/[0.1]">
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Method</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">mIoU</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Parameters</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Inference Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
              <td className="py-3 px-4 text-gray-300">Without KD (Baseline)</td>
              <td className="py-3 px-4 text-gray-200 font-mono">45.57%</td>
              <td className="py-3 px-4 text-gray-400 font-mono">6.9M</td>
              <td className="py-3 px-4 text-gray-400 font-mono">3.99 ms</td>
            </tr>
            <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
              <td className="py-3 px-4 text-gray-300">Response-based KD</td>
              <td className="py-3 px-4 text-green-400 font-mono font-medium">55.64%</td>
              <td className="py-3 px-4 text-gray-400 font-mono">6.9M</td>
              <td className="py-3 px-4 text-gray-400 font-mono">4.20 ms</td>
            </tr>
            <tr className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors bg-white/[0.02]">
              <td className="py-3 px-4 text-white font-medium">Feature-based KD</td>
              <td className="py-3 px-4 text-green-400 font-mono font-bold">56.99%</td>
              <td className="py-3 px-4 text-gray-400 font-mono">6.9M</td>
              <td className="py-3 px-4 text-green-400 font-mono font-medium">3.79 ms</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2: Training Arguments */}
      <div className="w-full overflow-x-auto">
        <h4 className="text-sm font-bold text-cyan-400 mb-3 border-b border-white/[0.1] pb-2">
          Training Configuration
        </h4>
        <table className="w-full text-base min-w-[500px]">
          <thead>
            <tr className="border-b border-white/[0.1]">
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Argument</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Default</th>
              <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['--kd-method', 'none', 'KD method: none, response, feature'],
              ['--epochs', '100', 'Number of training epochs'],
              ['--batch-size', '8', 'Batch size'],
              ['--lr', '0.0001', 'Learning rate'],
              ['--temperature', '4.0', 'Temperature for KD softmax'],
              ['--alpha', '0.3', 'Weight for hard loss (vs soft loss)'],
              ['--beta', '0.1', 'Weight for feature loss'],
              ['--patience', '8', 'Early stopping patience'],
              ['--resume', 'None', 'Checkpoint path to resume from'],
            ].map(([arg, defVal, desc]) => (
              <tr key={arg} className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors">
                <td className="py-3 px-4 text-cyan-200 font-mono text-sm">{arg}</td>
                <td className="py-3 px-4 text-gray-400 font-mono text-sm">{defVal}</td>
                <td className="py-3 px-4 text-gray-300 text-sm">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
