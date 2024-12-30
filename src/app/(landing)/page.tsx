import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import ProductReel from "@/components/ProductReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { StoreIcon, Users, BoxIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FcAndroidOs } from "react-icons/fc";

export const metadata: Metadata = {
  title: "Home",
};

const perks = [
  {
    name: "Create a Store",
    Icon: StoreIcon,
    description: "Fill a form and your store is ready!",
  },
  {
    name: "Add Products",
    Icon: BoxIcon,
    description: "Add products you want people to buy.",
  },
  {
    name: "Get People inside your store",
    Icon: Users,
    description: "If people like what they see, they walk into your store!",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-32 mx flex flex-col max-w-3xl">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Your sales growth partner,{" "}
            <span className="text-blue-600">created to make you visible.</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg max-w-prose text-muted-foreground">
            Launch your online store with ease and get more people to enter your
            offline store than ever before.
          </p>
          <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 ">
            <Link
              href="/add-products"
              className={`${buttonVariants({
                variant: "default",
              })} h-10 sm:h-12`}
            >
              Get Started
            </Link>
          </div>
          <div className="flex items-center">
            <p className="mt-4 sm:mt-6 text-base sm:text-base max-w-prose text-muted-foreground">
              Also available on
            </p>
            <FcAndroidOs size={30} className="ml-2 mt-auto" />{" "}
            {/* Android OS icon */}
          </div>
        </div>
      </MaxWidthWrapper>

      {/* <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="Popular"
        /> */}

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className=" grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
      <section className="bg-white">
        <MaxWidthWrapper className="py-20">
          <div></div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
