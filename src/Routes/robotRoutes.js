// routes/robotRoutes.js

import { Router } from 'express';
import { getRobotDetails, saveRobotDetails , getRobotsByEmail} from '../Controllers/robotController.js';
import { verifyToken } from '../Middleware/authMiddleware.js'; // Assuming you have auth middleware
import { startMapping, saveMappingData, getMappingData } from "../Controllers/mapController.js"

const router = Router();

router.get('/robot/:robotId', verifyToken, getRobotDetails);
router.post('/robot', saveRobotDetails);
router.get('/robots', verifyToken, getRobotsByEmail);

//mapping api 
router.post("/start-mapping", startMapping);
router.post("/save-robot-data", saveMappingData);
 

router.get('/map-data/:robotId', verifyToken, getMappingData);
 

export default router;
