"use client";
import React, { useState } from "react";
import {
  Search,
  Plus,
  HelpCircle,
  Bell,
  Menu,
  ArrowUpDown,
  Filter,
  Eye,
  Share2,
  MoreVertical,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  inventory: string;
  status: "active" | "inactive";
  image: string;
}

const ProductManagementUI: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Short sleeve t-shirt with emb text",
      category: "Men t-shirt",
      price: 2199,
      originalPrice: 2299,
      inventory: "-",
      status: "active",
      image: "/api/placeholder/40/40",
    },
  ]);

  const router = useRouter();
  const navigate = () => {
    router.push("/add-products");
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All products</h1>
        <div className="flex items-center space-x-2">
          <HelpCircle size={24} />
          <Bell size={24} />
          <Menu size={24} />
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 border rounded-md"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
          onClick={navigate}
        >
          <Plus size={20} className="mr-2" />
          Add new product
        </button>
      </div>

      <div className="flex justify-end space-x-4 mb-4">
        <button className="flex items-center">
          <ArrowUpDown size={20} className="mr-1" /> Sort by
        </button>
        <button className="flex items-center">
          <Filter size={20} className="mr-1" /> Filter
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">
              <input type="checkbox" />
            </th>
            <th className="p-2 text-left">Product</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Inventory</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b">
              <td className="p-2">
                <input type="checkbox" />
              </td>
              <td className="p-2">
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-10 h-10 mr-2"
                  />
                  <div>
                    <div className="font-medium">{product.name}</div>
                    <div className="text-sm text-gray-500">
                      {product.category}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-2">
                ₹{product.price}{" "}
                {product.originalPrice && (
                  <span className="line-through text-gray-500">
                    ₹{product.originalPrice}
                  </span>
                )}
              </td>
              <td className="p-2">{product.inventory}</td>
              <td className="p-2">
                <div className="flex items-center">
                  <div
                    className={`w-4 h-4 rounded-full mr-2 ${
                      product.status === "active"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  ></div>
                  {product.status === "active" ? "Active" : "Inactive"}
                </div>
              </td>
              <td className="p-2">
                <div className="flex space-x-2">
                  <Eye size={20} />
                  <Share2 size={20} />
                  <MoreVertical size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementUI;
