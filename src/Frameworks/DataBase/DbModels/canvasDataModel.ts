import mongoose, { Schema, Document } from "mongoose";

export interface ICanvasData extends Document {
  filePath: string;
  createdAt: Date;
}

const canvasDataSchema = new Schema<ICanvasData>({
  filePath: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CanvasDataModel = mongoose.model<ICanvasData>("CanvasData", canvasDataSchema);

export default CanvasDataModel;
