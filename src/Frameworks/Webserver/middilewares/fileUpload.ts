// src/Middlewares/fileUpload.ts
import multer, { StorageEngine } from "multer";
import fs from "fs";
import path from "path";

// Generate a unique file name using the current date and time
const generateUniqueFileName = (originalName: string): string => {
  const now = new Date();
  const dateStr = now.toISOString().replace(/[:.]/g, "-");
  const ext = path.extname(originalName); // Get the file extension
  const baseName = path.basename(originalName, ext); // Get the base name without extension
  return `${baseName}_${dateStr}${ext}`; // Combine base name with timestamp and extension
};

const storage: StorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    // Use process.cwd() to get the root of the project
    const uploadDir = path.join(process.cwd(), 'src', 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const fileName = generateUniqueFileName(file.originalname);
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default upload;
