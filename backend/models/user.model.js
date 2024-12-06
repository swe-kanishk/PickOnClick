import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
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
    minlength: [3, "Email must be at least consist of 5 characters"],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
};

userSchema.methods.comparePassword = async (password) => {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async (password) => {
  return await bcrypt.hash(password, 10);
};

export const userModel = mongoose.model("user", userSchema);
