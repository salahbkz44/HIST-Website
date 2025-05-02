import histAcademy from "../../assets/hist-academy.png";
import Quote from "../../assets/Quote-academy.png";
export default function Presentation() {
  return (
    <div
      id="presentation"
      className="bg-[#F9F5F0] flex md:!gap-5 md:!py-8 md:!px-35 !px-8 items-center justify-end font-rubik "
    >
      <div className="relative !my-10">
        <img src={Quote} alt="" className="absolute w-4/5 top-0 right-0" />
        <div className="flex flex-col mx-auto md:!px-4 !py-8 md:!mt-20">
          <p className="md:text-xl text-sm font-semibold text-[#2D2D2D]">
            Programmes
          </p>
          <h1 className="md:text-8xl text-[43px] font-bold text-[#2D2D2D] !my-5 md:!my-10">
            HIST Academie
          </h1>
          <p className="md:text-2xl text-lg text-[#2D2D2D] md:!my-5 w-full md:w-11/12">
            <strong>HIST Academie</strong>, HIST académie, agréée par le
            ministère de l'enseignement supérieur et de la recherche
            scientifique sous le numéro d'agrément 1137, se distingue par
            l'enseignement en anglais des programmes de licences suivants:{" "}
          </p>
          <ul className="list-disc !ml-5">
            <li className="md:text-2xl text-lg text-[#2D2D2D] w-full md:w-11/12">
              Informatique et intelligences artificielle
            </li>
            <li className="md:text-2xl text-lg text-[#2D2D2D] w-full md:w-11/12">
              Management{" "}
            </li>
            <li className="md:text-2xl text-lg text-[#2D2D2D] w-full md:w-11/12">
              Marketing{" "}
            </li>
            <li className="md:text-2xl text-lg text-[#2D2D2D] w-full md:w-11/12">
              Management des ressources humaines{" "}
            </li>
            <li className="md:text-2xl text-lg text-[#2D2D2D] w-full md:w-11/12">
              Langue anglaise{" "}
            </li>
          </ul>
        </div>
      </div>
      <img src={histAcademy} alt="" className="w-3/8 md:block hidden" />
    </div>
  );
}
