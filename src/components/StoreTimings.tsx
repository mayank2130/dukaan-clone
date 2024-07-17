import React, { useState } from "react";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface DayTiming {
  day: string;
  isOpen: boolean;
  startTime: string;
  endTime: string;
}

const generateTimeOptions = () => {
  const options = ["24 hours"];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour % 12 || 12;
      const time = `${displayHour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")} ${period}`;
      options.push(time);
    }
  }
  return options;
};

const timeOptions = generateTimeOptions();

const addHours = (time: string, hoursToAdd: number): string => {
  if (time === "24 hours") return time;
  const [hourMinute, period] = time.split(" ");
  const [hour, minute] = hourMinute.split(":").map(Number);
  let newHour = (hour % 12) + hoursToAdd;
  let newPeriod = period;
  if (newHour >= 12) {
    newPeriod = period === "AM" ? "PM" : "AM";
    newHour = newHour % 12;
  }
  newHour = newHour || 12;
  return `${newHour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")} ${newPeriod}`;
};

const StoreTimings: React.FC = () => {
  const [timings, setTimings] = useState<DayTiming[]>([
    { day: "Sunday", isOpen: true, startTime: "24 hours", endTime: "" },
    { day: "Monday", isOpen: true, startTime: "24 hours", endTime: "" },
    { day: "Tuesday", isOpen: true, startTime: "24 hours", endTime: "" },
    { day: "Wednesday", isOpen: true, startTime: "24 hours", endTime: "" },
    { day: "Thursday", isOpen: true, startTime: "24 hours", endTime: "" },
    { day: "Friday", isOpen: true, startTime: "24 hours", endTime: "" },
    { day: "Saturday", isOpen: true, startTime: "24 hours", endTime: "" },
  ]);

  const handleToggle = (index: number) => {
    const newTimings = [...timings];
    newTimings[index].isOpen = !newTimings[index].isOpen;
    if (!newTimings[index].isOpen) {
      newTimings[index].startTime = "24 hours";
      newTimings[index].endTime = "";
    }
    setTimings(newTimings);
  };

  const handleTimeChange = (
    index: number,
    type: "startTime" | "endTime",
    value: string
  ) => {
    const newTimings = [...timings];
    newTimings[index][type] = value;
    if (type === "startTime") {
      if (value === "24 hours") {
        newTimings[index].endTime = "";
      } else {
        newTimings[index].endTime = addHours(value, 12);
      }
    }
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
            className="flex items-center justify-between py-1"
          >
            <div className="flex items-center space-x-6">
              <span className="w-24 text-sm">{timing.day}</span>
              <Switch
                checked={timing.isOpen}
                onCheckedChange={() => handleToggle(index)}
              />
              <span className="text-gray-500 w-16">
                {timing.isOpen ? (
                  <p className="text-sm text-muted-foreground">Open</p>
                ) : (
                  "Closed"
                )}
              </span>
              {timing.isOpen && (
                <>
                  <Select
                    value={timing.startTime}
                    onValueChange={(value) =>
                      handleTimeChange(index, "startTime", value)
                    }
                  >
                    <SelectTrigger className="w-[110px]">
                      <SelectValue placeholder="Start time" />
                    </SelectTrigger>
                    <SelectContent className="h-[160px] overflow-auto">
                      {timeOptions.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {timing.startTime !== "24 hours" && (
                    <>
                      <span>-</span>
                      <Select
                        value={timing.endTime}
                        onValueChange={(value) =>
                          handleTimeChange(index, "endTime", value)
                        }
                      >
                        <SelectTrigger className="w-[140px]">
                          <SelectValue placeholder="End time" />
                        </SelectTrigger>
                        <SelectContent className="h-[160px] overflow-auto">
                          {timeOptions.slice(1).map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  )}
                </>
              )}
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
