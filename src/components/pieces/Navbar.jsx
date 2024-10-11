import React, { useState } from "react";
import { navProducts } from "@/constants/navProducts";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LogoFull from "./LogoFull";

export function NavList() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ul className="my-2 flex lg:h-[100px] flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium h-full flex items-center">
        <a href="/" className="flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium h-full flex items-center">
        <a href="/procedure" className="flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]">
          Procedure
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium group h-full flex items-center"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span className="flex items-center uppercase relative text-[#0F063F] transition-colors cursor-pointer kanit-medium text-md md:text-lg hover:text-[#f58720]">
          Our Products
        </span>
        {dropdownOpen && (
          <div className="absolute animation-h lg:right-28 z-50 lg:top-28 bg-white shadow-2xl shadow-black rounded-lg sm:p-0">
            <div className="productGrid lg:grid hidden lg:grid-cols-5 border-collapse rounded-lg overflow-hidden">
              {navProducts.map((products) => {
                const { id, title, img } = products
                return(
                  <>
                  <span className="flex flex-col justify-center cursor-pointer [&>*:hover]:text-[#f58720] bg-white border border-gray-200 border-b-0 border-r-0 items-center w-48 p-5">
                    <img src={img} alt={title} height={45} width={45} className="" />
                    <p className="mt-2 text-sm text-center font-medium text-black">{title}</p>
                  </span>
                  </>
                )
              })}
              

            </div>
          </div>
        )}
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium h-full flex items-center">
        <a href="/contact" className="flex items-center uppercase text-[#0F063F] transition-colors kanit-medium text-md md:text-lg hover:text-[#f58720]">
          Contact Us
        </a>
      </Typography>
    </ul>
  );
}

export const NavbarSimple = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto w-full max-w-[100vw] lg:h-[125px] absolute navBorder backdrop-blur-md border-0 rounded-none border-white px-6 py-3 z-50 bg-white">
      <div className="flex items-center px-0 sm:px-2 justify-between text-blue-gray-900">
        <Typography as="a" href="/" variant="h6" className="">
          <LogoFull />
        </Typography>
        <div className="hidden lg:block h-full">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="h-6 w-6 flex text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <XMarkIcon className="h-8 w-8" strokeWidth={2} />
          ) : (
            <Bars3BottomRightIcon className="h-8 w-8" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
