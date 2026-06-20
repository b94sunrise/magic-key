"use client";

import { useState } from "react";

type Result = {
  score: number;
  category: "A" | "B" | "C";
  title: string;
  notes: string[];
};

export default function DemoPage() {
  const [income, setIncome] = useState("");
  const [employment, setEmployment] = useState("Festanstellung");
  const [household, setHousehold] = useState("");
  const [pets, setPets] = useState("Nein");
  const [smoker, setSmoker] = useState("Nein");
  const [schufa, setSchufa] = useState("Ja");
  const [result, setResult] = useState<Result | null>(null);

  function analyzeApplication() {
    let score = 40;
    const netIncome = Number(income);
    const people = Number(household);

    if (netIncome >= 4000) score += 25;
    else if (netIncome >= 3000) score += 18;
    else if (netIncome >= 2200) score += 10;
    else score -= 10;

    if (employment === "Festanstellung") score += 18;
    if (employment === "Unbefristet") score += 20;
    if (employment === "Selbststaendig") score += 8;
    if (employment === "Befristet") score -= 5;

    if (people <= 2) score += 10;
    if (people >= 4) score -= 8;

    if (pets === "Nein") score += 6;
    if (pets === "Ja") score -= 4;

    if (smoker === "Nein") score += 6;
    if (smoker === "Ja") score -= 8;

    if (schufa === "Ja") score += 15;
    if (schufa === "Nein") score -= 20;

    score = Math.max(0, Math.min(100, score));

    const category = score >= 80 ? "A" : score >= 60 ? "B" : "C";

    setResult({
      score,
      category,
      title:
        category === "A"
          ? "Hohe Priorität"
          : category === "B"
            ? "Mittlere Priorität"
            : "Nachrangig prüfen",
      notes: [
        netIncome >= 3000 ? "Einkommen wirkt stabil" : "Einkommen sollte genauer geprüft werden",
        employment === "Festanstellung" || employment === "Unbefristet"
          ? "Beschäftigung positiv"
          : "Beschäftigung erfordert zusätzliche Prüfung",
        schufa === "Ja" ? "SCHUFA vorhanden" : "SCHUFA fehlt",
      ],
    });
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

              <input
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
                placeholder="Nettoeinkommen"
              />

              <select
                value={employment}
                onChange={(e) => setEmployment(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
              >
                <option>Festanstellung</option>
                <option>Unbefristet</option>
                <option>Selbststaendig</option>
                <option>Befristet</option>
              </select>

              <input
                value={household}
                onChange={(e) => setHousehold(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
                placeholder="Haushaltsgroesse"
              />

              <input className="rounded-xl border border-white/10 bg-black p-4" placeholder="Einzugsdatum" />

              <select
                value={pets}
                onChange={(e) => setPets(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
              >
                <option>Nein</option>
                <option>Ja</option>
              </select>

              <select
                value={smoker}
                onChange={(e) => setSmoker(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
              >
                <option>Nein</option>
                <option>Ja</option>
              </select>

              <select
                value={schufa}
                onChange={(e) => setSchufa(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
              >
                <option>Ja</option>
                <option>Nein</option>
              </select>
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
                <p className="text-7xl font-black text-emerald-400">
                  {result.category}
                </p>

                <p className="mt-4 text-3xl font-black uppercase">
                  Score {result.score}
                </p>

                <p className="mt-4 text-xl text-zinc-300">{result.title}</p>

                <div className="mt-8 space-y-3">
                  {result.notes.map((note) => (
                    <div key={note} className="rounded-xl bg-emerald-400/10 p-4">
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}