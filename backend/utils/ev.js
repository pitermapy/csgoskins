export const calculateEV = (items) => {
  if (!items.length) return 0;
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  if (!totalWeight) return 0;
  const value = items.reduce(
    (sum, item) => sum + (item.price || 0) * (item.weight / totalWeight),
    0
  );
  return Number(value.toFixed(2));
};

export const suggestCasePrice = (ev, houseEdgePercent) => {
  const multiplier = 1 + houseEdgePercent / 100;
  return Number((ev * multiplier).toFixed(2));
};
