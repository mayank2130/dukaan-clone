"use client";

import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { settingsItems } from "@/config/Items";

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    clerkUserId: "",
    productDescription: "",
    gstinNum: "",
    price: "",
    discountedPrice: "",
    type: "",
    images: "",
    prodSizes: { small: false, medium: false, large: false },
    color: { red: false, blue: false, green: false },
    variants: {},
    prodCategory: "",
  });

  const handleChange = (e: any) => {
    if (e.target.id === "sale" || e.target.id === "rent") {
      setFormData({
        ...formData,
        type: e.target.id,
      });
    } else if (
      e.target.id === "small" ||
      e.target.id === "medium" ||
      e.target.id === "large" ||
      e.target.id === "red" ||
      e.target.id === "blue" ||
      e.target.id === "green"
    ) {
      if (selectedOptions.includes("prodSizes")) {
        setFormData({
          ...formData,
          prodSizes: {
            ...formData.prodSizes,
            [e.target.id]: e.target.checked,
          },
        });
      }
      if (selectedOptions.includes("Colors")) {
        setFormData({
          ...formData,
          color: {
            ...formData.color,
            [e.target.id]: e.target.checked,
          },
        });
      }
    } else if (
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

  const [options, setOptions] = useState<string[]>(["prodSizes", "Colors"]);
  const [newOption, setNewOption] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [newOptionValue, setNewOptionValue] = useState<string>("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions([...selectedOptions, event.target.value]);
  };

  const handleNewOptionValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewOptionValue(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewOption(event.target.value);
  };

  const handleAddOption = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    if (newOption.trim() !== "" && !options.includes(newOption)) {
      setOptions([...options, newOption.trim()]);
      setFormData({
        ...formData,
        variants: {
          ...formData.variants,
          [newOption.trim()]: newOptionValue, // Update the value for the new option inside variants
        },
      });
      setNewOption("");
      setNewOptionValue(""); // Reset the value for the new option input
    }
  };

  const handleRemoveOption = (
    optionToRemove: any,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault(); // Prevent the default behavior of the button
    setSelectedOptions(
      selectedOptions.filter((option) => option !== optionToRemove)
    );
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      console.log(JSON.stringify(formData));
      const response = await fetch("/api/add-products", {
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
    } catch (error: any) {
      console.error("Error creating store:", error.message);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="mx-auto py-4  sm:px-6 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Store settings</h1>
            <div className="flex items-center space-x-4">
              <Button>Add product</Button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </header>

        <div className="flex h-screen">
          {/* Settings Sidebar */}
          <div className="py-3 sm:pl-2 lg:pl-4 ml-4">
            <div className="bg-white w-64 flex-shrink-0 h-fit overflow-y-auto sticky top-0 rounded-sm">
              <nav className="p-4 ml-2">
                <ul className="space-y-1">
                  {settingsItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/settings?section=${item.section}`}
                        className={`block py-2`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icons}
                          <p className="text-sm font-medium">{item.name}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          <div className="pb-40 flex-1 h-screen overflow-y-auto">
            <div className="py-3 sm:px-6 lg:px-8">
              <div className="bg-white shadow rounded-lg w-full">
                <div className="px-4 py-5 sm:p-6">
                  <form onSubmit={handleSubmit}>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Product Information
                      </h4>
                      <p className="text-base pb-7 font-normal font-sans text-gray-400">
                        Easily input essential details like name, price, and
                        more to showcase your product.
                      </p>
                    </div>
                    <div className="pb-5">
                      <div className="flex flex-col gap-2 flex-1">
                        <label className="">
                          Product Name
                          <span className="text-red-600 text-lg"> *</span>
                        </label>
                        <input
                          type="text"
                          id="productName"
                          required
                          placeholder="Enter product name"
                          className="border p-3 rounded-lg"
                          onChange={handleChange}
                          value={formData.productName}
                        />
                      </div>
                    </div>
                    <div className="pb-5">
                      <div className="flex flex-col gap-2 flex-1">
                        <label className=" ">
                          Product Category
                          <span className="text-red-600 text-lg"> *</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter category name"
                          className="border p-3 rounded-lg"
                          id="prodCategory"
                          required
                          onChange={handleChange}
                          value={formData.prodCategory}
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
                          id="price"
                          required
                          onChange={handleChange}
                          value={formData.price}
                        />
                      </div>
                      <div className="flex flex-col gap-2 flex-1">
                        <label className=" ">
                          Discounted Price
                          <span className="text-red-600 text-lg"> </span>
                        </label>
                        <input
                          type="text"
                          placeholder="$ Enter discounted price"
                          className="border p-3 rounded-lg"
                          id="discountedPrice"
                          required
                          onChange={handleChange}
                          value={formData.discountedPrice}
                        />
                      </div>
                    </div>
                    <h4 className="">Product Description</h4>
                    <div className="pb-5 flex flex-col gap-2 pt-2 flex-1">
                      <textarea
                        placeholder="Enter product description"
                        className="border p-3 rounded-lg h-60"
                        id="productDescription"
                        required
                        onChange={handleChange}
                        value={formData.productDescription}
                      />
                    </div>
                    <h4 className="">Product Media</h4>
                    <p className="text-base pb-5 font-normal font-sans text-gray-400">
                      Upload captivating images and videos to make your product
                      stand out.
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
                      Customize variants for size, color, and more to cater to
                      all your customers' preferences.
                    </p>

                    <div className="mb-20">
                      <div className="pb-3">
                        <select
                          className="border border-gray-300 rounded-lg p-3"
                          value=""
                          onChange={handleOptionChange}
                        >
                          <option value="">Select an option</option>
                          {options.map((option, index) => (
                            <option
                              key={index}
                              value={option}
                              className="gap-4"
                              disabled={selectedOptions.includes(option)}
                            >
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="pb-5 flex flex-row gap-3">
                        <div className="relative max-w-60 mt-3">
                          <input
                            type="text"
                            value={newOption}
                            onChange={handleInputChange}
                            placeholder="Create a custom option"
                            className="border-b-2 border-gray-400 focus:outline-none pb-2"
                          />
                        </div>
                        <button
                          className="bg-green-400 p-3 rounded-lg"
                          onClick={handleAddOption}
                        >
                          Add
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-8 pb-10">
                        {selectedOptions.map((selectedOption, index) => (
                          <div key={index} className="flex flex-col">
                            <h4 className="mb-3">{selectedOption}</h4>
                            <div className="flex gap-2">
                              {selectedOption === "prodSizes" && (
                                <>
                                  <input
                                    type="checkbox"
                                    id="small"
                                    className="w-5"
                                    onChange={handleChange}
                                    checked={formData.prodSizes.small}
                                  />
                                  <label htmlFor="small" className="mr-4">
                                    Small
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    checked={formData.prodSizes.medium}
                                    type="checkbox"
                                    id="medium"
                                    className="w-5"
                                  />
                                  <label htmlFor="medium" className="mr-4">
                                    Medium
                                  </label>
                                  <input
                                    onChange={handleChange}
                                    checked={formData.prodSizes.large}
                                    type="checkbox"
                                    id="large"
                                    className="w-5"
                                  />
                                  <label htmlFor="large">Large</label>
                                </>
                              )}
                              {selectedOption === "Colors" && (
                                <>
                                  <input
                                    type="checkbox"
                                    id="red"
                                    className="w-5"
                                    onChange={handleChange}
                                    checked={formData.color.red}
                                  />
                                  <label htmlFor="red" className="mr-4">
                                    Red
                                  </label>
                                  <input
                                    type="checkbox"
                                    id="blue"
                                    className="w-5"
                                    onChange={handleChange}
                                    checked={formData.color.blue}
                                  />
                                  <label htmlFor="blue" className="mr-4">
                                    Blue
                                  </label>
                                  <input
                                    type="checkbox"
                                    id="green"
                                    className="w-5"
                                    onChange={handleChange}
                                    checked={formData.color.green}
                                  />
                                  <label htmlFor="green">Green</label>
                                </>
                              )}
                              {selectedOption !== "prodSizes" &&
                                selectedOption !== "Colors" && (
                                  <>
                                    <input
                                      type="text"
                                      value={newOptionValue}
                                      onChange={handleNewOptionValueChange}
                                      placeholder="Write the price, length other variants, etc."
                                      className="border-b-2 w-80 border-gray-400 focus:outline-none pb-2"
                                    />
                                  </>
                                )}
                              {/* Add more options here as needed */}
                            </div>
                            <button
                              onClick={(event) =>
                                handleRemoveOption(selectedOption, event)
                              }
                              className="mt-3 px-2 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      onClick={(event) => handleSubmit(event)}
                      className={`${buttonVariants({
                        variant: "default",
                      })} h-10 sm:h-12`}
                    >
                      Get Started
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
