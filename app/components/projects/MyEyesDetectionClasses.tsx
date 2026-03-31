'use client'

const detectionClasses = [
  { id: 0, name: "$100 Canadian", action: 'OCR verify → "Verified 100 Canadian dollars"' },
  { id: 1, name: "$50 Canadian", action: 'OCR verify → "Verified 50 Canadian dollars"' },
  { id: 2, name: "$20 Canadian", action: 'OCR verify → "Verified 20 Canadian dollars"' },
  { id: 3, name: "$10 Canadian", action: 'OCR verify → "Verified 10 Canadian dollars"' },
  { id: 4, name: "$5 Canadian", action: 'OCR verify → "Verified 5 Canadian dollars"' },
  { id: 5, name: "Crosswalk", action: "Crosswalk safety logic with traffic lights" },
  { id: 6, name: "Important Text", action: "PaddleOCR → read aloud" },
  { id: 7, name: "Car", action: '"Careful, car ahead"' },
  { id: 8, name: "Green Ped. Light", action: '"Green pedestrian light, safe to cross"' },
  { id: 9, name: "Ped. Light", action: '"Pedestrian light ahead"' },
  { id: 10, name: "Red Ped. Light", action: '"Red pedestrian light, NOT safe to cross"' },
  { id: 11, name: "Stop Sign", action: '"Stop sign ahead"' },
]

const categoryColors: Record<string, string> = {
  currency: 'text-green-400',
  safety: 'text-yellow-400',
  ocr: 'text-blue-400',
  vehicle: 'text-red-400',
}

function getCategory(id: number): { label: string; color: string } {
  if (id <= 4) return { label: 'Currency', color: categoryColors.currency }
  if (id === 5 || id >= 8) return { label: 'Safety', color: categoryColors.safety }
  if (id === 6) return { label: 'OCR', color: categoryColors.ocr }
  return { label: 'Vehicle', color: categoryColors.vehicle }
}

export default function MyEyesDetectionClasses() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-base">
        <thead>
          <tr className="border-b border-white/[0.1]">
            <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">#</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Class</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm hidden sm:table-cell">Category</th>
            <th className="text-left py-3 px-4 text-gray-400 font-medium text-sm">Action</th>
          </tr>
        </thead>
        <tbody>
          {detectionClasses.map((cls) => {
            const cat = getCategory(cls.id)
            return (
              <tr
                key={cls.id}
                className="border-b border-white/[0.05] hover:bg-white/[0.03] transition-colors"
              >
                <td className="py-3 px-4 text-gray-500 font-mono text-sm">{cls.id}</td>
                <td className="py-3 px-4 text-gray-200 font-medium">{cls.name}</td>
                <td className={`py-3 px-4 text-sm hidden sm:table-cell ${cat.color}`}>
                  {cat.label}
                </td>
                <td className="py-3 px-4 text-gray-300 text-sm">{cls.action}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
