import { useState } from "react";
import ContactUsImage1 from "../assets/ContactUs1.png";
import ContactUsImage2 from "../assets/ContactUs2.png";
import ContactUsImage3 from "../assets/ContactUs3.png";

export default function ContactUs() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "b5476e96-c66f-4204-920a-6f440378be49");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="h-1 w-screen bg-[#2D2D2D33]">
        {" "}
        <div className="h-full bg-[#2D2D2DCC] w-4/6"></div>
      </div>
      <div className="w-full flex !py-15 md:!py-0 justify-around items-center bg-[#02382B0D]">
        <div className="flex flex-col items-center  justify-center w-full md:w-1/2 h-full gap-8 !px-[3%] md:!p-10 md:!pl-30">
          <div className="flex flex-col md:justify-start items-center md:items-start w-full">
            <h1
              className="inline w-fit uppercase text-4xl md:text-[65px] font-extrabold text-hist-green text-center md:text-left font-rubik"
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
            <p className="font-poppins text-lg md:text-xl md:text-left text-center">
              We are here to help you with any questions or support you need.
            </p>
          </div>
          <form
            className="flex flex-col items-start w-full gap-4 md:gap-8 md:!px-0 !px-5"
            onSubmit={onSubmit}
          >
            <div className="flex md:flex-row flex-col gap-5 w-full">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="md:w-2/5 w-full !p-4 bg-white rounded-sm text-xl border border-form-border-beige focus:outline-none focus:ring-2 focus:ring-hist-green"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="md:w-3/5 w-full !p-4 bg-white rounded-sm text-xl border border-form-border-beige focus:outline-none focus:ring-2 focus:ring-hist-green"
                required
              />
            </div>
            <textarea
              placeholder="Message"
              name="message"
              className="w-full !p-4 bg-white rounded-sm text-xl border border-form-border-beige focus:outline-none focus:ring-2 focus:ring-hist-green"
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full !p-4  text-xl font-regular text-white bg-hist-green hover:font-medium hover:bg-green-900"
            >
              SEND
            </button>
          </form>
        </div>
        <div className="hidden md:flex flex-col items-center justify-around w-1/2 h-full gap-3">
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
