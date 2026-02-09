import React, { useMemo, useState } from 'react';
import { useOpenCase } from '../hooks/useOpenCase.js';
import Feedback from './Feedback.jsx';
import CaseRail from './CaseRail.jsx';

const CaseOpener = ({ selectedCase }) => {
  const { openCase, opening, result, error } = useOpenCase();
  const [animationItems, setAnimationItems] = useState([]);

  const handleOpen = async () => {
    if (!selectedCase || opening) return;
    const reel = selectedCase.items
      .map((item) => ({ ...item, id: `${item.id}-${Math.random()}` }))
      .slice(0, 18);
    setAnimationItems(reel);
    await openCase(selectedCase.id);
  };

  const resultLabel = useMemo(() => {
    if (!result) return null;
    return `${result.name} (${result.rarity})`;
  }, [result]);

  return (
    <section className="rounded-2xl border border-white/10 bg-steel/40 p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-semibold">Otwórz skrzynię</h2>
          <p className="text-sm text-white/60">
            Uruchom animację przewijania i odbierz wylosowany skin.
          </p>
        </div>
        <button
          type="button"
          onClick={handleOpen}
          disabled={!selectedCase || opening}
          className="rounded-lg bg-neon px-5 py-2 text-sm font-semibold text-carbon shadow-lg transition hover:opacity-90 disabled:opacity-40"
        >
          {opening ? 'Losowanie...' : 'Otwórz skrzynię'}
        </button>
      </div>

      <div className="mt-6">
        <CaseRail items={animationItems} isAnimating={opening} />
      </div>

      <Feedback
        className="mt-4"
        status={error ? 'error' : result ? 'success' : 'info'}
        message={
          error ||
          resultLabel ||
          'Wybierz skrzynię i kliknij przycisk otwarcia.'
        }
      />
    </section>
  );
};

export default CaseOpener;
