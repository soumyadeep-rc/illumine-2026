type Props = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHeader({ eyebrow, title, description }: Props) {
  return (
    <header className="border-b border-white/5 px-6 pt-32 pb-12 sm:px-12 sm:pt-40 sm:pb-16">
      <div className="mx-auto max-w-[1200px]">
        {eyebrow ? (
          <p className="text-accent mb-3 font-mono text-xs tracking-[0.4em] uppercase">{eyebrow}</p>
        ) : null}
        <h1 className="font-display text-ink text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="text-muted mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  )
}
