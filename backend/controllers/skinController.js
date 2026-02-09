import { loadSkins } from '../services/skinService.js';

export const getSkins = async (req, res, next) => {
  try {
    const skins = await loadSkins();
    res.json({ skins });
  } catch (error) {
    next(error);
  }
};
