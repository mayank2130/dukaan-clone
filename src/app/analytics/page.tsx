"use client";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Bell, HelpCircle, InfoIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timeRanges = [
  "Lifetime",
  "Today",
  "Yesterday",
  "This Week",
  "Last 7 days",
  "Last Week",
  "This Month",
  "Last 30 days",
  "Last Month",
  "Custom Range",
];

const SalesAnalytics = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("Last 30 days");

  // Mock data for charts
  const mockChartData = [
    { date: "16 Jul", value: 0 },
    { date: "17 Jul", value: 1 },
    { date: "18 Jul", value: 2 },
    { date: "19 Jul", value: 3 },
    { date: "20 Jul", value: 4200 },
  ];

  const AnalyticsCard = ({ title, value, chart = false }) => (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium">{title}</h3>
        <InfoIcon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {chart && (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
      <CardFooter>
        <a href="#" className="text-sm text-blue-500">
          View detailed report →
        </a>
      </CardFooter>
    </Card>
  );

  return (
    <>
      <div className="bg-gray-100 h-screen">
        <header className="bg-white shadow-sm">
          <div className="mx-auto py-4  sm:px-6 flex justify-between items-center">
            <h1 className="text-lg font-semibold">Store settings</h1>
            <div className="flex items-center space-x-4">
              <HelpCircle size={20} />
              <Bell size={20} />
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </header>
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Sales analytics</h2>
            <Select
              value={selectedTimeRange}
              onValueChange={setSelectedTimeRange}
            >
              <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
              </SelectTrigger>
              <SelectContent>
                {timeRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <AnalyticsCard title="Average order value" value="₹0" />
            <AnalyticsCard title="Average sales per day" value="₹0" />
            <AnalyticsCard title="Returning customers" value="0%" />
            <AnalyticsCard title="Total orders" value="0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AnalyticsCard title="Gross sales" value="₹0" chart={true} />
            <AnalyticsCard title="Gross sales" value="₹0" chart={true} />
            <AnalyticsCard
              title="STORE CONVERSION RATE"
              value="0%"
              chart={true}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <h3 className="text-sm font-medium">Sales by top region</h3>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Not enough data to show.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-sm font-medium">Sales by traffic source</h3>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Not enough data to show.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-sm font-medium">
                  Top landing pages by UTM source
                </h3>
                <InfoIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Not enough data to show.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesAnalytics;
