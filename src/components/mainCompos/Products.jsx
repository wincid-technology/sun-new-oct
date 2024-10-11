"use client"


import { useEffect } from "react";
import { Ripple, initTWE } from "tw-elements";
import HeadingTwo from "../typography/HeadingTwo";
import { products } from "@/constants/products";
import Image from "next/image";



const Products = () => {
  useEffect(() => {
    initTWE({ Ripple });
  }, []);
  return (

    <>

      <section className="py-20 bg-[#ccaa8a9c] flex justify-center items-center flex-col gap-20">
        <HeadingTwo title={"OUR PRODUCTS"} />
        <div className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:px-20 px-5 xl:px-10 gap-10">
 
          {
            products.map(item => {
              const { id, title, description, img } = item;
              return (
                <div key={id}
                  className="rounded-xl overflow-hidden flex-col flex justify-center items-center bg-white shadow-grey-200 shadow-lg dark:bg-surface-dark">
                  <div
                    className="relative bg-cover bg-no-repeat overflow-hidden h-64"
                    data-twe-ripple-init
                    data-twe-ripple-color="light">
                    <Image
                      src={img}
                      className="object-cover object-center h-full w-full"
                      alt="Product 1"
                      height={500}
                      width={500}
                    />

                    <a href="#!">
                      <div
                        className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-6 text-surface dark:text-white flex flex-col items-center">
                    <h5 className="mb-2 text-xl font-medium leading-tight text-center">{title}</h5>
                    <p className="mb-4 text-center text-sm">
                      {description}
                    </p>
                    <button
                      type="button"
                      className="inline-block rounded bg-[#f58720] px-6 pb-2 pt-2.5 text-md source-sans-400 uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                      data-twe-ripple-init
                      data-twe-ripple-color="light">
                      View More
                    </button>
                  </div>
                </div>
              )
            })
          }


        </div>

        <button className="rmbtnBlue rounded-md capitalize">Explore More Products</button>
      </section>



    </>
  );
}
export default Products