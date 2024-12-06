import express from 'express'
const router = express.Router();
import { body } from 'express-validator'
import { registerUser } from '../controllers/user.controller.js'

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min: 3}).withMessage("FirstName must be atleast consist of 3 characters!"),
    body('password').isLength({min: 6}).withMessage("Password must be at least consist of 6 characters!")
], registerUser)

export default router;