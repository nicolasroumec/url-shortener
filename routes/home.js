import express from 'express';
import { leerUrls, agregarUrl } from '../controllers/homeController.js';
const router = express.Router();

router.get("/", leerUrls);
router.post("/", agregarUrl);

export default router;
