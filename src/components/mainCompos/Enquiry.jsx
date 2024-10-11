
import { contact } from "@/constants/contact";

import './enq.css';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Enquiry = () => {

  return (
    <>
      <div className="flex flex-wrap py-20 px-10 gap-10 justify-evenly bg-[#e7e7e7]">

        <div class="card">
          <div class="card-inner">
            <div class="card-front bg-[#0F063F]">
              <p className="flex justify-center flex-col text-[max(1.3vw,18px)] items-center gap-3">
                <FaPhone color={"#f58720"} className="md:size-10 size-6" />
                {"PHONE"}
              </p>
            </div>
            <div class="card-back flex flex-col">
              <p className="text-[max(1.3vw,15px)]">+91-{contact.phone}</p>
              <p className="text-[max(1.3vw,15px)]">+91-{contact.phoneTwo}</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front bg-[#0F063F]">
              <p className="flex justify-center flex-col text-[max(1.3vw,18px)] items-center gap-3">
                <MdEmail color={"#f58720"} className="md:size-14 size-8" />
                {"E-MAIL"}
              </p>
            </div>
            <div class="card-back flex flex-col">
              <p className="text-[max(1.3vw,13px)]">{contact.email}</p>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}
export default Enquiry