import { useState } from "react";
import managment from "../../assets/programs/managment-license.png";
import marketing from "../../assets/programs/marketing-license.png";
import ai from "../../assets/programs/Ai-license.png";
import gdrh from "../../assets/programs/gdrh-license.png";
import englais from "../../assets/programs/englais-license.png";
import managmentMobile from "../../assets/programs/managment-license-mobile.png";
import marketingMobile from "../../assets/programs/marketing-license-mobile.png";
import aiMobile from "../../assets/programs/Ai-license-mobile.png";
import gdrhMobile from "../../assets/programs/gdrh-license-mobile.png";
import englaisMobile from "../../assets/programs/englais-license-mobile.png";
import { Link } from "react-router-dom";

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState("license");

  const shadowStyle = {
    boxShadow:
      "0 -4px 8px -4px rgba(0, 0, 0, 0.1), 4px 0 8px -4px rgba(0, 0, 0, 0.1), -4px 0 8px -4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div
        id="nos-programs"
        className="w-full bg-gradient-to-b from-[#F9F5F0] to-[#d9d6d0] font-rubik"
      >
        <div className="flex w-full justify-center">
          <div className="flex md:w-full w-4/5 justify-center space-x-2 relative">
            {/* LICENSE Tab */}
            <button
              onClick={() => setActiveTab("license")}
              className={`md:!px-40 md:!py-8 !px-4 !py-4 md:leading-normal leading-tight font-semibold md:text-3xl text-lg transition-all duration-200 ${
                activeTab === "license"
                  ? "bg-white rounded-t-xl md:rounded-t-lg"
                  : "text-neutral-800"
              }`}
              style={activeTab === "license" ? shadowStyle : {}}
            >
              Programmes De Licence
            </button>

            {/* MASTER Tab */}
            <button
              onClick={() => setActiveTab("master")}
              className={`md:!px-40 md:!py-8 !px-4 !py-4 md:leading-normal leading-tight font-semibold md:text-3xl text-lg transition-all duration-200 ${
                activeTab === "master"
                  ? "bg-white rounded-t-xl md:rounded-t-lg"
                  : "text-neutral-800"
              }`}
              style={activeTab === "master" ? shadowStyle : {}}
              disabled
            >
              Programmes De Master
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-1/2 flex items-center justify-center text-4xl   text-black">
        {activeTab === "license" ? (
          <div className="w-full  bg-white flex flex-col items-center justify-center text-4xl  ">
            <div className="w-full !px-5 md:!px-20 !pt-10 !pb-20  md:!py-20 flex flex-row justify-between items-start">
              <div className="relative">
                <h1 className="font-bold font-rubik md:text-[200px] text-9xl text-[#00000027] absolute top-0 left-0">
                  01
                </h1>
                <div className="flex flex-col !mt-15 !pl-5 md:!pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      Programme
                    </h5>
                  </div>
                  <h1 className="font-bold md:text-5xl text-4xl font-rubik !my-8">
                    Management
                  </h1>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Objectif de la formation :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    Former des professionnels capables de gérer et optimiser les
                    ressources d’une organisation en appliquant des stratégies
                    managériales efficaces.
                  </p>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Contenu du programme :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    <span className="underline font-semibold">
                      Gestion et stratégie
                    </span>{" "}
                    <span className="font-semibold">: </span>Principes du
                    management, gestion de projet, leadership. <br />{" "}
                    <span className="underline font-semibold">
                      Marketing et communication{" "}
                    </span>
                    <span className="font-semibold">: </span>Stratégies
                    marketing, gestion de la relation client, digital marketing.
                    ordinateur.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Finance et comptabilité{" "}
                    </span>
                    <span className="font-semibold">: </span>Analyse financière,
                    contrôle de gestion, gestion budgétaire.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Ressources humaines{" "}
                    </span>
                    <span className="font-semibold">: </span>Gestion du
                    personnel, droit du travail, culture d’entreprise.
                  </p>

                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Débouchés professionnels :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Manager d’entreprise / Responsable d’unité</li>{" "}
                    <li>Chef de projet / Consultant en stratégie</li>{" "}
                    <li>Responsable RH / Gestionnaire de talents </li>{" "}
                    <li>Entrepreneur / Créateur de start-up</li>
                  </ul>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Conditions d’admission :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Bac général, économique ou technique</li>{" "}
                    <li>
                      Intérêt pour la gestion, l’analyse et la prise de décision
                    </li>{" "}
                  </ul>
                  <img
                    src={managmentMobile}
                    alt=""
                    className="md:hidden block"
                  />
                  <Link to={"/admission"}>
                    <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                      REJOINDRE le programme
                    </button>
                  </Link>
                </div>
              </div>

              <img src={managment} alt="" className="h-full md:block hidden" />
            </div>
            <div className="w-full md:!pl-10 !py-20 bg-[#02382B0D] flex flex-row justify-between items-start">
              <img src={marketing} alt="" className="w-2/5  md:block hidden" />
              <div className="relative !ml-10 md:!ml-20">
                <h1 className="font-bold font-rubik md:text-[200px] text-9xl text-[#00000027] absolute top-0 left-0">
                  02
                </h1>
                <div className="flex flex-col !mt-15  md:!pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      Programme
                    </h5>
                  </div>
                  <h1 className="font-bold md:text-5xl text-4xl font-rubik !my-8">
                    Marketing
                  </h1>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Objectif de la formation :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    Former des spécialistes en marketing capables de concevoir
                    et mettre en œuvre des stratégies innovantes pour promouvoir
                    des produits et services.
                  </p>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Contenu du programme :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    <span className="underline font-semibold">
                      Fondamentaux du marketing
                    </span>{" "}
                    <span className="font-semibold">: </span>Marketing
                    stratégique et opérationnel, comportement du consommateur{" "}
                    <br />{" "}
                    <span className="underline font-semibold">
                      Communication et digital{" "}
                    </span>
                    <span className="font-semibold">: </span>Marketing digital,
                    réseaux sociaux, publicité et relations publiques.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Études et analyses{" "}
                    </span>
                    <span className="font-semibold">: </span> Analyse de marché,
                    veille concurrentielle, data marketing.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Gestion et stratégie{" "}
                    </span>
                    <span className="font-semibold">: </span>Brand management,
                    gestion de la relation client, techniques de vente.
                  </p>

                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Débouchés professionnels :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Responsable marketing / Chef de produit</li>{" "}
                    <li>Chargé d’études marketing / Analyste de marché</li>{" "}
                    <li> Community manager / Digital marketer </li>{" "}
                    <li>Consultant en stratégie marketing</li>
                  </ul>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Conditions d’admission :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Bac général, économique ou technologique</li>{" "}
                    <li>
                      Intérêt pour la communication, l’analyse de données et la
                      créativité
                    </li>{" "}
                  </ul>
                  <img
                    src={marketingMobile}
                    alt=""
                    className="md:hidden block"
                  />
                  <Link to={"/admission"}>
                    <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                      REJOINDRE le programme
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full  !px-5 md:!px-20 !pt-10 !pb-20  md:!py-20 flex flex-row justify-between items-start">
              <div className="relative">
                <h1 className="font-bold font-rubik md:text-[200px] text-9xl text-[#00000027] absolute top-0 left-0">
                  03
                </h1>
                <div className="flex flex-col !mt-15 !pl-5 md:!pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      Programme
                    </h5>
                  </div>
                  <h1 className="font-bold md:text-5xl text-4xl font-rubik !my-8">
                    Informatique et Intelligence Artificielle
                  </h1>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Objectif de la formation :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    Former des experts en informatique avec une spécialisation
                    en intelligence artificielle, capables de concevoir,
                    développer et optimiser des solutions technologiques
                    avancées.
                  </p>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Contenu du programme :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    <span className="underline font-semibold">
                      Informatique générale
                    </span>{" "}
                    <span className="font-semibold">: </span>Algorithmique,
                    programmation, bases de données, systèmes d’exploitation.{" "}
                    <br />{" "}
                    <span className="underline font-semibold">
                      Intelligence Artificielle{" "}
                    </span>
                    <span className="font-semibold">: </span>Machine learning,
                    deep learning, traitement du langage naturel,vision par
                    ordinateur.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Compétences transversales{" "}
                    </span>
                    <span className="font-semibold">: </span>Machine learning,
                    Mathématiques appliquées, gestion de projet, éthique et
                    cybersécurité.
                  </p>

                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Débouchés professionnels :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Développeur IA / Data Scientist</li>{" "}
                    <li>Ingénieur en apprentissage automatique</li>{" "}
                    <li> Analyste de données / Expert en cybersécurité </li>{" "}
                    <li>Chef de projet en innovation technologique</li>
                  </ul>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Conditions d’admission :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Bac scientifique ou technique</li>{" "}
                    <li>
                      Compétences en mathématiques et en programmation
                      recommandées
                    </li>{" "}
                  </ul>
                  <img src={aiMobile} alt="" className="md:hidden block" />
                  <Link to={"/admission"}>
                    <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                      REJOINDRE le programme
                    </button>
                  </Link>
                </div>
              </div>

              <img src={ai} alt="" className="h-full  md:block hidden" />
            </div>
            <div className="w-full md:!pl-10 !py-20 bg-[#02382B0D] flex flex-row justify-between items-start">
              <img src={gdrh} alt="" className="w-2/5  md:block hidden" />
              <div className="relative  !ml-10 md:!ml-20">
                <h1 className="font-bold font-rubik md:text-[200px] text-9xl text-[#00000027] absolute top-0 left-0">
                  04
                </h1>
                <div className="flex flex-col !mt-15  md:!pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      Programme
                    </h5>
                  </div>
                  <h1 className="font-bold md:text-5xl text-4xl font-rubik !my-8">
                    Gestion des <br /> Ressources Humaines
                  </h1>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Objectif de la formation :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    Former des experts en gestion des ressources humaines
                    capables de recruter, gérer et développer le capital humain
                    d’une organisation.
                  </p>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Contenu du programme :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    <span className="underline font-semibold">
                      Fondements des RH
                    </span>{" "}
                    <span className="font-semibold">: </span>Recrutement,
                    gestion des talents, droit du travail. <br />{" "}
                    <span className="underline font-semibold">
                      Développement organisationnel{" "}
                    </span>
                    <span className="font-semibold">: </span>Stratégie RH,
                    gestion des carrières, audit social.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Gestion administrative{" "}
                    </span>
                    <span className="font-semibold">: </span> Paie, gestion du
                    temps de travail, relations sociales.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Compétences transversales{" "}
                    </span>
                    <span className="font-semibold">: </span>Leadership,
                    communication, gestion du changement.
                  </p>

                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Débouchés professionnels :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Responsable RH / Chargé de recrutement</li>{" "}
                    <li>Gestionnaire de formation / Consultant RH</li>{" "}
                    <li>Responsable paie / Administrateur du personnel </li>{" "}
                    <li>Coach en développement professionnelue</li>
                  </ul>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Conditions d’admission :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Bac général, économique ou technologique</li>{" "}
                    <li>
                      Intérêt pour la gestion, la psychologie du travail et la
                      communication
                    </li>{" "}
                  </ul>
                  <img src={gdrhMobile} alt="" className="md:hidden block" />
                  <Link to={"/admission"}>
                    <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                      REJOINDRE le programme
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full  !px-5 md:!px-20 !pt-10 !pb-20  md:!py-20 flex flex-row justify-between items-start">
              <div className="relative">
                <h1 className="font-bold font-rubik md:text-[200px] text-9xl text-[#00000027] absolute top-0 left-0">
                  05
                </h1>
                <div className="flex flex-col !mt-15 !pl-5 md:!pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      Programme
                    </h5>
                  </div>
                  <h1 className="font-bold md:text-5xl text-4xl font-rubik !my-8">
                    Licence en Langue Anglaise
                  </h1>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Objectif de la formation :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    Former des spécialistes de la langue anglaise, dotés de
                    compétences linguistiques et culturelles avancées, leur
                    permettant d’intégrer divers secteurs professionnels ou de
                    poursuivre des études supérieures.
                  </p>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Contenu du programme :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
                    <span className="underline font-semibold">
                      Maîtrise de la langue
                    </span>{" "}
                    <span className="font-semibold">: </span>Compréhension et
                    expression écrites et orales, grammaire, linguistique et
                    phonétique. <br />{" "}
                    <span className="underline font-semibold">
                      Littérature et culture{" "}
                    </span>
                    <span className="font-semibold">: </span>Étude de textes
                    littéraires, civilisation anglo-saxonne.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Techniques de communication{" "}
                    </span>
                    <span className="font-semibold">: </span>Traduction,
                    méthodologie de recherche, TIC et e- learning.
                    <br />{" "}
                    <span className="underline font-semibold">
                      Enseignement et professionnalisation{" "}
                    </span>
                    <span className="font-semibold">: </span>Introduction à la
                    didactique, entrepreneuriat, spécialisation en anglais des
                    affaires.
                  </p>

                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Débouchés professionnels :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>Enseignant d’anglais</li>{" "}
                    <li>Traducteur / Interprète</li>{" "}
                    <li>Rédacteur / Journaliste </li>{" "}
                    <li>Responsable communication internationale</li>
                    <li>
                      Employé dans le tourisme, la diplomatie ou les affaires
                    </li>
                  </ul>
                  <h4 className="text-form-border-beige text-xl font-semibold">
                    Conditions d’admission :
                  </h4>
                  <ul className="list-disc !ml-4 text-sm font-normal leading-[2] w-full">
                    <li>
                      Bac Lettres et Langues étrangères, Philosophie, Sciences
                      ou Mathématiques
                    </li>{" "}
                    <li>Entretien de sélection</li>{" "}
                  </ul>
                  <img src={englaisMobile} alt="" className="md:hidden block" />
                  <Link to={"/admission"}>
                    <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                      REJOINDRE le programme
                    </button>
                  </Link>
                </div>
              </div>

              <img src={englais} alt="" className="h-full  md:block hidden" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
