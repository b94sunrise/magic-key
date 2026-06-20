export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
          Magic Key Demo
        </p>

        <h1 className="mt-6 text-5xl font-black uppercase md:text-7xl">
          Bewerber analysieren.
        </h1>

        <div className="mt-12 rounded-3xl border border-white/10 bg-zinc-950 p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Name" />
            <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="E-Mail" />
            <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Nettoeinkommen" />
            <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Beschaeftigung" />
            <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Haushaltsgroesse" />
            <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Einzugsdatum" />
          </div>

          <button className="mt-8 rounded-xl bg-emerald-400 px-8 py-4 font-black uppercase text-black">
            Bewerbung analysieren
          </button>
        </div>
      </section>
    </main>
  );
}
