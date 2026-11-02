import { readFile } from "node:fs/promises"
import { join } from "node:path"

import { ImageResponse } from "next/og"

import { doctor, locations } from "@/content/site"

export const alt = `${doctor.displayName}, ${doctor.specialty.toLowerCase()} en ${locations.map(l => l.city).join(", ")}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const fonts = join(process.cwd(), "src/assets/fonts")
  const [fraunces, inter] = await Promise.all([
    readFile(join(fonts, "Fraunces-SemiBold.ttf")),
    readFile(join(fonts, "Inter-Medium.ttf")),
  ])

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background:
          "radial-gradient(circle at 85% 20%, #189AB4 0%, rgba(24,154,180,0) 45%), linear-gradient(135deg, #010c11 0%, #05445E 100%)",
        color: "#D4F1F4",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r="30" fill="#05445E" />
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
        <div style={{ fontSize: 28, color: "#75E6DA", letterSpacing: 2 }}>
          {`MATRÍCULA PROVINCIAL ${doctor.license}`}
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontFamily: "Fraunces",
            fontSize: 96,
            lineHeight: 1.05,
            color: "#eff6f7",
          }}
        >
          {doctor.displayName}
        </div>
        <div style={{ fontSize: 40, marginTop: 20 }}>
          {`${doctor.specialty} · ${doctor.experience.toLowerCase()}`}
        </div>
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {locations.map(l => (
          <div
            key={l.id}
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 999,
              border: "2px solid rgba(117,230,218,0.5)",
              fontSize: 28,
            }}
          >
            {l.city}
          </div>
        ))}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "Inter", data: inter, weight: 500, style: "normal" },
      ],
    },
  )
}
