import mongoose from "mongoose";

const scheduleTimeSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
    meetingId: {
        type: String,
        required: true,
    },
    members: [{
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true,
    }],
    
},
    { timestamps: true }
);
const scheduleTime = mongoose.model("scheduleTimes", scheduleTimeSchema)
export default scheduleTime;