import React from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CreateStore from "@/components/CreateStore";

export const metadata: Metadata = {
  title: "Create your Store",
};

function page() {
  return (
    <MaxWidthWrapper>
      <CreateStore />
    </MaxWidthWrapper>
  );
}

export default page;
