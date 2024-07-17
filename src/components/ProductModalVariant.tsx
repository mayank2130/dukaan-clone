import React, { useState } from "react";
import { X, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

const ProductVariantModal = ({ isOpen, onClose, onAddVariants }: any) => {
  const [variants, setVariants] = useState([{ name: "", values: [] }]);
  const [currentValue, setCurrentValue] = useState("");

  const addVariant = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVariants([...variants, { name: "", values: [] }]);
  };

  const removeVariant = (index: any, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setVariants(variants.filter((_, i) => i !== index));
  };

  const updateVariantName = (index: any, name: any) => {
    const newVariants = [...variants];
    newVariants[index].name = name;
    setVariants(newVariants);
  };

  const addVariantValue = (variantIndex: any) => {
    if (currentValue.trim()) {
      const newVariants = [...variants];
      newVariants[variantIndex].values.push(currentValue.trim());
      setVariants(newVariants);
      setCurrentValue("");
    }
  };

  const removeVariantValue = (variantIndex: any, valueIndex: any, event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const newVariants = [...variants];
    newVariants[variantIndex].values.splice(valueIndex, 1);
    setVariants(newVariants);
  };

  const handleAddVariants = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddVariants(variants);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add variants</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {variants.map((variant, index) => (
            <div key={index} className="grid gap-2">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Option name"
                  value={variant.name}
                  onChange={(e) => updateVariantName(index, e.target.value)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(event) => removeVariant(index, event)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                {variant.values.map((value, valueIndex) => (
                  <span
                    key={valueIndex}
                    className="bg-gray-100 px-2 py-1 rounded-md flex items-center gap-1"
                  >
                    {value}
                    <X
                      className="h-4 w-4 cursor-pointer"
                      onClick={(event) => removeVariantValue(index, valueIndex, event)}
                    />
                  </span>
                ))}
                <div className="flex gap-2">
                  <Input
                    placeholder="Add value"
                    value={currentValue}
                    onChange={(e) => setCurrentValue(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        addVariantValue(index);
                      }
                    }}
                  />
                  <Button onClick={() => addVariantValue(index)}>Add</Button>
                </div>
              </div>
            </div>
          ))}
          <Button variant="outline" onClick={addVariant}>
            <Plus className="mr-2 h-4 w-4" /> Add another option
          </Button>
        </div>
        <DialogFooter>
          <Button onClick={handleAddVariants}>Add variants</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProductVariantModal;
