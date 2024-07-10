"use client";
import React, { useState } from "react";

const Setting = () => {
  const [storeName, setStoreName] = useState("TOP G");
  const [mobileNumber, setMobileNumber] = useState("+910123456789");
  const [email, setEmail] = useState("mayankthakur1712@gmail.com");
  const [country, setCountry] = useState("India (₹)");
  return (
    <>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Store details
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Update and customize your store's information.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label
            htmlFor="store-link"
            className="block text-sm font-medium text-gray-700"
          >
            Store Link
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="store-link"
              id="store-link"
              value="mydukaan.io/topg"
              readOnly
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-100"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="store-name"
            className="block text-sm font-medium text-gray-700"
          >
            Store Name *
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="store-name"
              id="store-name"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="mobile-number"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              🇮🇳 +91
            </span>
            <input
              type="tel"
              name="mobile-number"
              id="mobile-number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="flex-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <div className="mt-1">
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country *
          </label>
          <div className="mt-1">
            <select
              id="country"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            >
              <option>India (₹)</option>
              {/* Add more country options here */}
            </select>
          </div>
        </div>
        <div className="sm:col-span-6">
          <label
            htmlFor="store-address"
            className="block text-sm font-medium text-gray-700"
          >
            Store Address
          </label>
          <div className="mt-1">
            <textarea
              id="store-address"
              name="store-address"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <button className="text-red-600 hover:text-red-700">
          Delete my store
        </button>
        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </>
  );
};

export default Setting;
