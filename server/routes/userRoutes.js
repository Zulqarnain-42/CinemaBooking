import express from 'express'
import { AddUpdateFavorite, getFavorites, getUserBookings } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/bookings',getUserBookings)
userRouter.post('/update-favorite',AddUpdateFavorite)
userRouter.get('/favorites',getFavorites)

export default userRouter;