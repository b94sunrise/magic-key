"use client";

import { useState } from "react";

type Result = {
  score: number;
  category: "A" | "B" | "C";
  title: string;
  recommendation: string;
  positives: string[];
  risks: string[];
};

export default function DemoPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [employment, setEmployment] = useState("Festanstellung");
  const [household, setHousehold] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [pets, setPets] = useState("Nein");
  const [smoker, setSmoker] = useState("Nein");
  const [schufa, setSchufa] = useState("Ja");
  const [debts, setDebts] = useState("Nein");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [phase, setPhase] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function analyzeApplication() {
    setError("");
    setResult(null);

    if (name.trim().length < 2) {
      setError("Bitte einen vollständigen Namen eintragen.");
      return;
    }

    if (!email.includes("@")) {
      setError("Bitte eine gültige E-Mail eintragen.");
      return;
    }

    const netIncome = Number(income);
    const warmRent = Number(rent);
    const people = Number(household);

    if (!netIncome || netIncome <= 0) {
      setError("Bitte ein gültiges Nettoeinkommen eintragen.");
      return;
    }

    if (!warmRent || warmRent <= 0) {
      setError("Bitte eine gültige Warmmiete eintragen.");
      return;
    }

    if (!people || people <= 0) {
      setError("Bitte eine gültige Haushaltsgröße eintragen.");
      return;
    }

    if (!moveIn.trim()) {
      setError("Bitte ein Einzugsdatum eintragen.");
      return;
    }

    setLoading(true);

    const phases = [
      "Bewerbungsdaten prüfen...",
      "Einkommen und Warmmiete vergleichen...",
      "Haushalt und Angaben bewerten...",
      "SCHUFA und Risikofaktoren prüfen...",
      "Score berechnen...",
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

      let score = 35;
      const rentRatio = warmRent / netIncome;

      if (rentRatio <= 0.3) score += 25;
      else if (rentRatio <= 0.4) score += 18;
      else if (rentRatio <= 0.5) score += 8;
      else score -= 12;

      if (netIncome >= 4500) score += 18;
      else if (netIncome >= 3500) score += 14;
      else if (netIncome >= 2800) score += 8;
      else if (netIncome < 2200) score -= 8;

      if (employment === "Unbefristet") score += 18;
      else if (employment === "Festanstellung") score += 14;
      else if (employment === "Selbstständig") score += 5;
      else score -= 8;

      if (people <= 2) score += 8;
      else if (people >= 4) score -= 8;

      if (schufa === "Ja") score += 15;
      else score -= 25;

      if (debts === "Nein") score += 8;
      else score -= 20;

      if (pets === "Nein") score += 4;
      else score -= 3;

      if (smoker === "Nein") score += 4;
      else score -= 6;

      score = Math.max(0, Math.min(100, score));

      const category = score >= 82 ? "A" : score >= 62 ? "B" : "C";

      const positives = [];
      const risks = [];

      if (rentRatio <= 0.4) positives.push("Warmmiete passt zum Einkommen");
      else risks.push("Warmmiete ist im Verhältnis zum Einkommen hoch");

      if (employment === "Unbefristet" || employment === "Festanstellung") {
        positives.push("Beschäftigung wirkt stabil");
      } else {
        risks.push("Beschäftigung sollte zusätzlich geprüft werden");
      }

      if (schufa === "Ja") positives.push("SCHUFA vorhanden");
      else risks.push("SCHUFA fehlt");

      if (debts === "Nein") positives.push("Keine Mietschulden angegeben");
      else risks.push("Mietschulden angegeben");

      if (pets === "Ja") risks.push("Haustiere angegeben");
      if (smoker === "Ja") risks.push("Raucher angegeben");

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
              ? "Warteliste / manuell prüfen"
              : "Nachrangig behandeln",
        positives,
        risks,
      });

      setLoading(false);
      setPhase("");
    }, 450);
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
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                  placeholder="Max Mustermann"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  E-Mail
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                  placeholder="max@mail.de"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Nettoeinkommen
                </label>
                <input
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                  placeholder="3200"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Warmmiete
                </label>
                <input
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                  placeholder="950"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Beschäftigung
                </label>
                <select
                  value={employment}
                  onChange={(e) => setEmployment(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                >
                  <option>Festanstellung</option>
                  <option>Unbefristet</option>
                  <option>Selbstständig</option>
                  <option>Befristet</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Haushaltsgröße
                </label>
                <input
                  value={household}
                  onChange={(e) => setHousehold(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                  placeholder="2"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Einzugsdatum
                </label>
                <input
                  value={moveIn}
                  onChange={(e) => setMoveIn(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                  placeholder="01.08.2026"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Haustiere
                </label>
                <select
                  value={pets}
                  onChange={(e) => setPets(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                >
                  <option>Nein</option>
                  <option>Ja</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Raucher
                </label>
                <select
                  value={smoker}
                  onChange={(e) => setSmoker(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                >
                  <option>Nein</option>
                  <option>Ja</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  SCHUFA vorhanden
                </label>
                <select
                  value={schufa}
                  onChange={(e) => setSchufa(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                >
                  <option>Ja</option>
                  <option>Nein</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-black uppercase tracking-[0.2em] text-zinc-500">
                  Mietschulden bekannt
                </label>
                <select
                  value={debts}
                  onChange={(e) => setDebts(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4"
                >
                  <option>Nein</option>
                  <option>Ja</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-red-300">
                {error}
              </div>
            )}

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
                <p className="mt-5 text-zinc-400">{phase}</p>
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

                <p className="mt-6 text-xl text-zinc-300">{result.title}</p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-emerald-400">
                      Positiv
                    </p>
                    <div className="space-y-3">
                      {result.positives.map((item) => (
                        <div key={item} className="rounded-xl bg-emerald-400/10 p-4">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-red-400">
                      Risiken
                    </p>
                    <div className="space-y-3">
                      {result.risks.length === 0 ? (
                        <div className="rounded-xl bg-white/5 p-4 text-zinc-500">
                          Keine Auffälligkeiten
                        </div>
                      ) : (
                        result.risks.map((item) => (
                          <div key={item} className="rounded-xl bg-red-400/10 p-4">
                            {item}
                          </div>
                        ))
                      )}
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