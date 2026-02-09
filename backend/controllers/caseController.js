import { getAllCases, openCaseAndLog } from '../services/caseService.js';

export const getCases = async (req, res, next) => {
  try {
    const cases = await getAllCases();
    res.json({ cases });
  } catch (error) {
    next(error);
  }
};

export const openCase = async (req, res, next) => {
  try {
    const { caseId } = req.params;
    const result = await openCaseAndLog(caseId);
    res.json({ result });
  } catch (error) {
    next(error);
  }
};
