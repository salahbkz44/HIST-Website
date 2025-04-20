import { useState } from "react";
import Caroussel from "./PartnersCarousel";
export default function Partners() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="h-1 w-full bg-[#2D2D2D33]">
        {" "}
        <div className="h-full bg-[#2D2D2DCC] w-2/6"></div>
      </div>
      <div className="w-full flex justify-center !py-0 md:!py-10 items-center">
        <div className="w-[85%] flex flex-col !mb-20">
          <h1 className="md:text-[1.8rem] text-xl uppercase tracking-[0.2em] font-poppins  font-medium  !mt-10 text-hist-green">
            PARTNERS
          </h1>
          <h1
            className="inline md:w-fit  uppercase md:text-[65px] text-[40px]  font-extrabold md:!mb-0 !mb-8 text-hist-green font-rubik"
            style={{
              WebkitTextFillColor: isHovered ? "currentColor" : "transparent",
              WebkitTextStrokeWidth: isHovered ? "0px" : "2px",
              textShadow: "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            OUR COLLABORATORS
          </h1>
          <Caroussel />
          <div className="flex gap-4">
            <div className="w-3 h-2 bg-hist-green"></div>
            <div className="w-3 h-2 bg-hist-green"></div>
            <div className="w-14 h-2 bg-hist-beige"></div>
          </div>
        </div>
      </div>
    </>
  );
}
