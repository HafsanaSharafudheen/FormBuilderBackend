// src/UseCases/uploadComponentUseCase.ts

import { ICanvasData } from "../../Frameworks/DataBase/DbModels/canvasDataModel";
import { saveCanvasData } from "../../Frameworks/DataBase/Repositories/CanvasDataRepository ";


export const uploadComponentUseCase = async (filePath: string): Promise<ICanvasData> => {
  try {
    return await saveCanvasData(filePath);
  } catch (error) {
    throw new Error("Error in upload component use case: " + error);
  }
};
