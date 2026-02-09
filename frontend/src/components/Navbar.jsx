import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="border-b border-white/10 bg-carbon/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-neon/20" />
          <div>
            <p className="text-lg font-semibold">CSGO Skins</p>
            <p className="text-xs text-white/60">Case Opening Lab</p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm text-white/70">
          <NavLink className="hover:text-white" to="/">
            Strona główna
          </NavLink>
          <NavLink className="hover:text-white" to="/dashboard">
            Panel użytkownika
          </NavLink>
          <NavLink className="hover:text-white" to="/admin">
            Admin
          </NavLink>
        </nav>
        <div className="text-xs text-white/60">
          {user ? (
            <button
              className="rounded bg-white/10 px-3 py-2 text-white hover:bg-white/20"
              onClick={logout}
              type="button"
            >
              Wyloguj ({user.email})
            </button>
          ) : (
            <span>Zaloguj się w panelu</span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
