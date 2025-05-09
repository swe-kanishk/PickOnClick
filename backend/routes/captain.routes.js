import express from 'express'
const router = express.Router()
import { getCaptainProfile, loginCaptain, logoutCaptain, registerCaptain } from '../controllers/captain.controller.js';
import { body } from 'express-validator';
import { authCaptain } from '../middlewares/auth.middleware.js';

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage("FirstName must be atleast consist of 3 characters!"),
    body('password').isLength({min: 6}).withMessage("Password must be at least consist of 6 characters!"),
    body('vehicle.color').isLength({min: 3}).withMessage('Color name must be atleast consist of 3 characters!'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be atleast consist of 3 characters!'),
    body('vehicle.capacity').isInt({min: 1}).withMessage('Capacity is must be atleast 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
], registerCaptain)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min: 6}).withMessage("Password must be at least consist of 6 characters!")
], loginCaptain)

router.get('/profile', authCaptain, getCaptainProfile)

router.get('/logout', authCaptain, logoutCaptain)

export default router