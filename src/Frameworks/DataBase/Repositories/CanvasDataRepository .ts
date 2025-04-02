import CanvasDataModel from "../DbModels/canvasDataModel";

export class CanvasDataRepository {
    // Save canvas data to the database
    public async saveCanvasData(data: any): Promise<any> {
        try {
            const newCanvasData = new CanvasDataModel({
                components: data.components || [],
                ApplicationData: data.ApplicationData || {},
                originalFilename: data.originalFilename,
            });

            // Save the data to MongoDB
            return await newCanvasData.save();
        } catch (error) {
            throw new Error('Error saving canvas data to database');
        }
    }
}
