"use client"

import { ArrowRight } from "lucide-react"
import { Sparkline } from "@/components/sparkline"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      {/* Subtle orange radial glow behind logo */}
      <div
        className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 h-[320px] w-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, hsl(18 98% 49%) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center gap-8 text-center max-w-4xl mx-auto">


        {/* Small pill badge */}
        <div className="flex items-center gap-3 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary font-medium animate-fade-up stagger-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new projects
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl font-bold tracking-tight text-foreground md:text-7xl lg:text-8xl text-balance leading-[0.95] animate-fade-up stagger-2">
          Premium builds.{" "}
          <span className="relative inline-block text-primary">
            Lightning-fast
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 8.5C50 2.5 100 2 150 5.5C200 9 250 3 298 7"
                stroke="hsl(18 98% 49%)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw-line"
              />
            </svg>
          </span>{" "}
          delivery.
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty animate-fade-up stagger-3">
          Web development for businesses that want to look incredible online.
          From landing pages to full-stack platforms, Johannesburg to the world.
        </p>

        {/* CTA row */}
        <div className="flex flex-col items-center gap-4 sm:flex-row animate-fade-up stagger-4">
          <a
            href="https://wa.me/27630047899"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
          >
            Get your free mockup
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary active:scale-[0.97]"
          >
            View pricing
          </a>
        </div>

        {/* Mini stat cards */}
        <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-3 max-w-xl animate-fade-up stagger-5">
          <div className="flex flex-col items-center gap-1 rounded-xl border border-border p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
            <span className="font-display text-2xl font-bold text-primary">24h</span>
            <span className="text-xs text-muted-foreground">Free mockup delivery</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl border border-border p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
            <span className="font-display text-2xl font-bold text-foreground">R950<span className="text-primary">+</span></span>
            <span className="text-xs text-muted-foreground">Starting price</span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-xl border border-border p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
            <Sparkline data={[10, 25, 18, 40, 35, 55, 50, 70, 65, 85, 90, 100]} width={120} height={30} />
            <span className="text-xs text-muted-foreground">Growing portfolio</span>
          </div>
        </div>
      </div>
    </section>
  )
}
