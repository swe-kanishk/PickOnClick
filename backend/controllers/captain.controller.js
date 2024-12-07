import { validationResult } from "express-validator";
import { captainModel } from "../models/captain.model.js";
import { createCaptain } from "../services/captain.service.js";
import { userModel } from "../models/user.model.js";
import blacklistTokenModel from "../db/blacklistToken.model.js";

export const registerCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;

  const isAlreadyExist = await captainModel.findOne({ email });
  if (isAlreadyExist) {
    return res.status(400).json({ message: "Email already exists" });
  }
  const hashedPassword = captainModel.hashedPassword(password);

  const captain = await createCaptain({
    email,
    password,
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    color: vehicle.color,
    capacity: vehicle.capacity,
    plate: vehicle.plate,
    vehicleType: vehicle.vehicleType,
  });

  const token = captain.generateAuthToken();
  res.status(201).json({ token, captain });
};

export const loginCaptain = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const captain = await captainModel.findOne({ email }).select("+password");

  const isPasswordMatched = await captain.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({ message: "Invalid email or password!" });
  }

  const token = captain.generateAuthToken()
  res.cookie('token', token)
  return res.status(200).json({token, captain})
};

export const getCaptainProfile = async (req, res) => {
    const captain = req.captain;
    return res.status(200).json(captain)
}

export const logoutCaptain = async (req, res) => {
    const token = req.cookie.token || req.headers.authorization?.split(' ')[1]
    await blacklistTokenModel.create({token})
    res.clearCookie()
    return res.status(200).json({message: 'Logout successfully'})
}