import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    resume: {
        type: String, // Path to the uploaded file
        required: true,
    },
    coverLetter: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export const Application = mongoose.model('Application', applicationSchema);
