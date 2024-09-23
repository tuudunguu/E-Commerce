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

dotenv.config();

connectToDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authMiddleware);

app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = memoryStorage();
const upload = multer({ storage });

async function handleUpload(file: string) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: 'auto',
  });
  return res;
}

app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  try {
    const b64 = Buffer.from(req.file.buffer).toString('base64');
    const dataURI = `data:${req.file.mimetype};base64,${b64}`;

    const cloudinaryResponse = await handleUpload(dataURI);

    res.json(cloudinaryResponse);
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    res.status(500).send('Failed to upload image.');
  }
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});
