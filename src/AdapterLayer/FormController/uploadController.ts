// src/Controllers/uploadController.ts
import { NextFunction, Request, Response } from 'express';
import { uploadComponentUseCase } from '../../ApplicationLayer/UserCases/uploadComponentUseCase';
import fs from "fs";
import path from "path";
export const uploadComponent = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.file) {
            res.status(400).json({ message: "No file uploaded" });
            return;
        }

        const filePath = req.file.path;

        // Save file path to MongoDB via use case
        const canvasData = await uploadComponentUseCase(filePath);

        res.status(200).json({
            message: "File uploaded successfully",
            filePath,
            canvasData,});
    } catch (error: any) {
        console.error("Error uploading file:", error);
        res.status(500).json({ status: false, error: error.message || "File upload failed" });
    }
};




  
// Generate a unique file name using timestamp
const generateUniqueFileName = (baseName: string): string => {
    const now = new Date();
    const dateStr = now.toISOString().replace(/[:.]/g, "-");
    return `${baseName}_${dateStr}.json`;
};

export const saveJsonToFile = async (req: Request, res: any, next: NextFunction): Promise<void> => {
    try {
        const jsonData = req.body;

        if (!jsonData || Object.keys(jsonData).length === 0) {
            return res.status(400).json({ message: "No JSON data provided" });
        }

        // Generate a unique file name
        const fileName = `data_${Date.now()}.json`;
        const uploadDir = path.join(process.cwd(), "src", "public", "uploads");

        // Ensure the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Save the JSON data to a file
        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf8");
        const canvasData = await uploadComponentUseCase(filePath);

        res.status(200).json({
            message: "File uploaded successfully",
            filePath,
            });
        
        
    } catch (error) {
        next(error);
    }
};