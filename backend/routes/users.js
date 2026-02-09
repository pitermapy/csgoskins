import { Router } from 'express';
import { getProfile, updateBalance } from '../controllers/userController.js';

const router = Router();

router.get('/me', getProfile);
router.post('/balance', updateBalance);

export default router;
