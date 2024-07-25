import { Router } from "express";
const router = Router();
import {
  startMapping,
  saveMappingData,
  listMaps,
  
} from "../Controllers/startMappingController.js";

router.post("/start-mapping", startMapping);
router.post("/save-mapping-data", saveMappingData);

router.get("/list-maps", listMaps);
 

export default router;