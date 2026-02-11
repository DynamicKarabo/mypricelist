"use client"

import { useInView } from "@/hooks/use-in-view"

interface SparklineProps {
  data: number[]
  color?: string
  width?: number
  height?: number
}

export function Sparkline({
  data,
  color = "hsl(18 98% 49%)",
  width = 200,
  height = 50,
}: SparklineProps) {
  const { ref, inView } = useInView(0.3)
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width
    const y = height - ((val - min) / range) * (height * 0.8) - height * 0.1
    return `${x},${y}`
  })

  const pathD = `M ${points.join(" L ")}`
  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`

  return (
    <div ref={ref} className="inline-block">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sparkline-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.15" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d={areaD}
          fill="url(#sparkline-fill)"
          className={inView ? "animate-fade-in" : "opacity-0"}
        />
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={inView ? "animate-draw-line" : "opacity-0"}
        />
        {inView && (
          <circle
            cx={width}
            cy={height - ((data[data.length - 1] - min) / range) * (height * 0.8) - height * 0.1}
            r="3"
            fill={color}
            className="animate-pulse-dot"
          />
        )}
      </svg>
    </div>
  )
}
