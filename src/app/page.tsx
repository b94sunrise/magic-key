import Link from "next/link";

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="text-emerald-400">{children}</span>;
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="flex min-h-[78vh] flex-col items-center justify-center text-center">
          <div className="rounded-[2.5rem] border border-emerald-400/15 bg-gradient-to-b from-emerald-400/10 via-zinc-950/80 to-black px-8 py-12 shadow-[0_0_90px_rgba(16,185,129,0.10)] md:px-20 md:py-14">
            <p className="text-5xl font-black uppercase tracking-[0.22em] text-emerald-400 md:text-7xl">
              Magic
            </p>

            <p className="mt-2 text-4xl font-black uppercase tracking-[0.25em] text-emerald-400 md:text-6xl">
              Key
            </p>

            <div className="mx-auto mt-7 h-[2px] w-full max-w-3xl bg-gradient-to-r from-transparent via-emerald-400/80 to-transparent" />

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.45em] text-zinc-400 md:text-sm">
              Real Estate · Bewerberanalyse · Vorauswahl
            </p>

            <h1 className="mt-10 max-w-5xl text-3xl font-black uppercase leading-tight md:text-5xl">
              <Highlight>Wohnungsbewerbungen</Highlight>
              <br />
              automatisch vorsortieren.
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-zinc-300 md:text-lg">
              Weniger Zeit mit ungeeigneten Anfragen verschwenden. Magic Key
              bewertet Bewerbungen automatisch und zeigt sofort, welche
              Interessenten besonders gut zur Immobilie passen.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/demo"
                className="rounded-xl bg-emerald-400 px-10 py-5 text-center font-black uppercase text-black shadow-[0_0_30px_rgba(16,185,129,0.22)] hover:bg-emerald-300"
              >
                Demo anfragen
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-emerald-400/30 px-10 py-5 text-center font-black uppercase text-white hover:border-emerald-400 hover:text-emerald-400"
              >
                Login
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 text-left">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-emerald-400">
              Problem
            </p>
            <h2 className="mb-4 text-2xl font-black uppercase">
              <Highlight>Zu</Highlight> viele Anfragen.
            </h2>
            <p className="leading-7 text-zinc-300">
              Makler und Wohnungsbaugesellschaften prüfen täglich dieselben
              Informationen immer wieder manuell.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 text-left">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-emerald-400">
              Analyse
            </p>
            <h2 className="mb-4 text-2xl font-black uppercase">
              <Highlight>Automatische</Highlight> Bewertung.
            </h2>
            <p className="leading-7 text-zinc-300">
              Einkommen, Haushaltsgröße, Beschäftigung und weitere Kriterien
              werden automatisch eingeordnet.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/90 p-6 text-left">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-emerald-400">
              Ergebnis
            </p>
            <h2 className="mb-4 text-2xl font-black uppercase">
              <Highlight>A</Highlight> / B / C Kandidaten.
            </h2>
            <p className="leading-7 text-zinc-300">
              Sofort erkennen, welche Bewerber priorisiert geprüft werden
              sollten.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}