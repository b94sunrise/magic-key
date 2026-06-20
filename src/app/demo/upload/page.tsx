"use client";

import { useState } from "react";

type Result = {
  score: number;
  category: "A" | "B" | "C";
  recommendation: string;
};

export default function UploadDemoPage() {
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFileName(file.name);
    setResult(null);
  }

  function startAnalysis() {
    if (!fileName) return;

    setLoading(true);
    setResult(null);

    const phases = [
      "Datei wird gelesen...",
      "Bewerbungsdaten werden erkannt...",
      "Einkommen wird extrahiert...",
      "SCHUFA und Risikofaktoren werden geprüft...",
      "Score wird berechnet...",
    ];

    let index = 0;
    setPhase(phases[index]);

    const interval = setInterval(() => {
      index += 1;

      if (index < phases.length) {
        setPhase(phases[index]);
        return;
      }

      clearInterval(interval);

      setResult({
        score: 91,
        category: "A",
        recommendation: "Besichtigung anbieten",
      });

      setLoading(false);
      setPhase("");
    }, 650);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
          Magic Key Upload Demo
        </p>

        <h1 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
          Bewerbungsmappe
          <br />
          hochladen.
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-300">
          Simuliere, wie Magic Key eine Bewerbungsmappe erkennt, Daten
          extrahiert und automatisch priorisiert.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Upload
            </p>

            <label className="mt-8 flex min-h-[260px] cursor-pointer flex-col items-center justify-center rounded-3xl border border-dashed border-emerald-400/30 bg-emerald-400/5 p-8 text-center">
              <input
                type="file"
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />

              <span className="text-5xl font-black text-emerald-400">
                +
              </span>

              <span className="mt-5 text-2xl font-black uppercase">
                Datei auswählen
              </span>

              <span className="mt-3 text-zinc-400">
                PDF, JPG oder PNG hochladen
              </span>
            </label>

            {fileName && (
              <div className="mt-6 rounded-2xl border border-white/10 bg-black p-5">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-zinc-500">
                  Datei erkannt
                </p>

                <p className="mt-3 text-lg font-black">{fileName}</p>
              </div>
            )}

            <button
              onClick={startAnalysis}
              disabled={!fileName || loading}
              className="mt-8 w-full rounded-xl bg-emerald-400 px-8 py-5 font-black uppercase text-black disabled:opacity-40"
            >
              {loading ? "Analyse läuft..." : "Analyse starten"}
            </button>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Analyse
            </p>

            {!loading && !result && (
              <div className="mt-10 rounded-2xl border border-white/10 bg-black p-8 text-zinc-500">
                Noch keine Datei analysiert.
              </div>
            )}

            {loading && (
              <div className="mt-10">
                <p className="text-2xl font-black uppercase">
                  Dokumentenanalyse läuft
                </p>

                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-emerald-400" />
                </div>

                <p className="mt-5 text-zinc-400">{phase}</p>

                <div className="mt-8 space-y-3">
                  <div className="rounded-xl bg-emerald-400/10 p-4">
                    Name und Kontaktdaten erkennen
                  </div>

                  <div className="rounded-xl bg-emerald-400/10 p-4">
                    Einkommensangaben extrahieren
                  </div>

                  <div className="rounded-xl bg-emerald-400/10 p-4">
                    Risikofaktoren prüfen
                  </div>
                </div>
              </div>
            )}

            {result && (
              <div className="mt-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-7xl font-black text-emerald-400">
                      {result.category}
                    </p>

                    <p className="mt-4 text-3xl font-black uppercase">
                      Score {result.score}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-400 px-5 py-3 text-center font-black uppercase text-black">
                    {result.recommendation}
                  </div>
                </div>

                <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${result.score}%` }}
                  />
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-emerald-400">
                      Erkannte Daten
                    </p>

                    <div className="space-y-3">
                      <div className="rounded-xl bg-emerald-400/10 p-4">
                        Einkommen: 4.200 EUR netto
                      </div>

                      <div className="rounded-xl bg-emerald-400/10 p-4">
                        Beschäftigung: unbefristet
                      </div>

                      <div className="rounded-xl bg-emerald-400/10 p-4">
                        SCHUFA: vorhanden
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-red-400">
                      Risiken
                    </p>

                    <div className="space-y-3">
                      <div className="rounded-xl bg-white/5 p-4 text-zinc-400">
                        Keine kritischen Auffälligkeiten
                      </div>

                      <div className="rounded-xl bg-white/5 p-4 text-zinc-400">
                        Manuelle Prüfung empfohlen
                      </div>
                    </div>
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