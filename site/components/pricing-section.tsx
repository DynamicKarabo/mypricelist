"use client"

import { PricingCard } from "@/components/pricing-card"
import { useInView } from "@/hooks/use-in-view"

const websitePlans = [
  {
    title: "Starter",
    price: "R950",
    description: "A single landing page, perfect for launching fast and testing your market.",
    features: ["1 page", "Mobile responsive", "WhatsApp integration", "48h delivery"],
  },
  {
    title: "Professional",
    price: "R1,280",
    description: "The sweet spot for small businesses ready to establish a real online presence.",
    features: ["2 - 3 pages", "Mobile responsive", "Contact forms", "Google Maps", "SEO optimized"],
    popular: true,
  },
  {
    title: "Premium",
    price: "R1,680",
    description: "A full business website with everything you need to compete and win.",
    features: ["4 - 5 pages", "Photo gallery", "Blog section", "Analytics", "Free email setup"],
  },
  {
    title: "Enterprise",
    price: "R2,280+",
    description: "A fully custom, multi-page site tailored precisely to your needs.",
    features: ["Unlimited pages", "Custom design", "CMS integration", "Priority support", "Free Facebook page"],
  },
]

const appPlans = [
  {
    title: "Lite App",
    price: "R2,950",
    description: "A simple, purpose-built application without user accounts.",
    features: ["Single purpose tool", "No user login", "Mobile responsive", "7-day delivery"],
  },
  {
    title: "Standard App",
    price: "R3,500 - R8,000",
    description: "A multi-page application with core features and user-facing functionality.",
    features: ["User authentication", "Dashboard", "Database", "API integration", "Admin panel"],
    popular: true,
  },
  {
    title: "Full-Stack Platform",
    price: "From R11,500",
    description: "A complete system with admin dashboard, user portal, and scalable architecture.",
    features: ["Full auth system", "Admin + User portals", "Payment integration", "Real-time features", "Scalable infra"],
  },
]

export function PricingSection() {
  const { ref: ref1, inView: inView1 } = useInView(0.1)
  const { ref: ref2, inView: inView2 } = useInView(0.1)

  return (
    <section className="px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Websites */}
        <div ref={ref1}>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Websites</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              A website for every stage of your business.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Whether you are launching your first landing page or scaling to a full corporate site,
              there is a plan that fits. All prices in ZAR.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {websitePlans.map((plan, i) => (
              <PricingCard key={plan.title} {...plan} index={i} inView={inView1} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-4 md:my-28">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">or go bigger</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Web Applications */}
        <div ref={ref2}>
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Web Applications</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-5xl text-balance">
              Apps built for scale and performance.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Need something more powerful than a website? Full-stack applications with
              authentication, databases, dashboards, and real-time features.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {appPlans.map((plan, i) => (
              <PricingCard key={plan.title} {...plan} index={i} inView={inView2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
