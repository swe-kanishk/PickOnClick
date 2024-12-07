import blacklistTokenModel from "../db/blacklistToken.model.js";
import { userModel } from "../models/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

export const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;
  const { firstname, lastname } = fullname;
  const isAlreadyExist = await userModel.findOne({email})
    if(isAlreadyExist  ) {
        return res.status(400).json({message: 'Email already exists'})
    }

  const hashedPassword = await userModel.hashPassword(password);

  const user = await createUser({
    firstname,
    lastname,
    email,
    password: hashedPassword,
  });

  const token = user.generateAuthToken();
  console.log(user)

  res.status(201).json({ token, user });
};

export const loginUser = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(200).json({errors: errors.array()})
    }
    
    const { email, password } = req.body;

    const user = await userModel.findOne({email}).select('+password');
    if(!user){
      return res.status(401).json({message: 'Invalid email or password!'})
    }

    const isPasswordMatched = await user.comparePassword(password)
    if(!isPasswordMatched) {
      return res.status(401).json({message: 'Invalid email or password!'})
    }

    const token = user.generateAuthToken();
    res.cookie('token', token)
    return res.status(200).json({token, user});
}

export const getUserProfile = async (req, res) => {
  const user = req.user
  return res.status(200).json(user)
}

export const logoutUser = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[0]
  await blacklistTokenModel.create({token})
  res.clearCookie();
  return res.status(200).json({message: 'Logged out'})
}