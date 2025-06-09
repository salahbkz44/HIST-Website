import Facebook from "../assets/facebook-icon.svg";
import LinkedIn from "../assets/linkedin-icon.svg";
import Instagram from "../assets/instagram-icon.svg";
import Logo from "../assets/ContactSectionLogo.png";
import Tiktok from "../assets/tiktok-icon.svg";
import MapsPic from "../assets/maps2.png";

export default function ContactSection() {
  return (
    <>
      <div
        id="contact"
        className="flex w-full md:flex-row flex-col bg-hist-beige justify-end md:!pl-15 font-rubik"
      >
        <div className="relative flex md:flex-row flex-col    overflow-hidden">
          {/* Left Column - Logo + Social Media */}
          <div className="md:w-auto w-full md:!px-0 md:!pl-5 !px-10 flex flex-col items-start justify-center text-white">
            {/* Logo */}
            <div className="mb-6">
              <img src={Logo} alt="" className="md:h-4/5 w-4/5 md:w-auto" />
            </div>

            {/* Social Media */}
            <div>
              <p className="font-semibold text-white !mb-2 uppercase">
                Adresse :
              </p>
              <p className="font-normal text-black text-sm w-full md:w-2/3">
                HaouchKaouch, N 22, Lot. 04 GP 486 sec 2, Dely Ibrahim, Algiers,
                Algeria
              </p>
            </div>
          </div>
          <div className="md:w-1/3 md:!pt-8 !pt-5 md:!px-0 !px-10 text-black flex flex-col justify-start">
            <div className="flex md:flex-row flex-col justify-between items-start gap-10 !mr-2">
              <div>
                <div className="flex flex-col">
                  <h1 className="uppercase underline font-bold text-white text-[25px]">
                    contact
                  </h1>
                  <div className="flex justify-between gap-4 !mt-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-3">
                        <p className="text-hist-green font-medium block text-sm">
                          HIST :
                        </p>
                        <p className="text-[#292E3D] text-sm block">
                          contact@hist.edu.dz
                        </p>{" "}
                      </div>
                      <div className="flex items-start justify-start gap-2 ">
                        <a href="https://www.linkedin.com/company/histalgeria">
                          <img
                            src={LinkedIn}
                            alt=""
                            className="h-8  hover:scale-110 transition-transform duration-300"
                          />
                        </a>

                        <a
                          href="https://www.facebook.com/share/16RiT9qx6p/"
                          className="flex flex-col items-center"
                        >
                          <img
                            src={Facebook}
                            alt=""
                            className="h-8 hover:scale-110 transition-transform duration-300"
                          />
                          <p className="text-white text-[8px]">HIST</p>
                        </a>
                        <a
                          href="https://www.instagram.com/hist.edu.dz/"
                          className="flex flex-col items-center"
                        >
                          <img
                            src={Instagram}
                            alt=""
                            className="h-8 hover:scale-110 transition-transform duration-300"
                          />
                          <p className="text-white text-[8px]">HIST</p>
                        </a>
                        <a href="https://www.tiktok.com/@hist.edu.dz?_t=ZM-8vS1wRTwXfb&_r=1">
                          <img
                            src={Tiktok}
                            alt=""
                            className="h-8 hover:scale-110 transition-transform duration-300"
                          />
                        </a>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-hist-green font-medium text-sm">
                          CEC :
                        </p>
                        <p className="text-[#292E3D] text-sm">
                          contact-cec@hist.edu.dz{" "}
                        </p>
                      </div>
                      <div className="flex items-start justify-start gap-2">
                        <a
                          href="https://www.facebook.com/share/1QrPHruGre/"
                          className="flex flex-col items-center"
                        >
                          <img
                            src={Facebook}
                            alt=""
                            className="h-8 hover:scale-110 transition-transform duration-300"
                          />
                          <p className="text-white text-[8px]">CEC</p>
                        </a>
                        <a
                          href="https://www.instagram.com/hist.cec/"
                          className="flex flex-col items-center"
                        >
                          <img
                            src={Instagram}
                            alt=""
                            className="h-8 hover:scale-110 transition-transform duration-300"
                          />
                          <p className="text-white text-[8px]">CEC</p>
                        </a>
                      </div>
                      <div className="flex gap-3">
                        <p className="text-hist-green font-medium text-sm">
                          HRP :
                        </p>
                        <p className="text-[#292E3D] text-sm">
                          contact-hrp@hist.edu.dz
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col">
                  <h1 className="uppercase underline font-bold text-white text-[25px]">
                    téléphone
                  </h1>
                  <div className="flex flex-col gap-4 !mt-3">
                    <p className="text-[#292E3D] text-sm">+213 5602 19849</p>{" "}
                    <p className="text-[#292E3D] text-sm">+213 6706 99273 </p>
                    <p className="text-[#292E3D] text-sm">+213 5602 33689</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Map with angled clip */}

          <div className="md:w-1/3 md:h-full h-auto w-full md:-ml-[10%] overflow-hidden">
            <a href="https://maps.app.goo.gl/FWFvgwpVAugCRhY58">
              <img src={MapsPic} alt="" className="w-full clip" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full justify-center items-center flex bg-hist-green text-white !py-4">
        <p className="text-center text-xs font-roboto font-light">
          © 2025 Higher Institute of Science & Technology. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
