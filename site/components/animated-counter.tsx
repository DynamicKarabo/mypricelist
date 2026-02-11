"use client"

import { useEffect, useState } from "react"

interface AnimatedCounterProps {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  inView: boolean
}

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 1200,
  inView,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const startTime = performance.now()

    function tick(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return (
    <span>
      {prefix}
      {count.toLocaleString("en-ZA")}
      {suffix}
    </span>
  )
}
