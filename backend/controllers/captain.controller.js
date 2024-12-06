import { validationResult } from "express-validator"
import { captainModel } from "../models/captain.model.js"
import { createCaptain } from "../services/captain.service.js"

export const registerCaptain = async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()})
    }
    const {fullname, email, password, vehicle} = req.body;

    const isAlreadyExist = await captainModel.findOne({email})
    if(isAlreadyExist  ) {
        return res.status(400).json({message: 'Email already exists'})
    }
    const hashedPassword = captainModel.hashedPassword(password)

    const captain = await createCaptain({
        email,
        password,
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        color: vehicle.color,
        capacity: vehicle.capacity,
        plate: vehicle.plate,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken()
    res.status(200).json({token, captain})
}