import mongoose, { Document } from "mongoose";

export interface ProdType extends Document {
  clerkUserId: string;
  productName: string;
  productDescription: string;
  price: string;
  gstinNum: string;
  sizes: string[];
  images: string[];
  category: string[];
  createdAt: Date;
}

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  gstinNum: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  sizes: {
    type: [{ type: String }],
    required: false,
  },
  images: {
    type: [
      {
        type: String,
        unique: true, // Ensure each URI is unique
      },
    ], // Assuming images is an array of strings
    required: false,
  },
  category: {
    type: String, 
    enum: ["Tops", "Saree", "Footwear"],
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// const Product = mongoose.model<ProdType>("Product", productSchema);
export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);
