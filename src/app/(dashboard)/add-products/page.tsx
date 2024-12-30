import React from "react";
import { Metadata } from "next";
import AddProduct from "@/components/AddProduct";

export const metadata: Metadata = {
  title: "Add new product",
};

function page() {
  return <AddProduct />;
}

export default page;
