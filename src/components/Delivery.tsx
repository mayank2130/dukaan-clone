import React, { useState } from "react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

interface PriceRange {
  start: number;
  end: number | string;
  charge: string;
}
const ShippingSettings = () => {
  const [deliveryChargeEnabled, setDeliveryChargeEnabled] = useState(true);
  const [deliveryChargeType, setDeliveryChargeType] = useState("fixed");
  const [deliveryCharge, setDeliveryCharge] = useState("");
  const [freeDeliveryAbove, setFreeDeliveryAbove] = useState("");
  const [averageDeliveryTime, setAverageDeliveryTime] = useState("3-5 days");
  const [priceRanges, setPriceRanges] = useState<PriceRange[]>([
    { start: 0, end: 500, charge: "" },
    { start: 500, end: "& above", charge: "" },
    // { start: 1000, end: 1500, charge: "" },
    // { start: 1500, end: "& above", charge: "" },
  ]);

  const deliveryTimeOptions = [
    "1-2 days",
    "2-3 days",
    "3-5 days",
    "5-7 days",
    "7-10 days",
    "10-14 days",
    "14-21 days",
    "21-30 days",
  ];
  const handleChargeChange = (index: number, value: string) => {
    const newRanges = [...priceRanges];
    newRanges[index].charge = value;
    setPriceRanges(newRanges);
  };

  const handleRemoveRange = (index: number) => {
    const newRanges = priceRanges.filter((_, i) => i !== index);
    setPriceRanges(newRanges);
  };

  const handleAddRange = () => {
    const lastRange = priceRanges[priceRanges.length - 1];
    const newStart =
      typeof lastRange.end === "number"
        ? lastRange.end
        : (typeof lastRange.start === "number" ? lastRange.start : 0) + 500;
    setPriceRanges([
      ...priceRanges,
      { start: newStart, end: newStart + 500, charge: "" },
    ]);
  };
  return (
    <>
      <div className="space-y-4 mb-20">
        <div className="space-y-8 p-6 bg-white rounded-sm shadow">
          <section>
            <p className="font-medium text-sm">Shipping providers</p>
            <span className="text-xs text-slate-500">
              Connect and manage shipping providers to be used while shipping
              your orders.
            </span>

            <div className="mt-3">
              <div className="flex items-center justify-between p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <Image
                    src="/assets/images.png"
                    alt="return_logo"
                    width={45}
                    height={45}
                  />
                  <div>
                    <p className="font-medium mb-1 text-sm">Shiprocket</p>
                    <p className="text-xs text-gray-500 font-normal">
                      Effortlessly ship your orders and enjoy a streamlined
                      shipping process for your business.
                    </p>
                  </div>
                </div>
                <Button variant="default">Connect</Button>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg">
                    <svg
                      className="w-6 h-6 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-sm">
                      Own shipping partner
                    </h3>
                    <p className="text-xs text-gray-500 font-normal">
                      Connect your partner account and set shipping priority.
                    </p>
                  </div>
                </div>
                <Button variant="default">Set up partner account</Button>
              </div>
            </div>
          </section>
        </div>
        <div className="space-y-8 p-5 bg-white rounded-sm shadow">
          <section>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col justify-between mb-2">
                <p className="font-medium text-sm mb-1">Packages</p>
                <p className="text-xs text-gray-500">
                  Custom size shipping packages for your orders.
                </p>
              </div>
              <Button variant="outline">+ Add package</Button>
            </div>
          </section>
        </div>
        <div className="space-y-8 p-6 bg-white rounded-sm shadow">
          <section>
            <div className="flex items-center justify-between">
              <p className="font-medium text-sm">Delivery charge</p>
              <Switch
                checked={deliveryChargeEnabled}
                onCheckedChange={setDeliveryChargeEnabled}
              />
            </div>
            <p className="text-xs text-gray-500">
              Flexibility to set rates based on payment methods.
            </p>

            {deliveryChargeEnabled && (
              <div className="space-y-4 mt-4">
                <RadioGroup
                  value={deliveryChargeType}
                  onValueChange={setDeliveryChargeType}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fixed" id="fixed" />
                    <Label htmlFor="fixed" className="text-base font-normal">
                      Fixed
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="variable" id="variable" />
                    <Label htmlFor="variable" className="text-base font-normal">
                      Variable
                    </Label>
                  </div>
                </RadioGroup>

                {deliveryChargeType === "fixed" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="delivery-charge"
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Delivery charge per order{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="delivery-charge"
                        value={deliveryCharge}
                        onChange={(e) => setDeliveryCharge(e.target.value)}
                        placeholder="₹ Enter delivery charge"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="free-delivery"
                        className="block text-sm font-medium text-gray-500 mb-1"
                      >
                        Free delivery above
                      </label>
                      <Input
                        id="free-delivery"
                        value={freeDeliveryAbove}
                        onChange={(e) => setFreeDeliveryAbove(e.target.value)}
                        placeholder="₹ Enter free delivery above"
                        className="h-12"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    {priceRanges.map((range, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <Input
                          value={range.start}
                          readOnly
                          className="w-24 mr-2"
                        />
                        <span className="mx-2">-</span>
                        <Input
                          value={range.end}
                          readOnly
                          className="w-24 mr-2"
                        />
                        <span className="mx-2">→</span>
                        <Input
                          value={range.charge}
                          onChange={(e) =>
                            handleChargeChange(index, e.target.value)
                          }
                          placeholder="₹ Amount"
                          className="w-32 mr-2"
                        />
                        {index > 0 && (
                          <Button
                            variant="outline"
                            onClick={() => handleRemoveRange(index)}
                            className="mr-2"
                          >
                            Remove
                          </Button>
                        )}
                        {index === priceRanges.length - 1 && (
                          <Button variant="outline" onClick={handleAddRange}>
                            Add
                          </Button>
                        )}
                      </div>
                    ))}
                    <Button
                      variant="link"
                      onClick={handleAddRange}
                      className="mt-2"
                    >
                      <PlusCircle className="mr-2 h-4 w-4" />
                      ADD ANOTHER PRICE RANGE
                    </Button>
                  </div>
                )}
              </div>
            )}
          </section>
        </div>
        <div className="space-y-8 p-6 bg-white rounded-lg shadow">
          <section>
            <p className="font-medium text-sm">Average delivery time</p>
            <p className="text-xs text-gray-500 mb-4">
              Manage expectations with clear, consistent timelines. This is
              shown on checkout page.
            </p>

            <div>
              <label
                htmlFor="delivery-time"
                className="block text-sm font-normal text-gray-700 mb-1"
              >
                Delivery happens within
              </label>
              <Select
                value={averageDeliveryTime}
                onValueChange={setAverageDeliveryTime}
              >
                <SelectTrigger className="w-[280px]">
                  <SelectValue placeholder="Select a timezone" />
                </SelectTrigger>
                <SelectContent>
                  {deliveryTimeOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>
        </div>

        <div className="flex justify-end mt-7">
          <Button>Save Changes</Button>
        </div>
      </div>
    </>
  );
};

export default ShippingSettings;
