import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const StoreDetailsForm = () => {
  const [storeLink, setStoreLink] = useState("mydukaan.io/ topg");
  const [storeName, setStoreName] = useState("Cozy Corner");
  const [mobileNumber, setMobileNumber] = useState("+910123456789");
  const [emailAddress, setEmailAddress] = useState(
    "mayankthakur1712@gmail.com"
  );
  const [country, setCountry] = useState("India (₹)");
  const [storeAddress, setStoreAddress] = useState("");

  const handleSave = () => {
    // Implement save functionality
    console.log("Saving store details...");
  };

  const handleDeleteStore = () => {
    // Implement delete store functionality
    console.log("Deleting store...");
  };

  const handleViewAuthToken = () => {
    // Implement view auth token functionality
    console.log("Viewing auth token...");
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <p className="text-sm font-medium">Store Details</p>
          <p className="text-xs text-gray-500">
            Update and customize your store&apos;s information.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="store-link"
                  className="block text-sm font-medium text-gray-700"
                >
                  Store Link
                </label>
                <Input
                  id="store-link"
                  value={storeLink}
                  onChange={(e) => setStoreLink(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="store-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Store Name *
                </label>
                <Input
                  id="store-name"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  className="mt-1"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="mobile-number"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <div className="flex mt-1">
                <Select value="+91" onValueChange={() => {}}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="+91">🇮🇳 +91</SelectItem>
                    {/* Add more country codes as needed */}
                  </SelectContent>
                </Select>
                <Input
                  id="mobile-number"
                  value={mobileNumber.slice(3)}
                  onChange={(e) => setMobileNumber("+91" + e.target.value)}
                  className="flex-1 ml-2"
                />
                <Button variant="outline" className="ml-2">
                  VERIFY
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <Input
                  id="email-address"
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country *
                </label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country" className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India (₹)">India (₹)</SelectItem>
                    {/* Add more countries as needed */}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label
                htmlFor="store-address"
                className="block text-sm font-medium text-gray-700"
              >
                Store Address
              </label>
              <Input
                id="store-address"
                value={storeAddress}
                onChange={(e) => setStoreAddress(e.target.value)}
                className="mt-1"
              />
            </div>
            <div className="flex justify-center items-center">
              <Link href="#" className="text-red-600 hover:text-red-800">
                Delete my store
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="flex justify-end mt-7">
        <Button onClick={handleSave}>Save</Button>
      </div>

      <Card>
        <CardHeader>
          <p className="text-sm font-medium">Developer tools</p>
          <p className="text-xs text-gray-500">
            Use the Dukaan APIs to integrate dukaan services in your apps. View
            API docs
          </p>
        </CardHeader>
        <CardContent>
          <Button variant="default" onClick={handleViewAuthToken}>
            View auth token
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default StoreDetailsForm;
