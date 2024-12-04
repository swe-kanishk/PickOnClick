import mongoose from "mongoose";

const connectToDb = async() => {
    mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to db successfully!")
    }).catch(err => console.log(err))
}

export default connectToDb;