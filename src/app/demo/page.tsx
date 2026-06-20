"use client";

import { useState } from "react";

type Result = {
  score: number;
  category: "A" | "B" | "C";
  title: string;
  recommendation: string;
  notes: string[];
};

export default function DemoPage() {
  const [income, setIncome] = useState("");
  const [employment, setEmployment] = useState("Festanstellung");
  const [household, setHousehold] = useState("");
  const [pets, setPets] = useState("Nein");
  const [smoker, setSmoker] = useState("Nein");
  const [schufa, setSchufa] = useState("Ja");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  function analyzeApplication() {
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      let score = 35;
      const netIncome = Number(income);
      const people = Number(household);

      if (netIncome >= 4500) score += 25;
      else if (netIncome >= 3500) score += 20;
      else if (netIncome >= 2800) score += 14;
      else if (netIncome >= 2200) score += 8;
      else score -= 8;

      if (employment === "Unbefristet") score += 22;
      else if (employment === "Festanstellung") score += 18;
      else if (employment === "Selbstständig") score += 8;
      else score -= 8;

      if (people > 0 && people <= 2) score += 8;
      else if (people >= 4) score -= 8;

      if (pets === "Nein") score += 5;
      else score -= 3;

      if (smoker === "Nein") score += 5;
      else score -= 6;

      if (schufa === "Ja") score += 15;
      else score -= 22;

      score = Math.max(0, Math.min(100, score));

      const category = score >= 82 ? "A" : score >= 62 ? "B" : "C";

      setResult({
        score,
        category,
        title:
          category === "A"
            ? "Sehr gute Priorität"
            : category === "B"
              ? "Solide Bewerbung"
              : "Nachrangig prüfen",
        recommendation:
          category === "A"
            ? "Besichtigung anbieten"
            : category === "B"
              ? "Auf Warteliste setzen"
              : "Manuell prüfen oder absagen",
        notes: [
          netIncome >= 2800
            ? "Einkommen liegt im positiven Bereich"
            : "Einkommen sollte genauer geprüft werden",
          employment === "Unbefristet" || employment === "Festanstellung"
            ? "Beschäftigung wirkt stabil"
            : "Beschäftigung erfordert zusätzliche Prüfung",
          schufa === "Ja" ? "SCHUFA vorhanden" : "SCHUFA fehlt",
          pets === "Nein" && smoker === "Nein"
            ? "Keine zusätzlichen Risikofaktoren angegeben"
            : "Zusätzliche Angaben beachten",
        ],
      });

      setLoading(false);
    }, 900);
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-emerald-400">
          Magic Key Demo
        </p>

        <h1 className="mt-5 text-5xl font-black uppercase leading-none md:text-7xl">
          Bewerber analysieren.
        </h1>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[32px] border border-white/10 bg-zinc-950 p-8">
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
                <option>Selbstständig</option>
                <option>Befristet</option>
              </select>

              <input
                value={household}
                onChange={(e) => setHousehold(e.target.value)}
                className="rounded-xl border border-white/10 bg-black p-4"
                placeholder="Haushaltsgröße"
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
              disabled={loading}
              className="mt-8 rounded-xl bg-emerald-400 px-8 py-4 font-black uppercase text-black disabled:opacity-60"
            >
              {loading ? "Analyse läuft..." : "Bewerbung analysieren"}
            </button>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-zinc-950 p-8">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500">
              Ergebnis
            </p>

            {!result && !loading && (
              <div className="mt-10 rounded-2xl border border-white/10 bg-black p-8 text-zinc-500">
                Noch keine Analyse gestartet.
              </div>
            )}

            {loading && (
              <div className="mt-10">
                <p className="text-2xl font-black uppercase">
                  Analyse wird durchgeführt
                </p>
                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-emerald-400" />
                </div>
                <p className="mt-5 text-zinc-400">
                  Kriterien werden bewertet und priorisiert.
                </p>
              </div>
            )}

            {result && (
              <div className="mt-8">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-7xl font-black text-emerald-400">
                      {result.category}
                    </p>
                    <p className="mt-4 text-3xl font-black uppercase">
                      Score {result.score}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-emerald-400 px-5 py-3 font-black uppercase text-black">
                    {result.recommendation}
                  </div>
                </div>

                <div className="mt-8 h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-emerald-400"
                    style={{ width: `${result.score}%` }}
                  />
                </div>

                <p className="mt-6 text-xl text-zinc-300">{result.title}</p>

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