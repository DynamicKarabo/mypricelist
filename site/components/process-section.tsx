"use client"

import { ProcessTimeline } from "@/components/process-timeline"

export function ProcessSection() {
  return (
    <section className="px-6 py-20 md:py-32 border-t">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Copy */}
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              How it works
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              From first message to launch in days, not months.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              No lengthy onboarding. No 47-page proposals. Just send me a
              WhatsApp message describing what you need, and I will have a
              working mockup in your hands within 24 hours. If you love it, we
              move forward. If not, no hard feelings.
            </p>

            {/* Trust quote */}
            <div className="mt-10 relative rounded-2xl border border-primary/20 bg-primary/[0.03] p-6">
              <div className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                The pitch
              </div>
              <p className="text-sm leading-relaxed text-foreground italic mt-1">
                {
                  "\"No pushy sales. I'll build you a FREE mockup in 24 hours. If you love it, we move forward. If not, no hard feelings. That's the entire pitch.\""
                }
              </p>
              <p className="mt-3 text-sm font-medium text-foreground">
                Karabo Oliphant
              </p>
              <p className="text-xs text-muted-foreground">
                Founder & Developer
              </p>
            </div>
          </div>

          {/* Right - Timeline */}
          <div>
            <ProcessTimeline />
          </div>
        </div>
      </div>
    </section>
  )
}
