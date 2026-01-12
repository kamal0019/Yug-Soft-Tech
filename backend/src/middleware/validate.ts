import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod';

export const validate = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            return res.status(400).json({
                message: 'Validation Error',
                errors: error.issues.map((issue) => ({ // Changed .errors to .issues
                    field: issue.path.join('.'),
                    message: issue.message
                }))
            });
        }
        next(error);
    }
};
