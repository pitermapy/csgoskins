import { Router } from 'express';
import { loginInfo } from '../controllers/authController.js';

const router = Router();

router.get('/status', loginInfo);

export default router;
