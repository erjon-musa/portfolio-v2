'use client'

interface Achievement {
  metric: string
  value: string
  change: number
}

export default function AchievementsGrid({ achievements }: { achievements: Achievement[] }) {
  return (
    <div className="space-y-8">
      <h2 className="
        text-xl sm:text-2xl 
        font-bold 
        tracking-tight
      ">
        Quantitative Results
      </h2>
      <div className="
        grid grid-cols-1 sm:grid-cols-3 
        gap-8
      ">
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center space-y-2">
            <p className="
              text-3xl sm:text-4xl 
              font-bold 
              tracking-tight
              text-cyan-400
            ">
              {achievement.value}
            </p>
            <p className="
              text-gray-200
            ">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
