"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Bold,
  Italic,
  Underline,
  Link,
  Image,
  Table,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
  Code,
  Maximize2,
} from "lucide-react";

interface CustomTextAreaProps {
  content: string;
}

const CustomTextArea: React.FC<CustomTextAreaProps> = ({ content }) => {
  const [policyContent, setPolicyContent] = useState(content);

  return (
    <div className="flex-1">
      <div className="border rounded-lg shadow-sm">
        <div className="flex items-center space-x-2 p-2 border-b">
          <select className="border rounded px-4 py-1 bg-gray-100">
            <option className="text-sm">Paragraph</option>
          </select>
          <Button variant="ghost" size="icon">
            <Bold size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Italic size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Underline size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Link size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Image size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Table size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignLeft size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignCenter size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <AlignRight size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <List size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <ListOrdered size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Quote size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Code size={20} />
          </Button>
          <Button variant="ghost" size="icon">
            <Maximize2 size={20} />
          </Button>
        </div>
        <Textarea
          value={policyContent}
          onChange={(e) => setPolicyContent(e.target.value)}
          className="w-full h-96 p-4 border-none focus:ring-0"
          placeholder="Enter your privacy policy here..."
        />
      </div>
    </div>
  );
};

export default CustomTextArea;
