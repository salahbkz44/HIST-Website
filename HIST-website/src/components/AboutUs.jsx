import pic from "../assets/aboutus.svg";
import picmobile from "../assets/aboutusmobile.svg";
export default function AboutUs() {
  return (
    <div>
      <div className="h-1 w-screen bg-[#2D2D2D33]">
        <div className="h-full bg-[#2D2D2DCC] w-1/6"></div>
      </div>
      <div className="w-full flex-col !pl-[8%] md:!py-25 !py-11 flex bg-hist-beige-light">
        <div className="flex md:flex-row flex-col justify-between !mt-0 md:!mt-10">
          <div className="flex flex-col">
            <h1 className="md:text-[2rem] !mb-3 md:!mb-0 text-xl uppercase tracking-[0.2em] font-poppins font-medium mt-10 text-hist-text-beige">
              About Us
            </h1>
            <h1 className="font-poppins !mb-5 md:!mb-0 md:text-[3.25rem] text-4xl font-bold text-[#1E1E1E]">
              Who Is HIST
            </h1>
            <p className="md:text-2xl text-lg leading-[1.5] mt-5 w-11/12 text-left text-[#1A1A1A] text-roboto">
              <strong>HIST Higher Institute of Science and Technology</strong>{" "}
              est une institution privée innovante située à Dely Brahim, Alger,
              regroupant trois entités complémentaires :{" "}
              <a href="" className="font-bold text-hist-green">
                HIST University
              </a>
              ,{" "}
              <a href="" className="font-bold text-hist-green">
                CEC – Continuing Education Center
              </a>
              , et{" "}
              <a href="" className="font-bold text-hist-green">
                le Centre de Recherche HRP
              </a>
              . <br /> <strong>HIST</strong> incarne une vision moderne de
              l'enseignement supérieur, combinant excellence académique,
              expertise professionnelle et engagement dans la recherche pour
              former les leaders de demain.
            </p>
          </div>
          {/* Updated image section */}
          <div
            className="hidden md:flex items-center justify-center bg-cover !py-30 min-w-99/200"
            style={{ backgroundImage: `url(${pic})` }}
          >
            <h1
              className="text-white font-epilogue font-bold text-5xl md:text-7xl"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              HIST ACADEMY
            </h1>
          </div>
          <div
            className="md:hidden flex items-center justify-center bg-contain bg-no-repeat !py-16 !mt-10 w-full"
            style={{ backgroundImage: `url(${picmobile})` }}
          >
            <h1
              className="text-white font-epilogue font-bold text-5xl md:text-7xl"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              HIST ACADEMY
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
