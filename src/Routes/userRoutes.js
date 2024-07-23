import { Router } from 'express';
import { getUserDetails } from '../Controllers/userControllers.js';
import { verifyToken } from '../Middleware/authMiddleware.js';

const router = Router();

// Route to get user details
router.get('/user/details', verifyToken, getUserDetails);

export default router;
