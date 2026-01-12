import express from 'express';
import { z } from 'zod';
import { validate } from '../middleware/validate';
import { createRequest } from '../controllers/requestController';

const router = express.Router();

const requestSchema = z.object({
    body: z.object({
        name: z.string().min(2, 'Name is too short'),
        role: z.string().min(2, 'Role is too short'),
        schoolName: z.string().min(2, 'School Name is too short'),
        phone: z.string().min(10, 'Phone number must be at least 10 digits'),
        message: z.string().optional(),
    }),
});

router.post('/', validate(requestSchema), createRequest);

export default router;
