import { userModel } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import blacklistTokenModel from "../db/blacklistToken.model.js";

export const authUser = async(req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({mesage: 'Unauthorized'})
    }
    
    const isBlacklisted = await blacklistTokenModel.findOne({token});
    if(isBlacklisted) {
        return res.status(401).json({mesage: 'Unauthorized'})
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)
        req.user = user;
        return next()
    } catch (error) {
        return res.status(401).json({mesage: 'Unauthorized'})
    }
}