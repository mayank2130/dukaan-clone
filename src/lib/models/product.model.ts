import mongoose, { Document } from "mongoose";

export interface ProdType extends Document {
  clerkUserId: string;
  productName: string;
  productDescription: string;
  price: string;
  gstinNum: string;
  sizes: string[];
  images: string[];
  category: string;
  createdAt: Date;
}

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    // required: true,
  },
  clerkUserId: {
    type: String,
    // required: true,
    unique: true,
  },
  productDescription: {
    type: String,
    // required: true,
  },
  gstinNum: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  discountedPrice: {
    type: String,
    // required: true,
  },
  prodSizes: {
    type: Object, // Change this to Object to match the structure of formData.sizes
    required: false,
  },
  images: {
    type: [String], // Assuming images is an array of strings
    required: false,
  },
  prodCategory: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// const Product = mongoose.model<ProdType>("Product", productSchema);
export const Product =
  mongoose.models?.Product || mongoose.model("Product", productSchema);
