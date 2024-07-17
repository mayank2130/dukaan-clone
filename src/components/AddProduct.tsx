"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Camera, Loader2 } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import {
  Bold,
  Italic,
  Underline,
  Link,
  Image,
  Table,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Code,
  Maximize2,
} from "lucide-react";
import { HfInference, textGeneration } from "@huggingface/inference";
import { Textarea } from "./ui/textarea";

interface Section {
  id: string;
  title: string;
  des: string;
  content: React.ReactNode;
}
const hf = new HfInference("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");

const ProductManagementPage: React.FC = () => {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>({});

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [description, setDescription] = useState("");
  const [formData, setFormData] = useState({
    productName: "",
    clerkUserId: "",
    productDescription: description,
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

  const handleSubmit = async (event: React.FormEvent) => {
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
        throw new Error("Failed to create product");
      }
      // Handle successful response
    } catch (error: any) {
      console.error("Error creating product:", error.message);
    }
  };

  const prompt = `Generate product descriptions based on the product name focus on Features:
  🌟 Classic Design:,\n Color:, \nFitting:,\n Styling:,\nQuality:,\n START CONTEXT BLOCK
  ${formData.productName}
  END OF CONTEXT BLOCK
  AI:`;
  const generateResponse = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await hf.textGeneration({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        inputs: prompt,
        parameters: {
          max_new_tokens: 150,
          temperature: 0.7,
          top_p: 0.95,
          repetition_penalty: 1.2,
        },
      });

      const fullResponse = response.generated_text;
      const aiMessage =
        fullResponse.split("AI:")[1]?.split("Human:")[0]?.trim() ||
        fullResponse;
      const savedMessage = aiMessage.replace(/\./g, ".\n\n");
      setDescription(savedMessage);
      console.log(response);
    } catch (err) {
      console.error("Error generating response:", err);
      setError(
        "An error occurred while generating the response. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };
  const sections: Section[] = [
    {
      id: "product-information",
      title: "Product Information",
      des: "Easily input essential details like name, price, and more to showcase your product.",
      content: (
        <div>
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-50 flex items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
            </div>
          )}
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
          <h4 className="text-sm pb-1">Product Description</h4>
          <p className="text-xs text-muted-foreground font-normal">
            Get high quality product descriptions within seconds!{" "}
            <button
              className="bg-none underline text-blue-600"
              onClick={(event) => generateResponse(event)}
            >
              Get description.
            </button>
          </p>
          <div className="pb-5 flex flex-col gap-2 pt-2 flex-1">
            {/* <textarea
              placeholder="Enter product description"
              className="border p-3 rounded-lg h-60"
              id="productDescription"
              required
              onChange={handleChange}
              value={formData.productDescription}
            /> */}
            <div className="flex-1">
              <div className="border rounded-lg shadow-sm">
                <div className="flex items-center space-x-2 p-2 border-b">
                  <select className="border rounded px-4 py-1 bg-gray-100">
                    <option className="text-sm">Paragraph</option>
                  </select>
                  <Button variant="ghost" size="icon">
                    <Bold size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Italic size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Underline size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Link size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Image size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Table size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <AlignLeft size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <AlignCenter size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <AlignRight size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <List size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ListOrdered size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Quote size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Code size={20} />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Maximize2 size={20} />
                  </Button>
                </div>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full h-96 p-4 border-none focus:ring-0"
                  placeholder="Enter your privacy policy here..."
                />
              </div>
            </div>
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
          <div className="flex justify-center items-center">
            <Button className={buttonVariants({ variant: "outline" })}>
              <p className="text-muted-foreground">+ Add variant</p>
            </Button>
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
                <form onSubmit={handleSubmit}>
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
