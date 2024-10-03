import About from "@/components/mainCompos/About";
import Enquiry from "@/components/mainCompos/Enquiry";
import Header from "@/components/mainCompos/Header";
import Products from "@/components/mainCompos/Products";

export default function Home() {
  return (
    <div className="bg-[#ffdcac]">
      <Header />
      <About />
      <Products />
      <Enquiry />
    </div>
  );
}
