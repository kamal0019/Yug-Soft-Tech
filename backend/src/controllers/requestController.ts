import { Request, Response } from 'express';
import { Request as RequestModel } from '../models/form';

export const createRequest = async (req: Request, res: Response) => {
    try {
        console.log("Received request body:", req.body);
        const { name, role, schoolName, phone, message } = req.body;

        // Basic validation
        if (!name || !role || !schoolName || !phone) {
            return res.status(400).json({ message: 'Please fill in all required fields' });
        }

        const newRequest = new RequestModel({
            name,
            role,
            schoolName,
            phone,
            message,
        });

        console.log("Attempting to save request...");
        const savedRequest = await newRequest.save();
        console.log("Save operation completed. Result:", savedRequest);

        // Immediate verification
        const verify = await RequestModel.findById(savedRequest._id);
        console.log("Immediate verification query result:", verify);

        res.status(201).json({ message: 'Request submitted successfully', request: newRequest });
    } catch (error: any) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
