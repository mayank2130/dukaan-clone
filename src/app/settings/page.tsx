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
        <div className="flex h-screen">
          {/* Settings Sidebar */}
          <div className="py-3 sm:px-2 lg:px-4 ml-4">
            <div className="bg-white w-64 flex-shrink-0 h-fit overflow-y-auto sticky top-0 rounded-sm">
              <nav className="p-4 ml-2">
                <ul className="space-y-1">
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
                        <div className="flex items-center gap-3">
                          {item.icons}
                          <p className="text-sm font-medium">{item.name}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Settings Content */}
          <div className="flex-1 h-screen overflow-y-auto">
            <div className="py-3 sm:px-6 lg:px-8">
              {renderSectionComponent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSettings;
