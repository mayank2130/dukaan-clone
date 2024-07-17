import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Domain {
  name: string;
  status: "LIVE" | "PENDING" | "INACTIVE";
  dateAdded: string;
  provider: string;
}

const DomainsComponent: React.FC = () => {
  const domains: Domain[] = [
    {
      name: "https://mydukaan.io/topg",
      status: "LIVE",
      dateAdded: "Dec 14, 2022",
      provider: "Dukaan",
    },
  ];

  const handleConnectDomain = () => {
    // Implement the logic to connect an external domain
    console.log("Connecting external domain...");
  };

  return (
    <div className="flex-1 space-y-4">
      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="text-sm font-medium">Domains</p>
              <span className="text-xs text-slate-500">
                Set up and personalize your store&apos;s web address.
              </span>
            </div>
          </div>
          <div className="mt-4">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-200 rounded-md h-12">
                  <TableHead>Domain name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date added</TableHead>
                  <TableHead>Provider</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="hover:bg-none">
                {domains.map((domain, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium text-blue-600">
                      {domain.name}
                    </TableCell>
                    <TableCell>
                      <span className="bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                        {domain.status}
                      </span>
                    </TableCell>
                    <TableCell>{domain.dateAdded}</TableCell>
                    <TableCell>{domain.provider}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
              <p className="text-sm font-medium">Connect external domain</p>
              <span className="text-xs text-slate-500">
                You can connect your existing domain to Dukaan in a few minutes.
              </span>
            </div>
            <Button onClick={handleConnectDomain}>Connect</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainsComponent;
