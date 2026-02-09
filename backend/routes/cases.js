import { Router } from 'express';
import { getCases, openCase } from '../controllers/caseController.js';

const router = Router();

router.get('/', getCases);
router.post('/:caseId/open', openCase);

export default router;
