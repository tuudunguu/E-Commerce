import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  images: [String],

  price: { type: Number, required: true },

  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },

  sizes: [
    {
      size: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  quantity: {
    type: Number,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export const ProductModel = model('Product', productSchema);
