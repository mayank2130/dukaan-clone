import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const Returns = () => {
  return (
    <div className="bg-white shadow rounded-lg w-full h-96 flex flex-col justify-end">
      <div className="px-4 sm:p-6">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-2 mb-8">
            <Image
              src="/assets/images.png"
              alt="return_logo"
              width={120}
              height={120}
            />
            <p className="font-medium">Set up Returns & Replacement</p>
            <p className="text-sm text-slate-500">
              Set up returns and replacement for your delivered orders and
              manage them easily from your Dukaan dashboard.
            </p>
          </div>
          <Button>Set up</Button>
        </div>
      </div>
    </div>
  );
};

export default Returns;
