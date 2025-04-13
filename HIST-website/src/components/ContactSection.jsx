import Facebook from "../assets/facebook-icon.svg";
import LinkedIn from "../assets/linkedin-icon.svg";
import Twitter from "../assets/X-icon.svg";
import Logo from "../assets/ContactSectionLogo.png";
import MapsPic from "../assets/maps2.png";

export default function ContactSection() {
  return (
    <>
      <div className="h-1 w-screen bg-[#2D2D2D33]">
        {" "}
        <div className="h-full bg-[#2D2D2DCC] w-5/6"></div>
      </div>
      <div className="flex w-full justify-between bg-hist-beige justify-end !pl-20">
        <div className="relative flex !pl-1/8   overflow-hidden">
          {/* Left Column - Logo + Social Media */}
          <div className="w-1/3  flex flex-col items-start justify-center text-white">
            {/* Logo */}
            <div className="mb-6">
              <img src={Logo} alt="" className="h-4/5" />
            </div>

            {/* Social Media */}
            <div>
              <p className="font-bold text-white !mb-2">SOCIAL MEDIA :</p>
              <div className="flex space-x-4">
                <div className="  hover:scale-110 transition">
                  <a href="https://www.facebook.com/">
                    <img src={Facebook} alt="Facebook" className="h-10/12" />
                  </a>
                </div>
                <div className="hover:scale-110 transition">
                  <a href="https://www.linkedin.com/">
                    <img src={LinkedIn} alt="LinkedIn" className="h-10/12" />
                  </a>
                </div>
                <div className="hover:scale-110 transition">
                  <a href="https://twitter.com/">
                    <img src={Twitter} alt="Twitter" className="h-10/12" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/3 !p-8 text-black flex flex-col justify-center">
            <div className="flex gap-2">
              <div className="w-2/5 ">
                <p className="font-bold mb-2 text-white">ADRESSE : </p>
              </div>
              <div className="flex flex-col">
                <span className="font-normal text-black">
                  HaouchKaouch, N 22, Lot. 04 GP 486 sec 2, Dely Ibrahim,
                  Algiers, Algeria
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 ">
                <p className="font-bold mb-2 text-white">PHONE : </p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="font-normal text-black">+213 6102 27034</span>
                <span className="font-normal text-black">+213 6102 27034</span>
                <span className="font-normal text-black">+213 6102 27034</span>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 ">
                <p className="font-bold mb-2 text-white">EMAIL HIST : </p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="font-normal text-black">
                  contact@hist.edu.dz
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 ">
                <p className="font-bold mb-2 text-white">EMAIL CEC : </p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="font-normal text-black">
                  contact-cec@hist.edu.dz
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/4 ">
                <p className="font-bold mb-2 text-white">EMAIL HRP : </p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <span className="font-normal text-black">
                  contact-hrp@hist.edu.dz
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Map with angled clip */}
          <div
            className="w-1/3 -ml-[10%] overflow-hidden"
            style={{
              clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          >
            <a href="https://maps.app.goo.gl/FWFvgwpVAugCRhY58">
              <img src={MapsPic} alt="" className="w-full" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex bg-hist-green text-white !py-4">
        <p className="text-center text-xs font-roboto font-light">
          © 2025 Higher Institute of Science and Technology. All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}
