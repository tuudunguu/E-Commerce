import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './database';
import { authRouter } from './routes';
import { authMiddleware } from './middlewares/auth.middlewares';
import * as dotenv from 'dotenv';
import { userRouter } from './routes/Me.router';
import { categoryRouter } from './routes/category.router';
import { productRouter } from './routes/product.router';
import multer, { memoryStorage } from 'multer';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config(); // Load environment variables from .env file

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware); // Use authentication middleware

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// Multer storage configuration for memory storage
const storage = memoryStorage();
const upload = multer({ storage });

// Function to upload a file to Cloudinary
async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });
  return res;
}

// Route to handle image upload
app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    // Convert file buffer to base64
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    // Upload image to Cloudinary
    const cloudinaryResponse = await handleUpload(dataURI);

    // Send back the Cloudinary response (including the image URL)
    res.json(cloudinaryResponse);
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).send('Failed to upload image.');
  }
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
