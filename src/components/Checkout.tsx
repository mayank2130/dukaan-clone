import React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Checkout = () => {
  return (
    <>
      <div className="flex-1">
        <div className="bg-white shadow rounded-lg w-full">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p>Guest Checkout</p>
                <span className="text-sm text-slate-500">
                  Customers will be able to check out as guests without
                  verifying their mobile number.
                </span>
              </div>
              <div className="flex">
                <Switch className={cn("")} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 mt-6 py-5 sm:p-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-full">
                <p>Checkout form</p>
                <span className="text-sm text-slate-500">
                  Streamline the buying process, improve customer experience.
                </span>
                <div className="flex flex-row mt-5 gap-5">
                  <input
                    placeholder="Name *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                  <input
                    placeholder="Mobile Number *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                </div>
                <div className="flex flex-row mt-5 gap-5">
                  <div className="flex-row w-full">
                    <div className="p-3 bg-zinc-50 flex-row flex justify-between rounded-sm">
                      <p className="text-slate-400">Email Address (Optional)</p>
                      <div className="">
                        <Link href={"/"} className="text-blue-600 pr-1">
                          EDIT
                        </Link>
                      </div>
                    </div>
                  </div>
                  <input
                    placeholder="Country *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                </div>
                <div className="flex flex-row mt-5 gap-5">
                  <input
                    placeholder="Address *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                  <input
                    placeholder="Pin Code *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                </div>
                <div className="flex flex-row mt-5 gap-5 mb-7">
                  <input
                    placeholder="City *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                  <input
                    placeholder="State *"
                    disabled
                    className="p-3 w-full rounded-sm"
                  />
                </div>

                <p>Advanced fields</p>
                <span className="text-sm text-slate-500">
                  Enhance your checkout experience with personalized form
                  fields.
                </span>
                <div className="flex flex-row mt-5 gap-5">
                  <div className="flex flex-col w-full">
                    <input
                      placeholder="Locality / Area"
                      disabled
                      className="p-3 rounded-sm"
                    />
                    <div className="flex items-center mt-5 flex-row gap-4 justify-start">
                      <input type="checkbox" className="w-5 h-5" />
                      <label className="text-slate-600">Required Field</label>
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      placeholder="Landmark"
                      disabled
                      className="p-3 rounded-sm"
                    />
                    <div className="flex items-center mt-5 flex-row gap-4 justify-start">
                      <input type="checkbox" className="w-5 h-5" />
                      <label className="text-slate-600">Required Field</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p>Guest Checkout</p>
                <span className="text-sm text-slate-500">
                  Customers will be able to check out as guests without
                  verifying their mobile number.
                </span>
              </div>
              <div className="flex">
                <Button
                  className={cn([
                    buttonVariants({
                      variant: "outline",
                      className: "bg-white",
                    }),
                    "hover:bg-gray-100",
                  ])}
                >
                  <p className="text-black">Add new field</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-7">
          <Button>Save</Button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
