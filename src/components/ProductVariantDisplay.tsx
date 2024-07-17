import React, { useState } from "react";
import { ChevronDown, Camera, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductVariantModal from "./ProductModalVariant";

const ProductVariantsDisplay = ({ variants, setVariants }) => {
  const [expandedVariant, setExpandedVariant] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = (index, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setExpandedVariant(expandedVariant === index ? null : index);
  };

  const deleteVariant = (index, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newVariants = variants.filter((_, i) => i !== index);
    setVariants(newVariants);
  };

  const handleAddVariants = (
    newVariants,
  ) => {
    setVariants([...variants, ...newVariants]);
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold">Variants</h2>
        <p className="text-sm text-gray-500">
          Customize variants for size, color, and more to cater to all your
          customers&apos; preferences.
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-2">Size</h3>
        <div className="flex flex-wrap gap-2">
          {variants.map((variant, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {variant.size}
            </span>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        className="w-full justify-start"
        onClick={(event) => {
          event.preventDefault();
          setIsModalOpen(true);
        }}
      >
        Edit or add variants
      </Button>

      <p className="text-sm text-gray-500">
        Set up your warehouse first to add product quantity.{" "}
        <a href="#" className="text-blue-500">
          Set up
        </a>
      </p>

      <div className="overflow-x-auto flex">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left">Variant</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Discounted price</th>
              <th className="px-4 py-2 text-left">SKU ID</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Weight</th>
              <th className="px-4 py-2 text-left">GTIN</th>
              <th className="px-4 py-2 text-left">Google product category</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {variants.map((variant, index) => (
              <React.Fragment key={index}>
                <tr className="border-t">
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-10 w-10"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                      <div>
                        <p>{variant.size}</p>
                        <p className="text-sm text-green-500">In stock</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <Input placeholder="Eg. 99" />
                  </td>
                  <td className="px-4 py-2">
                    <Input placeholder="Eg. 99" />
                  </td>
                  <td className="px-4 py-2">
                    <Input placeholder="Eg. 1000000001" />
                  </td>
                  <td className="px-4 py-2">
                    <Input placeholder="Eg. 10" />
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <Input placeholder="Eg. 1.2" className="w-20" />
                      <Select defaultValue="kg">
                        <SelectTrigger className="w-20">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">kg</SelectItem>
                          <SelectItem value="g">g</SelectItem>
                          <SelectItem value="lb">lb</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <Input placeholder="Enter GTIN" />
                  </td>
                  <td className="px-4 py-2">
                    <Input placeholder="Enter Category" />
                  </td>
                  <td className="px-4 py-2">
                    <Button
                      variant="ghost"
                      onClick={(event) => deleteVariant(index, event)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td colSpan="9" className="px-4 py-2">
                    <Button
                      variant="ghost"
                      onClick={(event) => toggleExpand(index, event)}
                      className="w-full flex items-center justify-center"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          expandedVariant === index
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    </Button>
                  </td>
                </tr>
                {expandedVariant === index && (
                  <tr>
                    <td colSpan="9" className="px-4 py-2 bg-gray-50">
                      <p>Additional variant details can be displayed here.</p>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <ProductVariantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddVariants={(newVariants, event) => handleAddVariants(newVariants, event)}
      />
    </div>
  );
};

export default ProductVariantsDisplay;
