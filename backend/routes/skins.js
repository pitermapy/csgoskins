import { Router } from 'express';
import { getSkins } from '../controllers/skinController.js';

const router = Router();

router.get('/', getSkins);

export default router;
