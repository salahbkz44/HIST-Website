import AdmissionCallPic from "../../assets/admissionCallPic.png";
import RightArrow from "../../assets/rightArrow.svg";
import { Link } from "react-router-dom";
export default function AdmissionCall() {
  return (
    <div className="flex flex-col md:flex-row !px-8 md:!px-20 !py-10 md:!py-20 font-rubik justify-between w-full">
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-semibold !mb-5">Pour l'inscription</h1>
        <p className="text-md font-normal text-[#2D2D2D] !mb-10">
          Veuillez cliquer ci-dessous pour accéder au formulaire d'inscription.
        </p>
        <Link to={"/admission"}>
          <button
            className="md:!px-6 !px-2 md:!py-4 !py-2 bg-hist-beige w-fit
          text-black md:text-sm text-[10px] font-normal hover:bg-form-border-beige md:hover:text-[15px] hover:font-medium rounded-lg flex justify-center items-center gap-1 md:gap-2"
          >
            {" "}
            <p>Inscrivez-vous maintenant</p>
            <img src={RightArrow} alt="" className="h-2" />
          </button>
        </Link>
      </div>
      <div className="flex justify-end items-center">
        <img src={AdmissionCallPic} alt="" className="md:w-full w-3/4" />
      </div>
    </div>
  );
}
