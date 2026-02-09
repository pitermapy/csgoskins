import {
  getAllCases,
  getCaseSuggestions,
  createCaseConfig,
  updateCaseConfig,
  deleteCaseConfig,
} from '../services/caseService.js';

export const getSuggestions = async (req, res, next) => {
  try {
    const suggestion = await getCaseSuggestions();
    res.json(suggestion);
  } catch (error) {
    next(error);
  }
};

export const listCases = async (req, res, next) => {
  try {
    const cases = await getAllCases();
    res.json({ cases });
  } catch (error) {
    next(error);
  }
};

export const createCase = async (req, res, next) => {
  try {
    const created = await createCaseConfig(req.body);
    res.status(201).json(created);
  } catch (error) {
    next(error);
  }
};

export const updateCase = async (req, res, next) => {
  try {
    const updated = await updateCaseConfig(req.params.caseId, req.body);
    res.json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteCase = async (req, res, next) => {
  try {
    await deleteCaseConfig(req.params.caseId);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
