import express from 'express';
import { allBookings, bookVisit, cancelBooking, createUser, getAllFav, toFav } from "../controllers/userController.js"
import jwtCheck from '../config/auth0Config.js';

const router = express.Router()

router.post('/register', jwtCheck, createUser) // jwtCheck comprueba que el token de acceso de la petición de creación es el generado por auth0 según credenciales del authProvider
router.post("/bookVisit/:id", bookVisit)
router.post("/allBookings", allBookings)
router.post("/removeBooking/:id", cancelBooking)
router.post("/toFav/:rid", toFav)
router.post("/allFav", getAllFav)

export  { router as userRoute }
