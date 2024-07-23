import { Router } from 'express';
import History from '../Models/History.js';

const router = Router();

// Create a new history entry
router.post('/', async (req, res) => {
  try {
    const history = new History(req.body);
    const savedHistory = await history.save();
    res.status(201).json(savedHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all history entries
router.get('/', async (req, res) => {
  try {
    const history = await History.find(); // Call `find` on the History model
    res.status(200).json(history);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
