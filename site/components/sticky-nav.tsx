"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Features", href: "#features" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
]

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-10",
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b"
          : "bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <Link href="/" className="relative block">
        <img src="/logo.png" alt="Karabo" className="h-7 w-auto md:h-8" />
      </Link>

      <div className="flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground md:block"
          >
            {link.label}
          </Link>
        ))}

        <a
          href="https://wa.me/27630047899"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
        >
          Start a project
        </a>
      </div>
    </nav>
  )
}
