"use client"

import { useInView } from "@/hooks/use-in-view"

const bars = [
  { label: "Traditional Agency", weeks: 12, color: "hsl(0 0% 82%)" },
  { label: "Freelancer Average", weeks: 6, color: "hsl(0 0% 65%)" },
  { label: "Karabo Oliphant", weeks: 1, color: "hsl(18 98% 49%)" },
]

export function DeliveryChart() {
  const { ref, inView } = useInView(0.3)

  return (
    <div ref={ref} className="w-full">
      <div className="flex flex-col gap-5">
        {bars.map((bar, i) => {
          const pct = (bar.weeks / 12) * 100
          return (
            <div key={bar.label} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-foreground font-medium">{bar.label}</span>
                <span className="text-muted-foreground tabular-nums">
                  {bar.weeks === 1 ? "< 1 week" : `${bar.weeks} weeks`}
                </span>
              </div>
              <div className="h-3 w-full rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: inView ? `${Math.max(pct, 8)}%` : "0%",
                    backgroundColor: bar.color,
                    transitionDelay: `${i * 150}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
