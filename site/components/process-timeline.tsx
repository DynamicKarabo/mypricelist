"use client"

import { useInView } from "@/hooks/use-in-view"
import { MessageSquare, Palette, Code2, Rocket } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Chat",
    time: "Day 0",
    description:
      "Tell me what you need over WhatsApp. No forms, no calls, no friction.",
  },
  {
    icon: Palette,
    title: "Free Mockup",
    time: "24 hours",
    description:
      "I build you a real, interactive mockup. You see it before paying anything.",
  },
  {
    icon: Code2,
    title: "Build",
    time: "3 - 7 days",
    description:
      "Full development with daily updates. You stay in the loop the entire time.",
  },
  {
    icon: Rocket,
    title: "Launch",
    time: "Go live",
    description:
      "Deployed, optimized, and handed over with full access and documentation.",
  },
]

export function ProcessTimeline() {
  const { ref, inView } = useInView(0.15)

  return (
    <div ref={ref} className="relative">
      {/* Vertical connecting line */}
      <div
        className="absolute left-8 top-8 bottom-8 hidden w-px md:block"
        aria-hidden="true"
      >
        <div
          className="h-full w-full bg-primary/20 transition-all duration-1000"
          style={{ transform: inView ? "scaleY(1)" : "scaleY(0)", transformOrigin: "top" }}
        />
      </div>

      <div className="flex flex-col gap-0">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div
              key={step.title}
              style={{
                animationDelay: `${i * 120}ms`,
                opacity: inView ? undefined : 0,
              }}
              className={`group relative flex gap-6 py-8 ${inView ? "animate-fade-up" : ""}`}
            >
              {/* Circle node */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10">
                <Icon
                  className="h-6 w-6 text-primary"
                  strokeWidth={1.5}
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-0.5 text-xs font-medium text-primary">
                    {step.time}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground max-w-md">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
