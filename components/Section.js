export default function Section({ id, title, intro, children, fullWidth = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-borderLine py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {fullWidth ? (
          <div>
            <header className="mb-12 max-w-2xl">
              <h2 id={`${id}-title`} className="font-display text-2xl font-bold tracking-tight text-ink md:text-4xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-base text-inkMuted leading-relaxed">{intro}</p>}
            </header>
            {children}
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <header className="self-start lg:sticky lg:top-24 lg:col-span-4">
              <h2 id={`${id}-title`} className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl lg:text-4xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-sm md:text-base text-inkMuted leading-relaxed">{intro}</p>}
            </header>
            <div className="lg:col-span-8">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
