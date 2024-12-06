import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: {
          type: String,
          required: true,
          minlength: [3, "FirstName must be of at least 3 characters"],
        },
        lastname: {
          type: String,
          default: '',
        },
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: [3, "Email must be at least consist of 5 characters"],
      },
      password: {
        type: String,
        required: true,
        select: false,
      },
      socketId: {
        type: String
      },
      status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
      },
      vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, 'Color name must be atleast consist of 3 characters']
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, 'Plate must be at least consiste of 3 charaters']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car','motorcycle','auto']
        }
      },
      location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
      }
});

captainSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'})
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

captainSchema.statics.hashedPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

export const captainModel = mongoose.model('captain', captainSchema)