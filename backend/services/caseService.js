import fs from 'fs/promises';
import path from 'path';
import { v4 as uuid } from 'uuid';
import { loadSkins } from './skinService.js';
import { pickWeighted } from '../utils/weights.js';
import { calculateEV, suggestCasePrice } from '../utils/ev.js';

const casesPath = path.resolve('backend/data/cases.json');
let cachedCases = [];

const rarityWeights = {
  common: 55,
  uncommon: 25,
  rare: 12,
  epic: 6,
  legendary: 2,
};

export const bootstrapCases = async () => {
  try {
    const raw = await fs.readFile(casesPath, 'utf-8');
    cachedCases = JSON.parse(raw);
  } catch (error) {
    cachedCases = await autoGenerateCases();
    await fs.writeFile(casesPath, JSON.stringify(cachedCases, null, 2));
  }
};

export const getAllCases = async () => {
  if (!cachedCases.length) {
    await bootstrapCases();
  }
  return cachedCases;
};

export const getCaseSuggestions = async () => {
  const cases = await getAllCases();
  const topCase = cases[0];
  const ev = calculateEV(topCase.items);
  return {
    price: suggestCasePrice(ev, topCase.houseEdge),
    ev,
  };
};

export const createCaseConfig = async (payload) => {
  const cases = await getAllCases();
  const nextCase = {
    id: uuid(),
    name: payload.name,
    houseEdge: payload.houseEdge ?? 10,
    price: payload.price,
    items: payload.items || [],
  };
  cachedCases = [nextCase, ...cases];
  await fs.writeFile(casesPath, JSON.stringify(cachedCases, null, 2));
  return nextCase;
};

export const updateCaseConfig = async (caseId, payload) => {
  const cases = await getAllCases();
  const updated = cases.map((item) =>
    item.id === caseId ? { ...item, ...payload } : item
  );
  cachedCases = updated;
  await fs.writeFile(casesPath, JSON.stringify(cachedCases, null, 2));
  return updated.find((item) => item.id === caseId);
};

export const deleteCaseConfig = async (caseId) => {
  const cases = await getAllCases();
  cachedCases = cases.filter((item) => item.id !== caseId);
  await fs.writeFile(casesPath, JSON.stringify(cachedCases, null, 2));
};

export const openCaseAndLog = async (caseId) => {
  const cases = await getAllCases();
  const selected = cases.find((item) => item.id === caseId) || cases[0];
  if (!selected) {
    const err = new Error('Skrzynia nie istnieje.');
    err.status = 404;
    throw err;
  }

  const result = pickWeighted(selected.items);
  const entry = {
    id: uuid(),
    caseId: selected.id,
    caseName: selected.name,
    itemName: result.name,
    rarity: result.rarity,
    timestamp: new Date().toISOString(),
  };

  selected.history = [entry, ...(selected.history || [])].slice(0, 50);
  return result;
};

export const autoGenerateCases = async () => {
  const skins = await loadSkins();
  const byRarity = skins.reduce((acc, skin) => {
    acc[skin.rarity] = acc[skin.rarity] || [];
    acc[skin.rarity].push(skin);
    return acc;
  }, {});

  const createCase = (name, houseEdge) => {
    const items = Object.entries(rarityWeights).flatMap(([rarity, weight]) => {
      const pool = byRarity[rarity] || [];
      return pool.slice(0, 3).map((skin) => ({
        ...skin,
        weight,
      }));
    });
    const ev = calculateEV(items);
    return {
      id: uuid(),
      name,
      houseEdge,
      price: suggestCasePrice(ev, houseEdge),
      items,
    };
  };

  return [
    createCase('Neon Assault', 8),
    createCase('Carbon Classic', 10),
    createCase('Hyper Vault', 12),
  ];
};
