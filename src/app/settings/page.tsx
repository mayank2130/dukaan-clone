"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Bell, HelpCircle } from "lucide-react";
import Layout from "@/components/Layout";
import Domains from "@/components/Domains";
import StaffAccounts from "@/components/StaffAccounts";
import Notifications from "@/components/Notifications";
import Payments from "@/components/Payments";
import Checkout from "@/components/Checkout";
import Warehouse from "@/components/Warehouse";
import Delivery from "@/components/Delivery";
import Returns from "@/components/Returns";
import Tax from "@/components/Tax";
import StoreTimings from "@/components/StoreTimings";
import Extracharges from "@/components/Extracharges";
import Seo from "@/components/Seo";
import Languages from "@/components/Languages";
import SupportSocial from "@/components/SupportSocial";
import Policies from "@/components/Policies";
import { settingsItems } from "@/config/Items";
import StoreDetails from "@/components/StoreDetails";

const StoreSettings: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  useEffect(() => {
    const section = searchParams?.get("section");
    if (section) {
      setCurrentSection(section);
    }
  }, [searchParams]);

  const renderSectionComponent = () => {
    switch (currentSection) {
      case "store-details":
        return <StoreDetails />;
      case "domains":
        return <Domains />;
      case "staff-accounts":
        return <StaffAccounts />;
      case "notifications":
        return <Notifications />;
      case "payments":
        return <Payments />;
      case "checkout":
        return <Checkout />;
      case "warehouse":
        return <Warehouse />;
      case "delivery":
        return <Delivery />;
      case "returns":
        return <Returns />;
      case "tax":
        return <Tax />;
      case "extra-charges":
        return <Extracharges />;
      case "seo":
        return <Seo />;
      case "languages":
        return <Languages />;
      case "support-social":
        return <SupportSocial />;
      case "policies":
        return <Policies />;
      case "store-timings":
        return <StoreTimings />;
      default:
        return <StoreDetails />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Main Sidebar */}
      <Layout />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
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

        {/* Content area */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-7xl py-6 sm:px-6 lg:px-8 flex ">
            {/* Settings Sidebar */}
            <div className="bg-white shadow rounded-lg mr-10 h-fit">
              <nav className="w-64">
                <ul className="space-y-1 pl-4 p-3">
                  {settingsItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={`/settings?section=${item.section}`}
                        className={`block py-2 ${
                          currentSection === item.section
                            ? "text-blue-600"
                            : "text-slate-600"
                        }`}
                      >
                        <div className="flex flex-row items-center gap-3">
                          {item.icons}
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Main Settings Content */}
            <div className="flex-1">
              <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  {renderSectionComponent()}
                </div>
              </div>
              <div className="mt-6 bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Developer tools
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Use the Dukaan APIs to integrate dukaan services in your
                    apps.{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      View API docs
                    </a>
                  </p>
                  <div className="mt-4">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View auth token
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSettings;
