type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  intro?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-teal-strong uppercase">
        <span aria-hidden="true" className="h-px w-8 bg-teal" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-4xl leading-[1.08] font-medium tracking-tight text-balance text-navy sm:text-5xl"
      >
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">
          {intro}
        </p>
      )}
    </div>
  )
}
