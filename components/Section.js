export default function Section({ id, title, intro, children, fullWidth = false }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-[#D6E4F7] py-16 md:py-24 relative">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        {fullWidth ? (
          <div>
            <header className="mb-12 max-w-2xl">
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="h-2 w-10 rounded-full bg-[#004CE6]" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#004CE6] font-bold">{id}</span>
              </div>
              <h2 id={`${id}-title`} className="font-display text-2xl font-extrabold tracking-tight text-[#0A1128] md:text-4xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-base text-slate-700 leading-relaxed font-normal">{intro}</p>}
            </header>
            {children}
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <header className="self-start lg:sticky lg:top-24 lg:col-span-4">
              <div className="inline-flex items-center gap-2.5 mb-3">
                <span className="h-2 w-10 rounded-full bg-[#004CE6]" />
                <span className="text-xs uppercase font-mono tracking-widest text-[#004CE6] font-bold">{id}</span>
              </div>
              <h2 id={`${id}-title`} className="font-display text-2xl font-extrabold tracking-tight text-[#0A1128] md:text-3xl lg:text-4xl">
                {title}
              </h2>
              {intro && <p className="mt-3 text-sm md:text-base text-slate-700 leading-relaxed font-normal">{intro}</p>}
            </header>
            <div className="lg:col-span-8">{children}</div>
          </div>
        )}
      </div>
    </section>
  );
}
