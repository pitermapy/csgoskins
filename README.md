# CSGO Skins Case Opening

Pełny projekt demo aplikacji webowej typu **CSGO skins case opening** z frontem w React + Tailwind i backendem w Node.js/Express. Zawiera przykładową logikę dropów, house edge, panel admina oraz integrację z Firebase Auth.

## 📐 Plan architektury

- **Frontend** (Vite + React + Tailwind): UI, animacja case opening, panel użytkownika i admina, komunikacja z API.
- **Backend** (Node.js + Express): API dla skrzyń, skinów, statystyk, panelu admina.
- **Firebase Auth**: logowanie użytkowników i adminów po stronie klienta.
- **Firestore**: docelowe miejsce na dane użytkowników, inventory, historię i konfiguracje skrzyń.

## 📁 Struktura folderów

```
frontend/
  src/
    api/
    components/
    hooks/
    pages/
    styles/
backend/
  config/
  controllers/
  data/
  middleware/
  routes/
  scripts/
  services/
  utils/
```

## 🚀 Szybki start

### Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

### Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

## 🔐 Firebase Auth

1. Utwórz projekt w Firebase.
2. Skopiuj wartości z Firebase Console do `frontend/.env`.
3. Opcjonalnie: w backendzie wstaw JSON service account do `backend/.env`.

## 🧠 Logika dropów i house edge

- Wagi dropów są przypisane do rarity (`backend/utils/weights.js`).
- EV oraz sugerowana cena skrzyni wyliczane są w `backend/utils/ev.js`.

## 🧪 Autogenerator skrzyń

```bash
cd backend
npm run generate:cases
```

## ☁️ Deployment (propozycja)

- **Frontend**: Vercel (Vite)
- **Backend**: Vercel (Serverless) lub Render
- **Repo**: GitHub

## 📌 Dalsze kroki

- Podpięcie Firestore dla realnych danych użytkowników.
- Rozszerzenie animacji i efektów graficznych.
- Dodanie systemu płatności i marketplace.
