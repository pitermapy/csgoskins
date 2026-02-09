import React from 'react';

const UserPanel = ({ profile }) => (
  <section className="rounded-2xl border border-white/10 bg-steel/40 p-6">
    <h2 className="text-xl font-semibold">Panel użytkownika</h2>
    <div className="mt-4 grid gap-4 md:grid-cols-3">
      <div className="rounded-lg bg-black/30 p-4">
        <p className="text-xs text-white/50">Saldo coins</p>
        <p className="text-2xl font-bold text-neon">{profile.balance}🪙</p>
      </div>
      <div className="rounded-lg bg-black/30 p-4">
        <p className="text-xs text-white/50">Inventory</p>
        <p className="text-lg font-semibold">{profile.inventory.length} skinów</p>
      </div>
      <div className="rounded-lg bg-black/30 p-4">
        <p className="text-xs text-white/50">Ostatnie otwarcia</p>
        <p className="text-lg font-semibold">{profile.history.length} rekordów</p>
      </div>
    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div>
        <h3 className="text-sm font-semibold text-white/70">Inventory</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {profile.inventory.map((item) => (
            <li
              key={item.id}
              className="rounded-md border border-white/10 bg-black/20 px-3 py-2"
            >
              {item.name} - {item.rarity}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-white/70">Historia otwarć</h3>
        <ul className="mt-2 space-y-2 text-sm">
          {profile.history.map((entry) => (
            <li
              key={entry.id}
              className="rounded-md border border-white/10 bg-black/20 px-3 py-2"
            >
              {entry.caseName} → {entry.itemName} ({entry.rarity})
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default UserPanel;
