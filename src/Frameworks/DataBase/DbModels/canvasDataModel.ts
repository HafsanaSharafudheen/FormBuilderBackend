import mongoose, { Schema, Document } from 'mongoose';

const canvasDataSchema = new mongoose.Schema({
  components: { type: Array, required: true },
  ApplicationData: { type: Object, required: false },
  originalFilename: { type: String, required: true }
});





const CanvasDataModel = mongoose.model('CanvasData', canvasDataSchema);

export default CanvasDataModel;