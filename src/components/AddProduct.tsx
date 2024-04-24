import React, { useState } from "react";
import { Camera } from "lucide-react";
import Variants from "@/components/Variants";

function AddProduct() {

  const [formData, setFormData] = useState({
    productName: "",
      clerkUserId: "",
      productDescription: "",
      gstinNum: "",
      price: "",
      type:"",
      images: "",
      sizes: "",
      category: "",
  });

  const handleChange = (e: any) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    }

    if (
      e.target.id === "parking" ||
      e.target.id === "furnished" ||
      e.target.id === "offer"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.checked,
      });
    }

    if (
      e.target.type === "number" ||
      e.target.type === "text" ||
      e.target.type === "textarea"
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
  };

  const handleSubmit = async (event:any) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/create-store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error("Failed to create store");
      }
      // Handle successful response
    } catch (error:any) {
      console.error("Error creating store:", error.message);
    }
  };


  return (
    <div className="shadow-md pt-10 pl-6 pr-6">
      <form onSubmit={handleSubmit}>
        <div>
          <h4 className="font-semibold text-lg">Product Information</h4>
          <p className="text-base pb-7 font-normal font-sans text-gray-400">
            Easily input essential details like name, price, and more to
            showcase your product.
          </p>
        </div>
        <div className="pb-5">
          <div className="flex flex-col gap-2 flex-1">
            <label className="">
              Product Name<span className="text-red-600 text-lg"> *</span>
            </label>
            <input
              type="text"
              placeholder="Enter product name"
              className="border p-3 rounded-lg"
              id="name"
              required
            />
          </div>
        </div>
        <div className="pb-5">
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">
              Product Category<span className="text-red-600 text-lg"> *</span>
            </label>
            <input
              type="text"
              placeholder="Enter category name"
              className="border p-3 rounded-lg"
              id="name"
              required
            />
          </div>
        </div>
        <div className="pb-5 flex flex-row gap-5 flex-1">
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">
              Price<span className="text-red-600 text-lg"> *</span>
            </label>
            <input
              type="text"
              placeholder="$ Enter price"
              className="border p-3 rounded-lg"
              id="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">
              Discounted Price<span className="text-red-600 text-lg"> </span>
            </label>
            <input
              type="text"
              placeholder="$ Enter discounted price"
              className="border p-3 rounded-lg"
              id="name"
              required
            />
          </div>
        </div>
        <h4 className="">Product Description</h4>
        <div className="pb-5 flex flex-col gap-2 pt-2 flex-1">
          <textarea
            placeholder="Enter product description"
            className="border p-3 rounded-lg h-60"
            id="name"
            required
          />
        </div>
        <h4 className="">Product Media</h4>
        <p className="text-base pb-5 font-normal font-sans text-gray-400">
          Upload captivating images and videos to make your product stand out.
        </p>
        <div className="pb-5 flex flex-col gap-2 pt-2 flex-1 border border-gray-300 rounded-lg max-w-36">
          <div className="flex justify-center items-center pt-10 pb-5">
            <Camera size={50} />
          </div>
          <p className="flex justify-center items-center text-base font-normal font-sans text-gray-600">
            Upload images
          </p>
        </div>
        <h4 className="pt-5">Add Variant</h4>
        <p className="text-base pb-5 font-normal font-sans text-gray-400">
          Customize variants for size, color, and more to cater to all your
          customers' preferences.
        </p>

        <Variants />
      </form>
    </div>
  );
}

export default AddProduct;
