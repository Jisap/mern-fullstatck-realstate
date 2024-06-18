import express from 'express';
import { allBookings, bookVisit, cancelBooking, createUser, toFav } from "../controllers/userController.js"

const router = express.Router()

router.post('/register', createUser)
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", allBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:rid", toFav)

export  { router as userRoute }
