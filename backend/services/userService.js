import { v4 as uuid } from 'uuid';

const profile = {
  balance: 1200,
  inventory: [
    { id: uuid(), name: 'Desert Eagle | Pulse', rarity: 'rare' },
    { id: uuid(), name: 'AK-47 | Redline', rarity: 'epic' },
  ],
  history: [
    {
      id: uuid(),
      caseName: 'Neon Assault',
      itemName: 'Glock-18 | Weasel',
      rarity: 'uncommon',
    },
  ],
};

export const getProfileStore = () => profile;

export const updateUserBalance = (delta = 0) => {
  profile.balance += delta;
  return profile;
};
