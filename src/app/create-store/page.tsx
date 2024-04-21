import React from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Camera, Video } from "lucide-react";
import Variants from "@/components/Variants";

export const metadata: Metadata = {
  title: "Add new product",
};

function page() {
  return (
    <MaxWidthWrapper>
      <div className="shadow-md pt-10 pl-6 pr-6">
        <form>
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
                id="name"
                required
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
                id="name"
                required
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
                id="name"
                required
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
                id="name"
                required
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
              id="name"
              required
            />
          </div>
          <h4 className="">Shop Description</h4>
          <div className="pb-5 flex flex-col gap-2 pt-2 flex-1">
            <textarea
              placeholder="Enter what the shop sells or provides !"
              className="border p-3 rounded-lg h-60"
              id="name"
              required
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
          </div>
          {/* <h4 className="pt-5">Add Variant</h4>
          <p className="text-base pb-5 font-normal font-sans text-gray-400">
            Customize variants for size, color, and more to cater to all your
            customers' preferences.
          </p> */}

          {/* <Variants /> */}
        </form>
      </div>
    </MaxWidthWrapper>
  );
}

export default page;
