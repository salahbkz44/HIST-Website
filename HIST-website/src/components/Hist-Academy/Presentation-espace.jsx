import histAcademy from "../../assets/hist-academy.png";
import Quote from "../../assets/Quote-academy.png";
export default function Presentation() {
  return (
    <div className="bg-[#F9F5F0] flex  !py-30 !px-35 items-center justify-end font-rubik ">
      <img src={histAcademy} alt="" className="w-3/8" />
      <div className="relative !my-10 !ml-20">
        <img src={Quote} alt="" className="absolute top-0 left-0" />
        <div className="flex flex-col mx-auto !px-4 !py-8 !mt-20">
          <p className="text-xl font-semibold text-[#2D2D2D]">Content</p>
          <h1 className="text-8xl font-bold text-[#2D2D2D] !my-10">
            Espace Etudiant
          </h1>
        </div>
      </div>
    </div>
  );
}
