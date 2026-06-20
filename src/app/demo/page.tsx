"use client";

import { useState } from "react";

export default function DemoPage() {
  const [result, setResult] = useState(false);

  function analyzeApplication() {
    setResult(true);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
          Magic Key Demo
        </p>

        <h1 className="mt-6 text-5xl font-black uppercase md:text-7xl">
          Bewerber analysieren.
        </h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Name" />
              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="E-Mail" />
              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Nettoeinkommen" />
              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Beschäftigung" />
              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Haushaltsgröße" />
              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Einzugsdatum" />
            </div>

            <button
              onClick={analyzeApplication}
              className="mt-8 rounded-xl bg-emerald-400 px-8 py-4 font-black uppercase text-black"
            >
              Bewerbung analysieren
            </button>
          </div>

          <div className="rounded-3xl border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Ergebnis
            </p>

            {!result ? (
              <div className="mt-10 rounded-2xl border border-white/10 bg-black p-8 text-zinc-500">
                Noch keine Analyse gestartet.
              </div>
            ) : (
              <div className="mt-8">
                <p className="text-7xl font-black text-emerald-400">A</p>

                <p className="mt-4 text-3xl font-black uppercase">
                  Score 92
                </p>

                <p className="mt-6 leading-8 text-zinc-300">
                  Hohe Priorität. Der Bewerber erfüllt die wichtigsten Kriterien
                  und sollte zuerst geprüft werden.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-xl bg-emerald-400/10 p-4">
                    Einkommen stabil
                  </div>
                  <div className="rounded-xl bg-emerald-400/10 p-4">
                    Beschäftigung positiv
                  </div>
                  <div className="rounded-xl bg-emerald-400/10 p-4">
                    Angaben vollständig
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}