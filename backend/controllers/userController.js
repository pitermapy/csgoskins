import { getProfileStore, updateUserBalance } from '../services/userService.js';

export const getProfile = (req, res) => {
  const profile = getProfileStore();
  res.json({ profile });
};

export const updateBalance = (req, res, next) => {
  try {
    const { delta } = req.body;
    const profile = updateUserBalance(delta);
    res.json({ profile });
  } catch (error) {
    next(error);
  }
};
