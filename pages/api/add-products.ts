// pages/api/create-store.ts

import { NextApiRequest, NextApiResponse } from "next";
import { connectToDb } from "@/lib/utils";
import { Product } from "@/lib/models/product.model"; // Import your Store model
import { ProdType } from "@/lib/models/product.model";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectToDb(); // Connect to MongoDB
      const formData: ProdType = req.body; // Assuming req.body contains the store data
      // Create a new store instance
      const newProduct = new Product(formData);
      // Save the new store to the database
      await newProduct.save();
      res.status(201).json({ message: "Store created successfully", formData });
    } catch (error) {
      console.error("Error creating store:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
