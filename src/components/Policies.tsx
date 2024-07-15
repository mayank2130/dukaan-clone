import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import CustomTextArea from "./CustomTextArea";
import {PRIVACY_POLICY, REFUND_POLICY, TERMS_AND_CONDITIONS  } from "@/config/index";


const PolicyEditor: React.FC = () => {
  const [activeTab, setActiveTab] = useState("privacy");
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div className="flex-1">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="mb-2 space-x-2 border-0 bg-transparent">
          <TabsTrigger
            value="privacy"
            className="px-4 py-2 border rounded-sm bg-zinc-300 data-[state=active]:bg-white data-[state=active]:border-gray-500"
          >
            Privacy Policy
          </TabsTrigger>
          <TabsTrigger
            value="refund"
            className="px-4 py-2 border rounded-sm bg-zinc-300 data-[state=active]:bg-white data-[state=active]:border-gray-500"
          >
            Refund Policy
          </TabsTrigger>
          <TabsTrigger
            value="terms"
            className="px-4 py-2 border rounded-sm bg-zinc-300 data-[state=active]:bg-white data-[state=active]:border-gray-500"
          >
            Terms & Conditions
          </TabsTrigger>
        </TabsList>
        <div className="bg-white p-6 pt-4 rounded-lg shadow-sm">
          <TabsContent value="privacy">
            <div className="mb-6">
              <div className="flex flex-col">
                <p className="font-medium">Privacy Policy</p>
                <span className="text-sm text-slate-500">
                  Customize your privacy policy to ensure customer trust and
                  legal compliance.
                </span>
              </div>
            </div>

            <CustomTextArea content={PRIVACY_POLICY} />

            <div className="mt-6 flex justify-end">
              <Button>Add as store page</Button>
            </div>
          </TabsContent>

          <TabsContent value="refund">
            <div className="mb-6">
              <div className="flex flex-col">
                <p className="font-medium">Refund Policy</p>
                <span className="text-sm text-slate-500">
                  Define your refund policy: clear, fair, and customer-friendly.
                </span>
              </div>
            </div>

            <CustomTextArea content={REFUND_POLICY} />

            <div className="mt-6 flex justify-end">
              <Button>Add as store page</Button>
            </div>
          </TabsContent>

          <TabsContent value="terms">
            <div className="mb-6">
              <div className="flex flex-col">
                <p className="font-medium">Terms & Conditions</p>
                <span className="text-sm text-slate-500">
                  Set your store’s terms: transparent, secure, and user-focused.
                </span>
              </div>
            </div>

            <CustomTextArea content={TERMS_AND_CONDITIONS} />

            <div className="mt-6 flex justify-end">
              <Button>Add as store page</Button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default PolicyEditor;
