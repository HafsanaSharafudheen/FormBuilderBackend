// src/Controllers/uploadController.ts
import { Request, Response } from 'express';
import { CanvasDataUseCase } from '../../ApplicationLayer/UserCases/form/saveFromData';

export const uploadComponent = async (req: Request, res: Response): Promise<void> => {
    try {
        const jsonData = req.body; 

        if (!jsonData || !jsonData.components || !jsonData.ApplicationData) {
            console.log('Invalid JSON data');
            res.status(400).json({ message: "Invalid JSON data in request body" });
            return;
        }

        const dataToSave = {
            components: jsonData.components,
            ApplicationData: jsonData.ApplicationData,
            originalFilename: jsonData.originalFilename || 'uploaded_via_json_body', 
        };

        const canvasDataUseCase = new CanvasDataUseCase();
        const newCanvasData = await canvasDataUseCase.storeCanvasData(dataToSave);

        res.status(200).json({
            message: "Canvas data stored successfully from JSON body",
            filename: dataToSave.originalFilename,
            databaseId: newCanvasData._id,
        });

    } catch (error: any) {
        console.error("Error processing JSON body:", error);
        res.status(500).json({ status: false, error: error.message || "Failed to process JSON body" });
    }
};