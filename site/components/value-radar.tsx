"use client"

import { useInView } from "@/hooks/use-in-view"

const metrics = [
  { label: "Speed", value: 0.95 },
  { label: "Quality", value: 0.9 },
  { label: "Price", value: 0.88 },
  { label: "Support", value: 0.92 },
  { label: "Flexibility", value: 0.85 },
]

export function ValueRadar() {
  const { ref, inView } = useInView(0.3)

  const cx = 120
  const cy = 120
  const radius = 90
  const levels = 4

  const angleSlice = (Math.PI * 2) / metrics.length

  const getPoint = (i: number, r: number) => ({
    x: cx + r * Math.cos(angleSlice * i - Math.PI / 2),
    y: cy + r * Math.sin(angleSlice * i - Math.PI / 2),
  })

  return (
    <div ref={ref} className="flex items-center justify-center">
      <svg width="240" height="240" viewBox="0 0 240 240" aria-hidden="true">
        {/* Grid rings */}
        {Array.from({ length: levels }).map((_, lvl) => {
          const r = (radius / levels) * (lvl + 1)
          const pts = metrics.map((_, i) => {
            const p = getPoint(i, r)
            return `${p.x},${p.y}`
          })
          return (
            <polygon
              key={lvl}
              points={pts.join(" ")}
              fill="none"
              stroke="hsl(0 0% 91%)"
              strokeWidth="1"
            />
          )
        })}

        {/* Axis lines */}
        {metrics.map((_, i) => {
          const p = getPoint(i, radius)
          return (
            <line
              key={`axis-${i}`}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="hsl(0 0% 91%)"
              strokeWidth="1"
            />
          )
        })}

        {/* Data polygon */}
        {inView && (
          <polygon
            points={metrics
              .map((m, i) => {
                const p = getPoint(i, radius * m.value)
                return `${p.x},${p.y}`
              })
              .join(" ")}
            fill="hsla(18, 98%, 49%, 0.1)"
            stroke="hsl(18 98% 49%)"
            strokeWidth="2"
            strokeLinejoin="round"
            className="animate-scale-in"
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />
        )}

        {/* Data dots */}
        {inView &&
          metrics.map((m, i) => {
            const p = getPoint(i, radius * m.value)
            return (
              <circle
                key={`dot-${i}`}
                cx={p.x}
                cy={p.y}
                r="3.5"
                fill="hsl(18 98% 49%)"
                className="animate-scale-in"
                style={{ animationDelay: `${i * 80}ms`, transformOrigin: `${p.x}px ${p.y}px` }}
              />
            )
          })}

        {/* Labels */}
        {metrics.map((m, i) => {
          const p = getPoint(i, radius + 20)
          return (
            <text
              key={`label-${i}`}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              className="fill-muted-foreground text-[11px]"
            >
              {m.label}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
