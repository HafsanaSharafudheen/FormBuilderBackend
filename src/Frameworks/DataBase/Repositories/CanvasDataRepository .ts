// src/Repositories/canvasRepository.ts

import CanvasDataModel,{ICanvasData} from "../DbModels/canvasDataModel";

export const saveCanvasData = async (filePath: string): Promise<ICanvasData> => {
  try {
    const canvasData = await CanvasDataModel.create({ filePath });
    return canvasData;
  } catch (error) {
    throw new Error("Error saving canvas data to database: " + error);
  }
};
