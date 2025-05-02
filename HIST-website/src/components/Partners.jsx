import { useState } from "react";
import Caroussel from "./PartnersCarousel";
import FAU from "../assets/FAU.png";
import UCM from "../assets/UCM.webp";
import VATELFR from "../assets/VATELFRANCE.svg";
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
          <h1 className="md:text-[1.8rem] text-lg uppercase tracking-[0.2em] font-poppins  font-medium  !mt-10 text-hist-green">
            PARTENAIRES
          </h1>
          <h1
            className="inline md:w-fit  uppercase md:text-[65px] text-[34px]  font-extrabold md:!mb-0 !mb-8 text-hist-green font-rubik"
            style={{
              WebkitTextFillColor: isHovered ? "currentColor" : "transparent",
              WebkitTextStrokeWidth: isHovered ? "0px" : "2px",
              textShadow: "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            NOS PARTENAIRES
          </h1>
          <p className="font-poppins text-lg md:text-xl md:text-left text-center">
            Grâce à nos partenariats avec des universités américaines et
            d’autres institutions prestigieuses à l'international, vous
            bénéficiez d'une formation académique d'excellence, reconnue
            mondialement, qui valorise vos diplômes et renforce votre position
            sur le marché de l'emploi.
          </p>
          <div className="flex md:flex-row flex-col md:justify-evenly justify-between gap-10 items-center  !my-15">
            <div>
              <a
                href="https://www.fau.edu/"
                className="flex flex-col gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FAU} alt="" className="md:h-40" />
                <h1 className="font-rubik text-3xl text-center">FAU</h1>
              </a>
            </div>
            <div>
              <a
                href="https://www.ucmo.edu/"
                className="flex flex-col gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={UCM} alt="" className="md:h-40" />
                <h1 className="font-rubik text-3xl text-center">UCM</h1>
              </a>
            </div>
            <div>
              <a
                href="https://www.vatel.dz"
                className="flex flex-col gap-2  justify-center items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={VATELFR} alt="" className="md:h-40 md:w-auto w-1/2" />
                <h1 className="font-rubik text-3xl text-center">VATEL</h1>
              </a>
            </div>
          </div>
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
