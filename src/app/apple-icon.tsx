import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#05445E",
      }}
    >
      <svg width="120" height="120" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="26.5"
          fill="none"
          stroke="#75E6DA"
          strokeWidth="2"
        />
        <path fill="#D4F1F4" d="M27 15h10v12h12v10H37v12H27V37H15V27h12z" />
      </svg>
    </div>,
    size,
  )
}
