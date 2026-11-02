"use client"

import { Pause, Play } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import poster from "@/assets/images/hero-poster.jpg"

type Connection = { saveData?: boolean }

// El video arranca solo si la persona no pidió menos movimiento ni ahorro de datos.
export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = ref.current
    if (!video) return
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const saveData = (navigator as Navigator & { connection?: Connection })
      .connection?.saveData
    if (reduceMotion || saveData) return
    video.play().catch(() => {})
  }, [])

  const toggle = () => {
    const video = ref.current
    if (!video) return
    if (video.paused) video.play().catch(() => {})
    else video.pause()
  }

  return (
    <>
      <Image
        src={poster}
        alt=""
        preload
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover object-[35%_50%]"
      />
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
        onPlaying={() => {
          setReady(true)
          setPlaying(true)
        }}
        onPause={() => setPlaying(false)}
        className={`absolute inset-0 size-full object-cover object-[35%_50%] transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/media/hero.webm" type="video/webm" />
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-t from-navy/35 via-teal/10 to-transparent mix-blend-multiply"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={
          playing ? "Pausar video de fondo" : "Reproducir video de fondo"
        }
        className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-full bg-white/85 text-navy shadow-sm backdrop-blur transition hover:bg-white"
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>
    </>
  )
}
