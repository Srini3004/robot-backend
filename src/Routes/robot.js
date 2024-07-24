// src/Routes/robot.js
import express from 'express';
import { getRobots, createRobot } from '../Controllers/navControled.js'; // Correctly import the functions

const router = express.Router();

router.get('/robots', getRobots);
router.post('/robots', createRobot);

export default router;
