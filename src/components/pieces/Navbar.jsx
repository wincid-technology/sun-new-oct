import React, { useState } from "react";
import { navProducts } from "@/constants/navProducts";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

export function NavList() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="/" className="flex items-center uppercase hover:text-white/80 transition-colors">
          Home
        </a>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="/procedure" className="flex items-center uppercase hover:text-white/80 transition-colors">
          Procedure
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium group"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      >
        <span className="flex items-center uppercase relative hover:text-white/80 transition-colors cursor-pointer">
          Our Products
        </span>
        {dropdownOpen && (
          <div className="absolute animation-h right-40 z-10 mt-2 bg-white/0 shadow-lg rounded-lg sm:p-0">
            <div className="productGrid grid grid-cols-5 border-collapse rounded-lg overflow-hidden">
              {navProducts.map((products) => {
                const { id, title, img } = products
                return(
                  <>
                  <span className="flex flex-col justify-center bg-white border border-gray-200 border-b-0 border-r-0 items-center w-48 p-5">
                    <img src={img} alt={title} height={40} width={40} className="" />
                    <p className="mt-2 text-xs text-center font-medium text-black">{title}</p>
                  </span>
                  </>
                )
              })}
              

            </div>
          </div>
        )}
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-medium">
        <a href="/contact" className="flex items-center uppercase hover:text-white/80 transition-colors">
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
    <Navbar className="mx-auto navBorder backdrop-blur-sm border-0 border-white px-6 max-w-screen-2xl py-3 absolute z-50 bg-white/10">
      <div className="flex items-center px-14 justify-between text-blue-gray-900">
        <Typography as="a" href="/" variant="h6" className="mr-4 cursor-pointer py-1.5">
          <Logo />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="h-6 w-6 flex text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
          aria-label="Toggle navigation"
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
};
