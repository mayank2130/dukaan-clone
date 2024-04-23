import mongoose, { Document, Model, Schema } from "mongoose";

export type GeoLocation = {
  latitude: number;
  longitude: number;
};
export interface IStore extends Document {
  clerkUserId: string;
  shopName: string;
  gstinNum: string;
  openingDate: string;
  openCloseTime: string;
  shopAddress: string;
  shopGeoAddress: GeoLocation;
  images: string[];
  category: string[];
  ownerName: string;
  phoneNo: string;
  createdAt: Date;
}

const storeSchema = new Schema<IStore>({
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  gstinNum: {
    type: String,
    required: true,
  },
  openingDate: {
    type: String,
    required: true,
  },
  openCloseTime: {
    type: String,
    required: false,
  },
  shopAddress: {
    type: String,
    required: true,
  },
  shopGeoAddress: {
    type: {
      latitude: Number,
      longitude: Number,
    },
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
    type: [], // Assuming category is an array of strings
    required: false,
  },
  ownerName: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const Store = mongoose.models?.Store || mongoose.model("Store", storeSchema);
