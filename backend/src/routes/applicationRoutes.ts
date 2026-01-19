import express from 'express';
import { submitApplication, uploadResume } from '../controllers/applicationController';

const router = express.Router();

router.post('/', (req, res, next) => {
    uploadResume(req, res, (err) => {
        if (err) {
            console.error('Multer Error:', err);
            return res.status(400).json({ message: 'File upload error', error: err.message });
        }
        next();
    });
}, submitApplication);

export default router;
