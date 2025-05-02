import profile from "../assets/DIRECTORpic.jpg";
import QuoteIcon from "../assets/QuoteIcon.svg";
import { useState } from "react";
export default function DirectorWord() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-full flex-col !px-[5%] md:!py-30 !py-10 flex h-auto ">
      <h1
        className="inline md:w-fit  uppercase md:text-[65px] text-[40px] md:text-left text-center font-extrabold text-hist-green font-rubik"
        style={{
          WebkitTextFillColor: isHovered ? "currentColor" : "transparent",
          WebkitTextStrokeWidth: isHovered ? "0px" : "2px",
          textShadow: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Mot du Directeur
      </h1>
      <div className="flex flex-col md:flex-row justify-between  gap-4 !mt-10">
        <div className="flex min-w-[30%] ">
          <div className="md:w-14 md:h-20  w-7 h-10 bg-hist-green flex-shrink-0"></div>
          <img
            src={profile}
            alt=""
            className="md:h-96 md:w-auto md:!mr-0 !mr-5 h-auto w-1/3"
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl w-max md:hidden font-medium text-hist-green relative z-10">
              Abdelkader Mazouz
            </p>
            <p className="text-lg md:hidden  text-hist-beige relative z-10">
              Directeur
            </p>
          </div>
        </div>
        <div className="relative flex flex-col justify-center w-full h-full !ml-10 text-hist-beige font-rubik">
          <img
            src={QuoteIcon}
            alt=""
            className="h-[60%] left-[18%] absolute top-0"
          />
          <div className="flex flex-col justify-between h-full">
            <p className="text-5xl hidden md:block font-medium text-hist-green mt-10 relative z-10">
              Abdelkader Mazouz
            </p>
            <p className="text-3xl hidden md:block text-hist-beige relative z-10 !mb-5">
              Directeur
            </p>
            <p className="md:text-[19px] text-sm font-normal text-gray-600 max-w-[95%] md:max-w-[90%] relative z-10">
              Bienvenue au{" "}
              <strong>Higher Institute of Science and Technology (HIST)</strong>
              ,où l’excellence académique et l’innovation forment les leaders de
              demain.{" "}
            </p>
            <p className="md:text-[19px] text-sm font-normal text-gray-600 max-w-[95%] md:max-w-[90%] relative z-10">
              À <strong>HIST</strong>, nous combinons savoir et savoir-faire
              pour préparer nos étudiants aux défis d’un monde en mutation. Nos
              formations, alignées sur les standards internationaux, favorisent
              la rigueur, la créativité et l’apprentissage centré sur
              l’étudiant.{" "}
            </p>
            <p className="md:text-[19px] text-sm  font-normal text-gray-600 max-w-[95%] md:max-w-[90%] relative z-10">
              Grâce à un environnement dynamique et des partenariats
              stratégiques, nous offrons à nos étudiants les{" "}
              <strong>outils</strong> et <strong>opportunités</strong> pour
              transformer leur potentiel en <strong>succès</strong>.{" "}
            </p>
            <p className="md:text-[19px] text-sm  font-normal text-gray-600 max-w-[95%] md:max-w-[90%] relative z-10">
              {" "}
              <strong>Rejoindre HIST</strong>, c’est choisir une formation
              d’excellence et un avenir prometteur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
