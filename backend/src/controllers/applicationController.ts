import { Request, Response } from 'express';
import { Application } from '../models/application';
import multer from 'multer';
import path from 'path';

// Configure Multer for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/resumes/'); // Ensure this directory exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'application/pdf' || file.mimetype === 'application/msword' || file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            cb(null, true);
        } else {
            cb(new Error('Only .pdf, .doc, and .docx formats allowed!'));
        }
    }
});

// Middleware for uploading resume
export const uploadResume = upload.single('resume');

export const submitApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, phone, position, coverLetter } = req.body;
        const resumePath = req.file ? req.file.path : null;

        if (!resumePath) {
            res.status(400).json({ message: 'Resume file is required' });
            return;
        }

        const newApplication = new Application({
            name,
            email,
            phone,
            position,
            resume: resumePath,
            coverLetter
        });

        await newApplication.save();

        res.status(201).json({ message: 'Application submitted successfully', data: newApplication });
    } catch (error: any) {
        res.status(500).json({ message: 'Error submitting application', error: error.message });
    }
};
