import Link from "next/link"

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-ink px-6 text-center text-mist">
      <div>
        <p className="font-display text-7xl text-aqua">404</p>
        <h1 className="mt-4 text-2xl font-semibold">Esta página no existe</h1>
        <p className="mt-2 text-mist/80">
          Puede que el enlace esté viejo o mal escrito.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-aqua px-6 py-3 font-semibold text-ink transition hover:bg-mist"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
