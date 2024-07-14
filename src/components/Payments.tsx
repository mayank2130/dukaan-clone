import React from "react";
import { Switch } from "@/components/ui/switch";

interface PaymentProvider {
  name: string;
  logo: string;
  description?: string;
}

interface PaymentProvidersProps {
  providers: PaymentProvider[];
}

const PaymentProviders: React.FC<PaymentProvidersProps> = () => {
  const providers = [
    { name: "Razorpay", logo: "/path/to/razorpay-logo.png" },
    { name: "PhonePe Payment Gateway", logo: "/path/to/phonepe-logo.png" },
    {
      name: "Cash on delivery",
      logo: "/path/to/cod-logo.png",
      description: "Receive payments in cash upon delivery.",
    },
  ];

  return (
    <>
      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="mb-8">
            <p className="text-black font-medium">Payment Providers</p>
            <p className="text-sm text-slate-500">
              Manage payment providers to accept payments from your customers.
            </p>
          </div>

          {providers.map((provider, index) => (
            <div key={index} className="flex items-center justify-between py-4">
              <div className="flex items-center">
                <img
                  src={provider.logo}
                  alt={`${provider.name} logo`}
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="font-semibold">{provider.name}</h3>
                  {provider.description && (
                    <p className="text-sm text-gray-600">
                      {provider.description}
                    </p>
                  )}
                </div>
              </div>
              {provider.name === "Cash on delivery" ? (
                <Switch />
              ) : (
                <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                  Set up
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white shadow rounded-lg w-full mt-8">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold">Manual payment methods</h3>
              <p className="text-sm text-gray-600">
                Enables offline payments like cash, check, or other custom
                methods.
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentProviders;
