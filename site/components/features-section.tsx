"use client"

import { useInView } from "@/hooks/use-in-view"
import { DeliveryChart } from "@/components/delivery-chart"
import { ValueRadar } from "@/components/value-radar"
import { Smartphone, Zap, Headphones, Shield, BarChart3, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Delivery",
    description:
      "Most projects ship in under a week. Your free mockup arrives in 24 hours.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description:
      "Every pixel is designed for mobile first, then scales up beautifully to desktop.",
  },
  {
    icon: Headphones,
    title: "Direct Support",
    description:
      "Chat directly with your developer. No project managers, no ticket queues, no delays.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description:
      "Clean code, proper security, SEO optimization, and full documentation included.",
  },
  {
    icon: BarChart3,
    title: "Analytics Built In",
    description:
      "Know how your site performs from day one with integrated analytics and tracking.",
  },
  {
    icon: Globe,
    title: "Global Deploy",
    description:
      "Deployed on world-class infrastructure. Fast load times from anywhere on the planet.",
  },
]

export function FeaturesSection() {
  const { ref, inView } = useInView(0.1)

  return (
    <section ref={ref} className="px-6 py-20 md:py-32 border-t">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            {"What's included"}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
            Everything you need. Nothing you don{"'"}t.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Every project comes loaded with the essentials: responsive design,
            SEO, analytics, and a direct line to your developer. No hidden
            costs, no surprise invoices.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                style={{
                  animationDelay: `${i * 80}ms`,
                  opacity: inView ? undefined : 0,
                }}
                className={`group relative flex flex-col gap-4 rounded-2xl border border-border p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 ${
                  inView ? "animate-fade-up" : ""
                }`}
              >
                {/* Subtle orange glow on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                  <Icon
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="relative">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Charts row */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              Delivery Speed
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Average project timeline comparison
            </p>
            <DeliveryChart />
          </div>
          <div className="rounded-2xl border border-border p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">
              Value Breakdown
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              How I stack up across key metrics
            </p>
            <ValueRadar />
          </div>
        </div>
      </div>
    </section>
  )
}
