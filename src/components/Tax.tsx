import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

const Tax = () => {
  const [isGSTEnabled, setIsGSTEnabled] = useState(false);
  const [priceInclusion, setPriceInclusion] = useState("inclusive");
  const [gstNumber, setGstNumber] = useState("");
  const [gstPercentage, setGstPercentage] = useState("");

  return (
    <>
      <div className="p-6 bg-white rounded-md shadow">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-medium mb-2">GST</h2>
            <p className="text-sm text-gray-500">
              Ensure compliance and transparent pricing.
            </p>
          </div>
          <Switch checked={isGSTEnabled} onCheckedChange={setIsGSTEnabled} />
        </div>

        {isGSTEnabled ? (
          <div className="space-y-6 mt-7">
            <div>
              <p className="mb-4 text-sm">All product prices are</p>
              <RadioGroup
                value={priceInclusion}
                onValueChange={setPriceInclusion}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="inclusive" id="inclusive" />
                  <Label htmlFor="inclusive" className="text-base font-normal">
                    Inclusive of tax
                  </Label>
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exclusive" id="exclusive" />
                  <Label htmlFor="exclusive" className="text-base font-normal">
                    Exclusive of tax
                  </Label>
                  <InfoIcon className="h-4 w-4 text-gray-400" />
                </div>
              </RadioGroup>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label
                  htmlFor="gst-number"
                  className="block mb-1 text-sm text-muted-foreground font-normal"
                >
                  GST Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="gst-number"
                  placeholder="Enter GST number"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="pr-8 h-12"
                  maxLength={15}
                  minLength={15}
                />
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  {gstPercentage} % GST will be included in the product price.{" "}
                </p>
              </div>
              <div>
                <Label
                  htmlFor="gst-percentage"
                  className="block mb-1 text-sm text-muted-foreground font-normal"
                >
                  GST Percentage <span className="text-red-500 pr-2">*</span>
                  <InfoIcon className="inline-block h-4 w-4 text-gray-400" />
                </Label>
                <div className="relative">
                  <Input
                    id="gst-percentage"
                    placeholder="Charge"
                    value={gstPercentage}
                    onChange={(e) => setGstPercentage(e.target.value)}
                    className="pr-8 h-12"
                    maxLength={2}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    %
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-2 font-medium">
                  To know more about GST calculation,{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Click here
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {isGSTEnabled ? (
        <div className="flex justify-end mt-7">
          <Button>Save</Button>
        </div>
      ) : null}
    </>
  );
};

export default Tax;
