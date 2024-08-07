import express from 'express';
import { getRobots, createRobot } from '../Controllers/navControled.js';

const router = express.Router();

router.get('/robots', getRobots);
router.post('/robots', createRobot);
 

export default router;