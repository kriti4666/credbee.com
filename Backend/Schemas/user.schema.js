
import mongoose from "mongoose";

//schema validation i.e. form data validation 
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    versionKey: false,
    timestamps: true,
})

const User = mongoose.model("user", userSchema)

export default User
