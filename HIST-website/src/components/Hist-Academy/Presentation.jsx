import histAcademy from "../../assets/hist-academy.png";
import Quote from "../../assets/Quote-academy.png";
export default function Presentation() {
  return (
    <div className="bg-[#F9F5F0] flex !gap-5 !py-8 !px-35 items-center justify-end font-rubik ">
      <div className="relative !my-10">
        <img src={Quote} alt="" className="absolute top-0 right-0" />
        <div className="flex flex-col mx-auto !px-4 !py-8 !mt-20">
          <p className="text-xl font-semibold text-[#2D2D2D]">Programmes</p>
          <h1 className="text-8xl font-bold text-[#2D2D2D] !my-10">
            HIST Academie
          </h1>
          <p className="text-2xl text-[#2D2D2D] !my-5 w-11/12">
            <strong>HIST University</strong>, agréée par le Ministère de
            l'Enseignement Supérieur et de la recherche, se distingue par
            l'enseignement en anglais de ses programmes de licence en
            Management, Marketing, Informatique et Intelligence Artificielle,
            Gestion des Ressources Humaines, et Langue Anglaise.
          </p>
        </div>
      </div>
      <img src={histAcademy} alt="" className="w-3/8" />
    </div>
  );
}
