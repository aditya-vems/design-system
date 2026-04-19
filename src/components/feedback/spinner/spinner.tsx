import * as React from "react"

import { cn } from "@/hooks/utils"

const R = 9
const C = 2 * Math.PI * R
const ARC = 0.75 * C
const GAP = C - ARC

/** Thicker stroke on small spinners; thinner on `size-6` and up. */
function strokeWidthFromClassName(className: string): 2 | 3 {
  if (/\bsize-(?:6|7|8|9|10|11|12)\b/.test(className)) return 2
  return 3
}

function Spinner({ className, ...props }: React.ComponentProps<"span">) {
  const mergedClassName = cn(
    "inline-flex shrink-0 items-center justify-center text-current",
    "size-4",
    className
  )
  const strokeWidth = strokeWidthFromClassName(mergedClassName)

  return (
    <span
      role="status"
      aria-label="Loading"
      className={mergedClassName}
      {...props}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden className="block size-full text-current">
        <g transform="translate(12 12)">
          <g className="animate-spin [transform-origin:0px_0px] [will-change:transform]">
            <circle
              cx={0}
              cy={0}
              r={R}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeDasharray={`${ARC.toFixed(3)} ${GAP.toFixed(3)}`}
            />
          </g>
        </g>
      </svg>
    </span>
  )
}

export { Spinner }
