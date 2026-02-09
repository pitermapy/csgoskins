import React, { useMemo, useState } from 'react';
import { useCases } from '../hooks/useCases.js';
import CaseOpener from '../components/CaseOpener.jsx';
import Feedback from '../components/Feedback.jsx';

const Home = () => {
  const { cases, loading, error } = useCases();
  const [selectedId, setSelectedId] = useState(null);

  const selectedCase = useMemo(
    () => cases.find((item) => item.id === selectedId) || cases[0],
    [cases, selectedId]
  );

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-white/10 bg-gradient-to-r from-carbon to-steel p-8">
        <h1 className="text-3xl font-bold">CSGO Skins Case Opening</h1>
        <p className="mt-2 text-white/60">
          Symulator otwierania skrzyń z dynamiczną animacją, wagami dropów i
          pełnym panelem admina.
        </p>
      </section>

      {loading && (
        <Feedback status="info" message="Ładowanie skrzyń..." />
      )}
      {error && <Feedback status="error" message={error} />}

      {!loading && !error && (
        <section className="rounded-2xl border border-white/10 bg-steel/30 p-6">
          <h2 className="text-lg font-semibold">Dostępne skrzynie</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {cases.map((caseItem) => (
              <button
                key={caseItem.id}
                type="button"
                onClick={() => setSelectedId(caseItem.id)}
                className={`rounded-lg border px-4 py-3 text-left transition ${
                  selectedCase?.id === caseItem.id
                    ? 'border-neon bg-neon/10'
                    : 'border-white/10 bg-black/20 hover:border-white/40'
                }`}
              >
                <p className="text-sm font-semibold">{caseItem.name}</p>
                <p className="mt-1 text-xs text-white/60">
                  Cena: {caseItem.price} coins · House edge:{' '}
                  {caseItem.houseEdge}%
                </p>
              </button>
            ))}
          </div>
        </section>
      )}

      <CaseOpener selectedCase={selectedCase} />
    </div>
  );
};

export default Home;
