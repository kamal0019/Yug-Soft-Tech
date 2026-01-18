import express from 'express';
import { submitApplication, uploadResume } from '../controllers/applicationController';

const router = express.Router();

router.post('/', uploadResume, submitApplication);

export default router;
