"use client"

import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  index: number
  inView: boolean
}

export function PricingCard({
  title,
  price,
  description,
  features,
  popular = false,
  index,
  inView,
}: PricingCardProps) {
  return (
    <div
      style={{ animationDelay: `${index * 100}ms`, opacity: inView ? undefined : 0 }}
      className={cn(
        "group relative flex flex-col rounded-2xl border p-6 transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5",
        inView && "animate-fade-up",
        popular
          ? "border-primary bg-primary/[0.02] ring-1 ring-primary/50"
          : "border-border hover:border-primary/30"
      )}
    >
      {popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <p className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
            {price}
          </p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>

        <div className="my-2 h-px bg-border" />

        <ul className="flex flex-col gap-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-foreground"
            >
              <svg
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.25 4.75L6 12L2.75 8.75"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <a
        href="https://wa.me/27630047899"
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "mt-6 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 group/btn",
          popular
            ? "bg-primary text-primary-foreground hover:brightness-110 hover:shadow-md hover:shadow-primary/20"
            : "border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary/5"
        )}
      >
        Get started
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
      </a>
    </div>
  )
}
