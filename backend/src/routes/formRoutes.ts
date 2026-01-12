import express, { Request, Response } from 'express';
import { Request as FormModel } from '../models/form';

const router = express.Router();

// FORM SUBMIT API
router.post("/", async (req: Request, res: Response) => {
    try {
        await FormModel.create(req.body);
        res.status(201).json({
            success: true,
            message: "Form data saved successfully",
        });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
