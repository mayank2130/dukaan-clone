"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  Bell,
  HelpCircle,
  Menu,
  X,
  Palette,
  ClipboardList,
  Truck,
  Grid2X2,
  BarChart4,
  BadgePercent,
  Users,
  Zap,
  Settings,
  Wallet,
  Diamond,
  Gem,
} from "lucide-react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icons: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-house"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </svg>
      ),
    },
    { name: "Orders", path: "/orders", icons: <ClipboardList /> },
    { name: "Delivery", path: "/delivery", icons: <Truck /> },
    { name: "Products", path: "/products", icons: <Grid2X2 /> },
    { name: "Analytics", path: "/analytics", icons: <BarChart4 /> },
    { name: "Discounts", path: "/discounts", icons: <BadgePercent /> },
    { name: "Audience", path: "/audience", icons: <Users /> },
    { name: "Appearance", path: "/appearance", icons: <Palette /> },
    { name: "Plugins", path: "/plugins", icons: <Zap /> },
    { name: "Settings", path: "/settings", icons: <Settings /> },
  ];

  return (
    <div className="flex h-screen bg-fixed bg-gray-100">
      <div
        className={`${
          isSidebarOpen ? "w-52" : "w-16 pl-1"
        } bg-gray-900 text-white transition-all duration-300 ease-in-out flex flex-col`}
      >
        <div className="p-4 flex items-center justify-between">
          {isSidebarOpen && <span className="font-bold text-xl">TOP G</span>}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <nav className="mt-3 flex-grow mr-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`flex items-center py-2 px-4 ${
                item.name === "Settings" ? "bg-gray-800" : ""
              }`}
            >
              <div
                className={`${
                  isSidebarOpen
                    ? "items-center flex flow-row gap-2 text-sm font-medium"
                    : ""
                }`}
              >
                {item.icons}
                {isSidebarOpen ? item.name : null}
              </div>
            </Link>
          ))}
        </nav>
        {isSidebarOpen && (
          <div className="mt-auto p-2 pb-2">
            <div className="mt-4 flex items-center hover:bg-slate-700 rounded-lg">
              <div className="p-2 mr-3 ml-2">
                <Gem />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Upgrade plan</span>
                <span className="font-light text-sm text-muted-foreground">Get extra benefits</span>
              </div>
            </div>
            <div className="mt-4 flex items-center bg-slate-700  hover:bg-slate-900 p-1 rounded-lg">
              <div className="bg-slate-600 rounded-lg p-2 mr-3 ml-2">
                <Wallet />
              </div>
              <div className="flex flex-col">
                <span className="">Dukaan Credits</span>
                <span className="">0</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
