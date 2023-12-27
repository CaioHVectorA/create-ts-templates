import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export const errorHandling = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'Error',
            message: err.message
        })
    }
    return res.status(500).json({
        status: "Error",
        message: `Internal Server Error - ${err.message}`
    })
}