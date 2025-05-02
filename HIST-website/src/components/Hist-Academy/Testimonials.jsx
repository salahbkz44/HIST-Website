import { useState } from "react";
import Quote from "../../assets/temoignageQuote.svg";
export default function Testimonial() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white flex flex-col !py-10 !px-10 md:!px-20 items-start justify-end font-rubik ">
      {" "}
      <h1
        className="inline md:w-fit  uppercase md:text-[55px] text-[38px] md:text-left text-center font-extrabold text-hist-green !mb-10 font-rubik"
        style={{
          WebkitTextFillColor: isHovered ? "currentColor" : "transparent",
          WebkitTextStrokeWidth: isHovered ? "0px" : "1px",
          textShadow: "none",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Témoignages :
      </h1>
      <div className="!py-3 w-screen">
        {" "}
        <div className="flex justify-between gap-8 items-center w-max  animate-marquee">
          <div className="strong-shadow w-100 !pl-10 !pr-20 !py-10">
            <div className="flex justify-between items-center !mb-5 ">
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-hist-green">Nani Abdelaziz</h1>
                <h2 className="text-xs text-hist-beige">informatique & IA</h2>
              </div>
              <img src={Quote} alt="" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 w-full">
              Grâce à HIST, j'ai eu l'opportunité de faire un stage qui m'a
              permis de comprendre comment les choses fonctionnent réellement
              dans une entreprise. Cela a rendu tout ce que nous étudions en
              classe beaucoup plus concret.
            </p>
          </div>
          <div className="strong-shadow w-100 !pl-10 !pr-20 !py-10">
            <div className="flex justify-between items-center !mb-5 ">
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-hist-green">
                  Snani Houssem Eddine
                </h1>
                <h2 className="text-xs text-hist-beige">management</h2>
              </div>
              <img src={Quote} alt="" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 w-full">
              En management, nous faisons beaucoup de travail en équipe et de
              présentations. Cela aide à développer la confiance en soi et les
              compétences en communication. Je me sens donc plus prêt pour le
              monde des affaires.
            </p>
          </div>
          <div className="strong-shadow w-100 !pl-10 !pr-20 !py-10">
            <div className="flex justify-between items-center !mb-5 ">
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-hist-green">
                  Sellam Charafeddinne
                </h1>
                <h2 className="text-xs text-hist-beige">informatique & IA</h2>
              </div>
              <img src={Quote} alt="" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 w-full">
              En tant qu’étudiant en informatique et IA, j’apprécie vraiment la
              façon dont HIST nous apprend à utiliser des outils et logiciels
              réels. Ce n’est pas seulement de la théorie — nous pratiquons
              vraiment et construisons des projets nous-mêmes.
            </p>
          </div>
          <div className="strong-shadow w-100 !pl-10 !pr-20 !py-10">
            <div className="flex justify-between items-center !mb-5 ">
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-hist-green">
                  Laribi Abderraouf
                </h1>
                <h2 className="text-xs text-hist-beige">informatique & IA</h2>
              </div>
              <img src={Quote} alt="" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 w-full">
              Je suis encore en première année, mais jusqu’à présent, je suis
              impressionné par l’organisation de l’école. Tout est clair, et les
              professeurs expliquent étape par étape. Cela rend la transition
              depuis le lycée beaucoup plus facile.
            </p>
          </div>
          <div className="strong-shadow w-100 !pl-10 !pr-20 !py-10">
            <div className="flex justify-between items-center !mb-5 ">
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-hist-green">
                  Debabi Salaheddine
                </h1>
                <h2 className="text-xs text-hist-beige">informatique & IA</h2>
              </div>
              <img src={Quote} alt="" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 w-full">
              Le semestre dernier, HIST a signé un partenariat avec l’Université
              du Missouri Central. C’est HIST qui a rendu cela possible, et cela
              m’a vraiment ouvert les yeux sur la possibilité de poursuivre mes
              études à l’étranger.
            </p>
          </div>
          <div className="strong-shadow w-100 !pl-10 !pr-20 !py-10">
            <div className="flex justify-between items-center !mb-5 ">
              <div className="flex flex-col justify-between">
                <h1 className="font-medium text-hist-green">Khadidja </h1>
                <h2 className="text-xs text-hist-beige">management</h2>
              </div>
              <img src={Quote} alt="" className="h-8" />
            </div>
            <p className="text-sm text-gray-600 w-full">
              En tant qu’étudiante en management, j’ai beaucoup appris sur le
              leadership et la prise de décision. Les cours sont interactifs, et
              nous travaillons souvent sur des études de cas réelles, ce qui
              facilite la compréhension du fonctionnement des entreprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
