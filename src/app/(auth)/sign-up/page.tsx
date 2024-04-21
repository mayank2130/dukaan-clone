"use client";

import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            {/* <Icons.logo className='h-20 w-20' /> */}
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h1>

            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="/sign-in"
            >
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6">
            <form>
              <div className="grid gap-2">
                <div className="grid gap-1 py-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    placeholder="you@example.com"
                    className="border p-3 rounded-lg"
                    required
                  />
                  <p className="text-sm text-red-500"></p>
                </div>

                <div className="grid gap-1 py-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="border p-3 rounded-lg"
                    required
                  />
                  <p className="text-sm text-red-500"></p>
                </div>
                <Button>Sign in</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
