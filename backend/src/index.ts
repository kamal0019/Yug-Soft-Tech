import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
const xss = require('xss-clean');

import authRoutes from './routes/authRoutes';
import requestRoutes from './routes/requestRoutes';
import formRoutes from './routes/formRoutes';

import newsletterRoutes from './routes/newsletterRoutes';

dotenv.config();

// Connect to Database
if (process.env.NODE_ENV !== 'test') {
    connectDB();
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security Headers
app.use(cors());
app.use(express.json());

// Data Sanitization against NoSQL Query Injection
app.use(mongoSanitize());

// Data Sanitization against XSS
app.use(xss());

// Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(limiter);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/newsletter', newsletterRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Yug Soft-Tech Backend is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
