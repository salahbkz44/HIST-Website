import { useState } from "react";
import ContactUsImage1 from "../assets/ContactUs1.png";
import ContactUsImage2 from "../assets/ContactUs2.png";
import ContactUsImage3 from "../assets/ContactUs3.png";

export default function ContactUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="h-1 w-screen bg-[#2D2D2D33]">
        {" "}
        <div className="h-full bg-[#2D2D2DCC] w-4/6"></div>
      </div>
      <div className="w-full flex justify-around items-center bg-[#02382B0D]">
        <div className="flex flex-col items-center  justify-center w-1/2 h-full gap-8 !p-10 !pl-30">
          <div className="flex flex-col ">
            <h1
              className="inline w-fit uppercase text-[65px] font-extrabold text-hist-green text-left font-rubik"
              style={{
                WebkitTextFillColor: isHovered ? "currentColor" : "transparent",
                WebkitTextStrokeWidth: isHovered ? "0px" : "2px",
                textShadow: "none",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Contact Us
            </h1>
            <p className="font-poppins text-xl">
              We are here to help you with any questions or support you need.
            </p>
          </div>
          <form className="flex flex-col items-start w-full gap-8">
            <div className="flex gap-5 w-full">
              <input
                type="text"
                placeholder="Your name"
                className="w-2/5 !p-4 bg-white rounded-sm text-xl border border-form-border-beige focus:outline-none focus:ring-2 focus:ring-hist-green"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-3/5 !p-4 bg-white rounded-sm text-xl border border-form-border-beige focus:outline-none focus:ring-2 focus:ring-hist-green"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full !p-4 bg-white rounded-sm text-xl border border-form-border-beige focus:outline-none focus:ring-2 focus:ring-hist-green"
              rows="6"
            ></textarea>
            <button
              type="submit"
              className="w-full !p-4  text-xl font-regular text-white bg-hist-green hover:font-medium hover:bg-green-900"
            >
              SEND
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-around w-1/2 h-full gap-3">
          <div className=" flex items-center justify-end space-x-4 mt-4">
            <img
              src={ContactUsImage3}
              alt=""
              style={{ objectFit: "contain" }}
              className="h-2/3 max-w-10/12"
            />
          </div>
          <div className=" flex items-start space-x-4 mt-4 gap-5">
            <img
              src={ContactUsImage1}
              alt=""
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              className="w-5/12"
            />
            <img
              src={ContactUsImage2}
              alt=""
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              className="w-2/5"
            />
          </div>
        </div>
      </div>
    </>
  );
}
