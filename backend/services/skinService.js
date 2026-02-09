import fs from 'fs/promises';
import path from 'path';

const dataPath = path.resolve('backend/data/skins.json');

export const loadSkins = async () => {
  const raw = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(raw);
};
