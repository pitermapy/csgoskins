import { Router } from 'express';
import {
  getSuggestions,
  listCases,
  createCase,
  updateCase,
  deleteCase,
} from '../controllers/adminController.js';

const router = Router();

router.get('/suggestions', getSuggestions);
router.get('/cases', listCases);
router.post('/cases', createCase);
router.put('/cases/:caseId', updateCase);
router.delete('/cases/:caseId', deleteCase);

export default router;
