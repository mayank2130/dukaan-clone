"use client";

import React, { useState } from "react";
import { Camera, Video } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

function CreateStore() {
  const [formData, setFormData] = useState({
    clerkUserId: "clerkId",
    shopName: "",
    gstinNum: "",
    type: "",
    shopDescription: "",
    operatingSince: "",
    images: "",
    shopAddress: "",
    shopGeoAddress: {
      latitude: "",
      longitude: "",
    },
    category: "",
    ownerName: "",
    phoneNo: "",
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
          <h4 className="font-semibold text-lg">Shop Information</h4>
          <p className="text-base pb-7 font-normal font-sans text-gray-400">
            Easily input essential details like name, price, and more to
            showcase your product.
          </p>
        </div>
        <div className="pb-5">
          <div className="flex flex-col gap-2 flex-1">
            <label className="">
              Shop Name<span className="text-red-600 text-lg"> *</span>
            </label>
            <input
              type="text"
              placeholder="Enter shop name"
              className="border p-3 rounded-lg"
              id="shopName"
              //   required
              onChange={handleChange}
              value={formData.shopName}
            />
          </div>
        </div>
        <div className="pb-5">
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">
              Category<span className="text-red-600 text-lg"> *</span>
            </label>
            <input
              type="text"
              placeholder="Enter category name, example - Shoes, Clothing, Stationary, Service (barber, saloon)"
              className="border p-3 rounded-lg"
              id="category"
              //   required
              onChange={handleChange}
              value={formData.category}
            />
          </div>
        </div>
        <div className="pb-5 flex flex-row gap-5 flex-1">
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">
              Owner Name<span className="text-red-600 text-lg"> *</span>
            </label>
            <input
              type="text"
              placeholder="Enter owner name"
              className="border p-3 rounded-lg"
              id="ownerName"
              //   required
              onChange={handleChange}
              value={formData.ownerName}
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className=" ">
              Operating Since<span className="text-red-600 text-lg"> </span>
            </label>
            <input
              type="text"
              placeholder="Example: 7 years or 6 months"
              className="border p-3 rounded-lg"
              id="operatingSince"
              //   required
              onChange={handleChange}
              value={formData.operatingSince}
            />
          </div>
        </div>
        <div className="pb-5 flex flex-col gap-2 flex-1">
          <label className=" ">
            Shop Address<span className="text-red-600 text-lg"> *</span>
          </label>
          <input
            type="text"
            placeholder="Enter shop address"
            className="border p-3 rounded-lg"
            id="shopAddress"
            // required
            onChange={handleChange}
            value={formData.shopAddress}
          />
        </div>
        <h4 className="">Shop Description</h4>
        <div className="pb-5 flex flex-col gap-2 pt-2 flex-1">
          <textarea
            placeholder="Enter what the shop sells or provides !"
            className="border p-3 rounded-lg h-60"
            id="shopDescription"
            // required
            onChange={handleChange}
            value={formData.shopDescription}
          />
        </div>
        <h4 className="">Shop Media</h4>
        <p className="text-base pb-5 font-normal font-sans text-gray-400">
          Upload captivating images and videos to make your shop stand out.
        </p>
        <div className="flex-1 flex flex-row gap-10 mb-60 pb-10">
          <div className="pb-5 flex flex-col gap-2 pt-2 flex-1 border border-gray-300 rounded-lg max-w-36">
            <div className="flex justify-center items-center pt-10 pb-5">
              <Camera size={50} />
            </div>
            <p className="flex justify-center items-center text-base font-normal font-sans text-gray-600">
              Upload images
            </p>
          </div>
          <div className="pb-5 flex flex-col gap-2 pt-2 flex-1 border border-gray-300 rounded-lg max-w-36">
            <div className="flex justify-center items-center pt-10 pb-5">
              <Video size={50} />
            </div>
            <p className="flex justify-center items-center text-base font-normal font-sans text-gray-600">
              Upload videos
            </p>
          </div>
          <Button
            onClick={(event) => handleSubmit(event)}
            className={`${buttonVariants({
              variant: "default",
            })} h-10 sm:h-12`}
          >
            Get Started
          </Button>
        </div>
        {/* <h4 className="pt-5">Add Variant</h4>
          <p className="text-base pb-5 font-normal font-sans text-gray-400">
            Customize variants for size, color, and more to cater to all your
            customers' preferences.
          </p> */}

        {/* <Variants /> */}
      </form>
    </div>
  );
}

export default CreateStore;
