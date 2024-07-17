import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Switch } from "./ui/switch";

const SEOSettings = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-5 mb-40">
      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="font-medium"> Title and meta description</p>
              <span className="text-sm text-slate-500">
                The title and meta description help define how your store shows
                up on search engines.
              </span>
            </div>
            <div className="space-y-5 mt-5">
              <div>
                <label
                  htmlFor="homepage-title"
                  className="block text-muted-foreground text-sm font-medium mb-2"
                >
                  Homepage Title
                </label>
                <Input
                  id="homepage-title"
                  placeholder="Enter your homepage title"
                  className="h-14"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="meta-description"
                  className="block text-muted-foreground text-sm font-medium mb-2"
                >
                  Homepage Meta Description
                </label>
                <Textarea
                  id="meta-description"
                  className="h-24 p-4"
                  placeholder="Enter a description to get a better ranking on search engines like Google"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col mb-5">
              <p className="font-medium"> Social sharing image preview</p>
              <span className="text-sm text-slate-500">
                When you share a link to your store on social media, an image is
                usually shown in your post. This one will be used if another
                relevant image can&apos;t be found.
              </span>
            </div>
            <Card className="border shadow-none">
              <CardContent className="p-4">
                <div className="flex items-center space-x-7">
                  <div className="w-60 h-32 bg-gray-100 flex items-center justify-center border border-dashed border-gray-300 rounded">
                    <Button variant="ghost" size="sm">
                      <div className="flex flex-col">
                        <span className="ml-2">+ Add image</span>
                        <span className="ml-2 text-xs">
                          (Recommended size: 1200 x 628 px)
                        </span>
                      </div>
                    </Button>
                  </div>
                  <div className="space-y-3">
                    <h2 className="font-semibold text-lg">Homepage Title</h2>
                    <p className="text-sm text-blue-500">
                      https://mydukaan.io/topg
                    </p>
                    <p className="text-sm text-gray-500">Meta Description</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col mb-5">
              <p className="font-medium">Sitemap</p>
              <p className="text-sm text-slate-500">
                Sitemap.xml is used by search engines like Google and Bing to
                index your site so that your store&apos;s pages appear in search
                results.
              </p>
            </div>
          </div>
            <Button variant="link" className="text-blue-500 p-6 bg-gray-100 text-base w-full justify-start">
              https://mydukaan.io/topg/sitemap.xml
              <ExternalLink className="h-4 w-4 ml-1" />
            </Button>
        </div>
      </div>
      <div className="bg-white shadow rounded-lg w-full">
        <div className="px-4 sm:p-6">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col mb-5">
              <p className="font-medium">Robots.txt</p>
              <p className="text-sm text-slate-500">
                Robots.txt is a file that contains instructions on how to crawl
                a website.
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-7">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default SEOSettings;
