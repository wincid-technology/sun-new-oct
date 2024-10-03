import { footerLinks } from "@/constants/footer";
import Logo from "./Logo";

const Footer = () => {
  const date = new Date;
  const year = date.getFullYear();
  return (
    <footer className="bg-[#6C4E31] px-[10%] py-10">
      <div className="flex flex-col md:flex-row justify-between items-center md:flex-nowrap flex-wrap">
        <div className="">
          <div className="flex items-center flex-col gap-3 w-fit flex-wrap">
            <Logo />
            <h1 className="text-center mx-auto">
              <span className="md:text-4xl text-2xl font-bold  block tracking-wider text-[#ff8502] kanit-semibold-italic">
                {"SUNSHINE"}
              </span>
              <span className="md:text-4xl text-2xl font-bold block text-[#0e0640] kanit-semibold-italic">
                {"COROPACK"}
              </span>
              <h2 className="flex items-center text-white w-fit text-lg text-center">
                <hr className="w-5" />
                QUALITY MATTERS
                <hr className="w-5" />
              </h2>
            </h1>
          </div>
          <div>

          </div>

        </div>
        <div className="flex flex-col md:flex-row text-center text-white gap-5 text-[15px] font-medium m-10 mx-auto">
          {footerLinks.map((link) => {
            const { id, title, href } = link;
            return (
              <a
                href={href}
                key={id}
                className="uppercase block kanit-light hover:text-[#ff8502] transition-all duration-300" style={{letterSpacing: "1px"}}
              >
                {title}
              </a>
            );
          })}
        </div>
      </div>
      <hr className="mt-1" />
      <div className="">
        <h3 className="uppercase font-medium md:text-xl text-sm text-center mt-10">
          <span className="text-orange-500 tracking-wide mr-5">
            Sunshine Coropack
          </span>
          <span className="text-white">All rights reserved</span>
        </h3>
        <h3 className="uppercase font-medium md:text-xl text-sm text-center mt-4 text-white">
          Copyright &copy; {year}
        </h3>
        <h3 className="uppercase font-medium md:text-xl text-sm text-center mt-4">
          <span className="text-white tracking-wide mr-5">
            DESIGNED & DEVELOPED BY
          </span>
          <span className="text-orange-500">WINCID TECHNOLOGIES</span>
        </h3>
      </div>
    </footer>
  );
}
export default Footer