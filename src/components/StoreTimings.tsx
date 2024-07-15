"use client";

import React, { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Switch } from "./ui/switch";

interface DayTiming {
  day: string;
  isOpen: boolean;
  hours: string;
}

const StoreTimings: React.FC = () => {
  const [timings, setTimings] = useState<DayTiming[]>([
    { day: "Sunday", isOpen: true, hours: "24 hours" },
    { day: "Monday", isOpen: true, hours: "24 hours" },
    { day: "Tuesday", isOpen: true, hours: "24 hours" },
    { day: "Wednesday", isOpen: true, hours: "24 hours" },
    { day: "Thursday", isOpen: true, hours: "24 hours" },
    { day: "Friday", isOpen: true, hours: "24 hours" },
    { day: "Saturday", isOpen: true, hours: "24 hours" },
  ]);

  const handleToggle = (index: number) => {
    const newTimings = [...timings];
    newTimings[index].isOpen = !newTimings[index].isOpen;
    setTimings(newTimings);
  };
  return (
    <div className="flex-1">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col mb-4">
          <p className="font-medium">Store timings</p>
          <span className="text-sm text-slate-500">
            Your store will be automatically switched online/offline based on
            the hours you choose.
          </span>
        </div>
        {timings.map((timing, index) => (
          <div
            key={timing.day}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center space-x-6">
              <span className="w-24 text-sm">{timing.day}</span>
              <Switch
                checked={timing.isOpen}
                onCheckedChange={() => handleToggle(index)}
              />
              <span className="text-gray-500 w-16">
                {timing.isOpen ? "Open" : "Closed"}
              </span>
              <div className="w-24 h-9">
                {" "}
                {/* Placeholder div to maintain layout */}
                {timing.isOpen ? (
                  <Button
                    className={cn([
                      buttonVariants({
                        variant: "outline",
                        className: "bg-white",
                      }),
                      "hover:bg-gray-100 border",
                    ])}
                  >
                    <p className="text-zinc-600">{timing.hours}</p>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-7">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default StoreTimings;
