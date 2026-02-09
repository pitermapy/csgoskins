import React from 'react';
import Feedback from './Feedback.jsx';

const AdminPanel = ({ stats, suggestions }) => (
  <section className="rounded-2xl border border-white/10 bg-steel/40 p-6">
    <h2 className="text-xl font-semibold">Panel admina</h2>
    <p className="text-sm text-white/60">
      Zarządzaj skrzyniami, balansami i house edge w jednym miejscu.
    </p>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-white/10 bg-black/30 p-4">
        <h3 className="text-sm font-semibold text-white/70">Statystyki platformy</h3>
        <ul className="mt-2 space-y-2 text-sm text-white/70">
          <li>Aktywni użytkownicy: {stats.activeUsers}</li>
          <li>Łączne otwarcia: {stats.totalOpens}</li>
          <li>Średni house edge: {stats.houseEdge}%</li>
        </ul>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/30 p-4">
        <h3 className="text-sm font-semibold text-white/70">Sugestie cen</h3>
        <Feedback
          status="info"
          message={`Sugerowana cena top skrzyni: ${suggestions.price} coins (EV: ${suggestions.ev} coins)`}
        />
        <p className="mt-2 text-xs text-white/50">
          Tip: ustaw house edge na poziomie 6-12% aby utrzymać rentowność.
        </p>
      </div>
    </div>

    <div className="mt-6 rounded-lg border border-dashed border-white/10 p-4 text-sm text-white/60">
      Tu wpięte będą formularze do CRUD skrzyń, kategorii i balansów użytkowników.
    </div>
  </section>
);

export default AdminPanel;
