import React from "react";
import { Metadata } from "next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import AddProduct from "@/components/AddProduct";


export const metadata: Metadata = {
  title: "Add new product",
};

function page() {
  return (
    <MaxWidthWrapper>
      <AddProduct />
    </MaxWidthWrapper>
  );
}

export default page;
