import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    Meetings: [{
        type: mongoose.Types.ObjectId,
        ref: "scheduleTimes",
        required: true
    }]
})

const userModel = mongoose.model('users', userSchema);
export default userModel