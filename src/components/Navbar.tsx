import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import { buttonVariants } from "./ui/button";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 pb-20">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <MobileNav />
              <div className="ml-4 flex lg:ml-0 pt-2">
                <a href="/">
                  <img
                    src="https://i.ibb.co/y0sZHkX/Screenshot-2024-03-30-132251.png"
                    alt="Logo"
                    width={120}
                  />
                </a>
              </div>

              <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                <NavItems />
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    href="/sign-in"
                    className={buttonVariants({
                      variant: "link",
                    })}
                  >
                    <span className="text-black">Sign in</span>
                  </Link>

                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                  <Link
                    href="/sign-up"
                    className={buttonVariants({
                      variant: "default",
                    })}
                  >
                    Create account
                  </Link>

                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                  <div className="flex lg:ml-6">
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
