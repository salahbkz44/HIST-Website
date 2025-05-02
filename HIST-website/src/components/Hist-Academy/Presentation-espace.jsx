import histAcademy from "../../assets/hist-academy.png";
import Quote from "../../assets/Quote-academy.png";
export default function Presentation() {
  return (
    <div
      id="espace-etudiant"
      className="bg-[#F9F5F0] flex  md:!py-30 md:!px-35  !px-8 items-center justify-end font-rubik strong-top-bottom-inset  "
    >
      <img src={histAcademy} alt="" className="md:w-3/8 md:block hidden" />
      <div className="relative !my-10 md:!ml-20">
        <img src={Quote} alt="" className="absolute top-0 left-0 w-4/5" />
        <div className="flex flex-col mx-auto md:!px-4 !py-8 md:!mt-20">
          <p className="md:text-xl text-sm font-semibold text-[#2D2D2D]">
            Contenu
          </p>
          <h1 className="md:text-8xl text-[43px] font-bold text-[#2D2D2D] !my-5 md:!my-10">
            Espace Étudiant
          </h1>
        </div>
      </div>
    </div>
  );
}
