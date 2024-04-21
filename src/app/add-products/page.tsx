import React from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Camera } from "lucide-react";
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
    </MaxWidthWrapper>
  );
}

export default page;
