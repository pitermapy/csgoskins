import { getAllCases } from '../services/caseService.js';

export const getStats = async (req, res, next) => {
  try {
    const cases = await getAllCases();
    const totalOpens = cases.reduce(
      (sum, item) => sum + (item.history?.length || 0),
      0
    );
    res.json({
      activeUsers: 42,
      totalOpens,
      houseEdge: cases[0]?.houseEdge || 10,
    });
  } catch (error) {
    next(error);
  }
};
