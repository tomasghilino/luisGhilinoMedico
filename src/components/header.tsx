"use client"

import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

import { doctor, nav } from "@/content/site"
import { whatsappUrl } from "@/lib/links"

import { LogoMark, WhatsAppIcon } from "./icons"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-navy/10 bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a
          href="#"
          className="flex items-center gap-3 rounded-full"
          onClick={() => setOpen(false)}
        >
          <LogoMark className="size-10 shrink-0" />
          <span className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy">
              {doctor.displayName}
            </span>
            <span className="block text-xs font-medium tracking-wide text-muted">
              Traumatología
            </span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-4 py-2 text-[15px] font-medium text-navy transition-colors hover:bg-mist"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl("Hola Dr. Ghilino, quisiera pedir un turno.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink sm:inline-flex"
          >
            <WhatsAppIcon className="size-4" />
            Pedir turno
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-navy/15 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen(value => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-movil"
        aria-label="Menú"
        hidden={!open}
        className="border-t border-navy/10 bg-paper lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-3 sm:px-6">
          {nav.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3.5 text-lg font-medium text-navy hover:bg-mist"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1 sm:hidden">
            <a
              href={whatsappUrl("Hola Dr. Ghilino, quisiera pedir un turno.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3.5 font-semibold text-white"
            >
              <WhatsAppIcon className="size-5" />
              Pedir turno por WhatsApp
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
