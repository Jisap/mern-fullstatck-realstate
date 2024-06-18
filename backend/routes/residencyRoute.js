import express from 'express';
import { createResdidency, getAllResidencies } from '../controllers/residencyController.js';


const router = express.Router()

router.post("/create", createResdidency)
router.get("/allresd", getAllResidencies)
router.get("/:id", getResidency)


export { router as residencyRoute }