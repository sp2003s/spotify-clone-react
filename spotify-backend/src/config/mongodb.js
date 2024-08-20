import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('Connected', () => {
        console.log('Connection Established')
    })
    
    await mongoose.connect(`${procces.env.MONDODB_URI}/spotify-clone`)
}

export default connectDB;