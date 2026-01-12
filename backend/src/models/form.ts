import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: String,
    message: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Request = mongoose.model("Request", formSchema);
