const applicants = [
  ["Max Mustermann", "Festanstellung · 4.200 EUR netto", "92", "A"],
  ["Anna Becker", "Unbefristet · SCHUFA vorhanden", "89", "A"],
  ["Tim Wagner", "2 Personen · Einzug ab sofort", "76", "B"],
  ["Lisa Schmidt", "Haustier · vollständige Angaben", "64", "B"],
  ["Kevin Müller", "Angaben unvollständig", "41", "C"],
];

const steps = [
  ["01", "Bewerbung", "Neue Anfragen werden strukturiert erfasst und zentral gesammelt."],
  ["02", "Analyse", "Einkommen, Haushalt, Beschäftigung und weitere Kriterien werden bewertet."],
  ["03", "Priorisierung", "Bewerber werden automatisch nach Relevanz eingeordnet."],
  ["04", "Entscheidung", "Die stärksten Kandidaten stehen sofort im Fokus."],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.32em] text-emerald-400">
              Magic Key
            </p>
            <p className="mt-1 text-xs uppercase tracking-[0.24em] text-zinc-500">
              Real Estate Screening
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#produkt"
              className="rounded-full border border-white/10 px-5 py-3 text-sm font-black uppercase text-zinc-300"
            >
              Produkt
            </a>
            <a
              href="/demo"
              className="rounded-full bg-emerald-400 px-5 py-3 text-sm font-black uppercase text-black"
            >
              Analyse Demo
            </a>
            <a
              href="/demo/upload"
              className="hidden rounded-full border border-emerald-400/30 px-5 py-3 text-sm font-black uppercase text-emerald-400 md:inline-block"
            >
              Upload Demo
            </a>
          </div>
        </nav>

        <section className="grid min-h-[78vh] items-center gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
              Für Makler und Hausverwaltungen
            </p>

            <h1 className="mt-8 text-5xl font-black uppercase leading-[0.92] md:text-7xl">
              Die richtigen Bewerber sofort erkennen.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-300">
              Magic Key analysiert Wohnungsbewerbungen automatisch und zeigt,
              welche Interessenten zuerst geprüft werden sollten.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="/demo"
                className="rounded-xl bg-emerald-400 px-9 py-5 text-center font-black uppercase text-black"
              >
                Analyse Demo
              </a>
              <a
                href="/demo/upload"
                className="rounded-xl border border-white/10 px-9 py-5 text-center font-black uppercase"
              >
                Upload Demo
              </a>
            </div>
          </div>

          <div
            id="produkt"
            className="rounded-[34px] border border-white/10 bg-[#0b0b0d] p-6 shadow-[0_0_100px_rgba(16,185,129,0.14)]"
          >
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Live Dashboard
                </p>
                <h2 className="mt-2 text-2xl font-black uppercase">
                  Bewerberübersicht
                </h2>
              </div>
              <span className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-black">
                Übersicht
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                <p className="text-4xl font-black text-emerald-400">12</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
                  A Kandidaten
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="text-4xl font-black">34</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
                  B Kandidaten
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 opacity-60">
                <p className="text-4xl font-black">104</p>
                <p className="mt-2 text-sm font-bold uppercase text-zinc-300">
                  C Kandidaten
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              {applicants.map(([name, meta, score, type]) => (
                <div
                  key={name}
                  className="flex items-center justify-between border-b border-white/10 px-5 py-4 last:border-b-0"
                >
                  <div>
                    <p className="font-black">{name}</p>
                    <p className="mt-1 text-sm text-zinc-500">{meta}</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-xl font-black">{score}</span>
                    <span
                      className={
                        type === "A"
                          ? "text-2xl font-black text-emerald-400"
                          : type === "C"
                            ? "text-2xl font-black text-red-400"
                            : "text-2xl font-black"
                      }
                    >
                      {type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
            So funktioniert es
          </p>

          <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-none md:text-7xl">
            Von der Bewerbung zur Entscheidung.
          </h2>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
              >
                <p className="text-5xl font-black text-emerald-400">
                  {number}
                </p>
                <h3 className="mt-6 text-2xl font-black uppercase">
                  {title}
                </h3>
                <p className="mt-4 leading-7 text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="demo"
          className="mb-16 rounded-[34px] border border-emerald-400/20 bg-emerald-400/10 p-10 text-center"
        >
          <h2 className="text-4xl font-black uppercase md:text-6xl">
            Weniger sichten.
            <br />
            Schneller entscheiden.
          </h2>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/demo"
              className="inline-block rounded-xl bg-emerald-400 px-10 py-5 font-black uppercase text-black"
            >
              Analyse Demo öffnen
            </a>

            <a
              href="/demo/upload"
              className="inline-block rounded-xl border border-white/10 px-10 py-5 font-black uppercase text-white"
            >
              Upload Demo öffnen
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}