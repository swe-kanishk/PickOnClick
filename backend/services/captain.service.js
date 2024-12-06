import { captainModel } from "../models/captain.model.js";

export const createCaptain = async (
    {firstname, lastname, email, password, color, plate, capacity, vehicleType}
) => {
    if(!firstname || !email || !password || !color || !plate || !capacity || !vehicleType){
        throw new Error('All fields are required!')
    }
    const user = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            capacity,
            plate,
            vehicleType
        }
    })
    return user;
}