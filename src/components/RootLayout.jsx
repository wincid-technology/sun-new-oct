'use client'

import { useState } from "react";
import { NavbarSimple } from "@/components/pieces/Navbar";
import Footer from "@/components/pieces/Footer";
import Preloader from "@/components/preloader/preloader";

export default function RootLayout({ children }) {


  return (
    <>

      {/* <Preloader /> */}
      <div id="mainBg" className="overflow-x-hidden">
        <NavbarSimple />
        <main role="main">{children}</main>
        <Footer />
      </div>

    </>
  );
}
