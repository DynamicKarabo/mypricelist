"use client"

import { useInView } from "@/hooks/use-in-view"
import { AnimatedCounter } from "@/components/animated-counter"

const stats = [
  { value: 24, suffix: "h", label: "Mockup delivery time" },
  { value: 15, suffix: "+", label: "Projects delivered" },
  { value: 100, suffix: "%", label: "Ownership transferred" },
  { value: 0, suffix: "", label: "Hidden fees or lock-ins", prefix: "" },
]

export function StatsSection() {
  const { ref, inView } = useInView(0.3)

  return (
    <section ref={ref} className="px-6 py-16 border-t">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              style={{
                animationDelay: `${i * 100}ms`,
                opacity: inView ? undefined : 0,
              }}
              className={`group flex flex-col items-center gap-1 text-center transition-all duration-300 ${inView ? "animate-fade-up" : ""}`}
            >
              <span className="font-display text-4xl font-bold text-primary md:text-5xl tabular-nums transition-colors duration-300 group-hover:text-foreground">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  inView={inView}
                />
              </span>
              <span className="text-sm text-muted-foreground">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
