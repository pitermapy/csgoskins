import React from 'react';

const CaseRail = ({ items = [], isAnimating }) => {
  if (!items.length) {
    return (
      <div className="flex h-36 items-center justify-center rounded-xl border border-dashed border-white/10 bg-black/20 text-sm text-white/50">
        Tutaj pojawi się animacja przewijania przedmiotów.
      </div>
    );
  }

  return (
    <div className="case-rail overflow-hidden rounded-xl border border-white/10 bg-black/40 p-3">
      <div
        className={`flex gap-4 ${isAnimating ? 'animate-slide' : ''}`}
        style={{ width: `${items.length * 180}px` }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="case-item rounded-lg border border-white/10 bg-steel/70 p-4 text-center"
          >
            <p className="text-xs uppercase text-white/50">{item.rarity}</p>
            <p className="mt-2 text-sm font-semibold">{item.name}</p>
            <p className="mt-1 text-xs text-white/50">{item.weapon}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseRail;
