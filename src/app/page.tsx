export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-2">
        <div className="flex min-h-[85vh] flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-emerald-400">
            Für Makler & Hausverwaltungen
          </p>

          <h1 className="mt-8 text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Die besten Mieter zuerst sehen.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-300">
            Magic Key analysiert 150 Bewerbungen automatisch und sortiert
            Interessenten nach A-, B- und C-Kandidaten.
          </p>

          <div className="mt-10 flex gap-4">
            <a className="rounded-xl bg-emerald-400 px-9 py-5 font-black uppercase text-black">
              Demo anfragen
            </a>
            <a className="rounded-xl border border-white/10 px-9 py-5 font-black uppercase">
              Dashboard ansehen
            </a>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-[32px] border border-white/10 bg-zinc-950 p-6 shadow-[0_0_100px_rgba(16,185,129,0.16)]">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Live Preview
                </p>
                <h2 className="mt-2 text-2xl font-black uppercase">
                  Bewerber Dashboard
                </h2>
              </div>
              <span className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-black">
                150 Bewerber
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-400/10 p-5">
                <p className="text-4xl font-black text-emerald-400">12</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
                  A Kandidaten
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-5">
                <p className="text-4xl font-black">34</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
                  B Kandidaten
                </p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-5 opacity-60">
                <p className="text-4xl font-black">104</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
                  C Kandidaten
                </p>
              </div>
            </div>

            {[
              ["Max Mustermann", "4.200 € netto · unbefristet", "92", "A"],
              ["Anna Becker", "SCHUFA vorhanden · keine Haustiere", "88", "A"],
              ["Tim Wagner", "2 Personen · Einzug flexibel", "74", "B"],
              ["Kevin Müller", "Unvollständige Angaben", "41", "C"],
            ].map(([name, meta, score, type]) => (
              <div
                key={name}
                className="mt-4 flex items-center justify-between rounded-2xl border border-white/5 bg-black/40 p-4"
              >
                <div>
                  <p className="font-black">{name}</p>
                  <p className="mt-1 text-sm text-zinc-500">{meta}</p>
                </div>
                <div className="flex items-center gap-5">
                  <span className="text-xl font-black">{score}</span>
                  <span className="text-2xl font-black text-emerald-400">
                    {type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
