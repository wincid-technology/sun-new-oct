import { products } from "@/constants/products";
import HeadingTwo from "../typography/HeadingTwo"
import Image from "next/image";

const Products = () => {
  return (
    <section className="py-10 bg-[#6C4E31]">
      <HeadingTwo title={"OUR PRODUCTS"} black="" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-10 px-[10%] gap-20">
        {products.map((product) => {
        const {id, title, description, img} = product;
        return (
          <div className="min-w-[300px] mx-auto" key={id}>
            <Image
              src={img}
              alt={title}
              height={768}
              width={1366}
              className="h-auto mx-auto block shadow-[0_12px_20px_-6px_rgba(0,0,0,0.1)] shadow-black rounded-t-xl"
            />
            <h3 className="bg-[#F7D5A7] text-center py-3 text-[#6C4E31] uppercase text-xl font-semibold border-b-2 border-black">
              {title}
            </h3>
            <p className="rounded-b-xl bg-[#F7D5A7] text-justify py-3 px-[10%]">{description}</p>
          </div>
        );
      })}</div>
    </section>
  );
}
export default Products