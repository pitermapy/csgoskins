export const normalizeWeights = (items) => {
  const total = items.reduce((sum, item) => sum + item.weight, 0);
  return items.map((item) => ({
    ...item,
    normalizedWeight: total ? item.weight / total : 0,
  }));
};

export const pickWeighted = (items) => {
  const normalized = normalizeWeights(items);
  const roll = Math.random();
  let acc = 0;
  for (const item of normalized) {
    acc += item.normalizedWeight;
    if (roll <= acc) return item;
  }
  return normalized[normalized.length - 1];
};
