"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Camera } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
  des: string;
  content: React.ReactNode;
}

const ProductManagementPage: React.FC = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});

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

  const [options, setOptions] = useState<string[]>(["prodSizes", "Colors"]);
  const [newOption, setNewOption] = useState<string>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [newOptionValue, setNewOptionValue] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (id === "small" || id === "medium" || id === "large") {
        setFormData((prev) => ({
          ...prev,
          prodSizes: { ...prev.prodSizes, [id]: checked },
        }));
      } else if (id === "red" || id === "blue" || id === "green") {
        setFormData((prev) => ({
          ...prev,
          color: { ...prev.color, [id]: checked },
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOptions((prev) => [...prev, event.target.value]);
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
    event.preventDefault();
    if (newOption.trim() !== "" && !options.includes(newOption)) {
      setOptions((prev) => [...prev, newOption.trim()]);
      setFormData((prev) => ({
        ...prev,
        variants: {
          ...prev.variants,
          [newOption.trim()]: newOptionValue,
        },
      }));
      setNewOption("");
      setNewOptionValue("");
    }
  };

  const handleRemoveOption = (
    optionToRemove: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    setSelectedOptions((prev) =>
      prev.filter((option) => option !== optionToRemove)
    );
  };

  // const handleSubmit = async (event: React.FormEvent) => {
  //   event.preventDefault();
  //   try {
  //     console.log(JSON.stringify(formData));
  //     const response = await fetch("/api/add-products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to create product");
  //     }
  //     // Handle successful response
  //   } catch (error: any) {
  //     console.error("Error creating product:", error.message);
  //   }
  // };

  const sections: Section[] = [
    {
      id: "product-information",
      title: "Product Information",
      des: "Easily input essential details like name, price, and more to showcase your product.",
      content: (
        <div>
          <div className="pb-5">
            <div className="flex flex-col gap-2 flex-1">
              <label className="text-sm">
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
              <label className="text-sm">
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
              <label className="text-sm">
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
              <label className="text-sm">
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
          <h4 className="text-sm">Product Description</h4>
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
        </div>
      ),
    },
    {
      id: "product-media",
      title: "Product Media",
      des: "Upload captivating images and videos to make your product stand out.",
      content: (
        <div>
          <div className="pb-5 flex flex-col gap-2 pt-2 flex-1 border border-gray-300 rounded-sm max-w-28 max-h-28">
            <div className="flex justify-center items-center pt-4 pb-2">
              <Camera size={40} />
            </div>
            <p className="flex justify-center items-center text-xs font-medium text-gray-600">
              Upload images
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "inventory",
      title: "Inventory",
      des: "Manage your stock seamlessly to keep up with customer demand.",
      content: (
        <div>
          <div className="flex space-x-4 mb-4">
            <div className="flex-1">
              <label className="block text-sm font-normal text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="text"
                placeholder="Eg. 10"
                className="w-full p-2 border rounded-md"
                disabled
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-normal text-gray-700 mb-1">
                SKU ID
              </label>
              <input
                type="text"
                placeholder="Eg. 1000000001"
                className="w-full p-2 border rounded-md"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Set up your warehouse first to add product quantity.{" "}
            <a href="#" className="text-blue-600 underline">
              Set up
            </a>
          </p>
        </div>
      ),
    },
    {
      id: "shipping-tax",
      title: "Shipping & Tax",
      des: "Configure shipping options and tax rules to streamline your sales process.",
      content: (
        <div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shipment Weight
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Eg. 1.2"
                className="flex-1 p-2 border rounded-l-md"
              />
              <select className="p-2 border border-l-0 rounded-r-md bg-white">
                <option>kg</option>
                <option>lb</option>
              </select>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Product weight will be used to calculate delivery charge for
              Dukaan Delivery.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Set up
              </a>
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              HSN Code
            </label>
            <input
              type="text"
              placeholder="Enter the HSN code"
              className="w-full p-2 border rounded-md"
            />
            <p className="text-sm text-gray-600 mt-1">
              Not sure about the code?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Search here
              </a>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              GST
            </label>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter the GST percentage"
                className="flex-1 p-2 border rounded-l-md"
              />
              <span className="p-2 border border-l-0 rounded-r-md bg-gray-100">
                %
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Setup GST in store settings to enter GST percentage.{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Set up GST
              </a>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "variants",
      title: "Variants",
      des: `Customize variants for size, color, and more to cater to all your
      customers' preferences. `,
      content: (
        <div>
          <h4 className="pt-5">Add Variant</h4>
          <p className="text-base pb-5 font-normal font-sans text-gray-400">
            Customize variants for size, color, and more to cater to all your
            customers' preferences.
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
        </div>
      ),
    },
  ];

  useEffect(() => {
    sections.forEach((section) => {
      sectionRefs.current[section.id] = React.createRef();
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const sectionRef = sectionRefs.current[sectionId];
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSection = (sectionId: string) => {
    if (sectionId !== "product-information" && sectionId !== "product-media") {
      setOpenSections((prev) => {
        const newOpenSections = new Set(prev);
        if (newOpenSections.has(sectionId)) {
          newOpenSections.delete(sectionId);
        } else {
          newOpenSections.add(sectionId);
        }
        return newOpenSections;
      });
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
          <div className="py-3 sm:pl-2 lg:pl-4 ml-4">
            <div className="bg-white w-64 flex-shrink-0 h-fit overflow-y-auto sticky top-0 rounded-sm">
              <nav className="p-4 ml-2">
                <p className="text-sm font-medium pb-5">Quick Navigation</p>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id} className="mb-2">
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`block py-1 bg-none border-b w-full mb-3 `}
                      >
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-normal text-muted-foreground hover:text-blue-600">
                            {section.title}
                          </p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex-1 h-screen overflow-y-auto pb-20">
            <div className="py-3 sm:px-6 lg:px-8">
              <div className="rounded-sm w-full">
                <form>
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      ref={sectionRefs.current[section.id]}
                      className="mb-8 bg-white rounded-sm shadow-sm overflow-hidden"
                    >
                      {section.id === "product-information" ||
                      section.id === "product-media" ? (
                        <div className="p-4 pl-5">
                          <p className="text-base font-medium">
                            {section.title}
                          </p>
                          <p className="text-sm text-muted-foreground mb-4">
                            {section.des}
                          </p>
                          {section.content}
                        </div>
                      ) : (
                        <>
                          <div
                            className="p-4 cursor-pointer flex justify-between items-center"
                            onClick={() => toggleSection(section.id)}
                          >
                            <div className="pl-1">
                              <p className="text-base font-medium">
                                {section.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {section.des}
                              </p>
                            </div>
                            {openSections.has(section.id) ? (
                              <ChevronUp className="w-6 h-6 transition-transform duration-300" />
                            ) : (
                              <ChevronDown className="w-6 h-6 transition-transform duration-300" />
                            )}
                          </div>

                          <div
                            className={`transition-all duration-300 ease-in-out ${
                              openSections.has(section.id)
                                ? "max-h-[1000px] opacity-100"
                                : "max-h-0 opacity-0"
                            } overflow-hidden`}
                          >
                            <div className="relative p-5 before:content-[''] before:absolute before:top-0 before:left-10 before:right-10 before:h-px before:bg-slate-200">
                              {section.content}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                  <Button
                    type="submit"
                    className={`${buttonVariants({
                      variant: "default",
                    })} h-10 sm:h-12`}
                  >
                    Save Product
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;
