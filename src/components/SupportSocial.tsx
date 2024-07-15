import React from "react";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const SupportSocial = () => {
  return (
    <div className="flex-1">
      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-medium">Customer support</p>
              <span className="text-sm text-slate-500">
                Stay connected and responsive to your customers’ needs.
              </span>
            </div>
          </div>
          <div className="flex flex-row mt-5 mb-6 gap-5">
            <div className="flex flex-col w-full">
              <label className="text-sm text-muted-foreground mb-2">
                Email Address
              </label>
              <input
                placeholder="Email address"
                className="p-3 w-full rounded-sm border"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm text-muted-foreground mb-2">
                Mobile Number
              </label>
              <input
                placeholder="+91-123456789"
                className="p-3 w-full rounded-sm border"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 mt-6 py-5 sm:p-6">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col w-full">
              <p className="font-medium">Social profiles</p>
              <span className="text-sm text-slate-500">
                Connect with customers and grow your online presence.
              </span>
              <div className="flex flex-row mt-5 gap-5 pl-4 pt-2">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-muted-foreground mb-2">
                    Facebook URL
                  </label>
                  <input
                    placeholder="Enter Facebook URL"
                    className="p-3 w-full rounded-sm border"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm text-muted-foreground mb-2">
                    Twitter URL
                  </label>
                  <input
                    placeholder="Enter Twitter URL"
                    className="p-3 w-full rounded-sm border"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-5 gap-5 pl-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-muted-foreground mb-2">
                    Instagram URL
                  </label>
                  <input
                    placeholder="Enter Instagram URL"
                    className="p-3 w-full rounded-sm border"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm text-muted-foreground mb-2">
                    Linkedin URL
                  </label>
                  <input
                    placeholder="Enter Linkedin URL"
                    className="p-3 w-full rounded-sm border"
                  />
                </div>
              </div>
              <div className="flex flex-row mt-5 mb-2 gap-5 pl-4">
                <div className="flex flex-col w-full">
                  <label className="text-sm text-muted-foreground mb-2">
                    Youtube URL
                  </label>
                  <input
                    placeholder="Enter Youtube URL"
                    className="p-3 w-full rounded-sm border"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label className="text-sm text-muted-foreground mb-2">
                    Pinterest URL
                  </label>
                  <input
                    placeholder="Enter Pinterest URL"
                    className="p-3 w-full rounded-sm border"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-7">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default SupportSocial;
