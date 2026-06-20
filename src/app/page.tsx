export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-2">
        <div className="flex min-h-[85vh] flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.45em] text-emerald-400">
            Fuer Makler und Hausverwaltungen
          </p>

          <h1 className="mt-8 text-6xl font-black uppercase leading-[0.9] md:text-8xl">
            Die besten Mieter zuerst sehen.
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-zinc-300">
            Magic Key analysiert 150 Bewerbungen automatisch und sortiert
            Interessenten nach A-, B- und C-Kandidaten.
          </p>
        </div>

        <div className="flex items-center">
          <div className="w-full rounded-[32px] border border-white/10 bg-zinc-950 p-6 shadow-[0_0_100px_rgba(16,185,129,0.16)]">
            <h2 className="text-2xl font-black uppercase">
              Bewerber Dashboard
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-400/10 p-5">
                <p className="text-4xl font-black text-emerald-400">12</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">A Kandidaten</p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-5">
                <p className="text-4xl font-black">34</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">B Kandidaten</p>
              </div>
              <div className="rounded-2xl bg-white/[0.04] p-5 opacity-60">
                <p className="text-4xl font-black">104</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">C Kandidaten</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
