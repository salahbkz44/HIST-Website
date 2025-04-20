import { useState } from "react";
import managment from "../../assets/programs/managment-license.png";
import marketing from "../../assets/programs/marketing-license.png";
import ai from "../../assets/programs/Ai-license.png";
import gdrh from "../../assets/programs/gdrh-license.png";
import englais from "../../assets/programs/englais-license.png";

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = useState("license");

  const shadowStyle = {
    boxShadow:
      "0 -4px 8px -4px rgba(0, 0, 0, 0.1), 4px 0 8px -4px rgba(0, 0, 0, 0.1), -4px 0 8px -4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#F9F5F0] to-[#d9d6d0] font-rubik">
        <div className="flex w-full justify-center">
          <div className="flex w-full justify-center space-x-2 relative">
            {/* LICENSE Tab */}
            <button
              onClick={() => setActiveTab("license")}
              className={`!px-40 !py-8  font-semibold text-3xl transition-all duration-200 ${
                activeTab === "license"
                  ? "bg-white rounded-t-lg"
                  : "text-neutral-800"
              }`}
              style={activeTab === "license" ? shadowStyle : {}}
            >
              LICENSE Programs
            </button>

            {/* MASTER Tab */}
            <button
              onClick={() => setActiveTab("master")}
              className={`!px-40 !py-8  font-semibold text-3xl transition-all duration-200 ${
                activeTab === "master"
                  ? "bg-white rounded-t-lg"
                  : "text-neutral-800"
              }`}
              style={activeTab === "master" ? shadowStyle : {}}
            >
              MASTER Programs
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-white h-1/2 flex items-center justify-center text-4xl   text-black">
        {activeTab === "license" ? (
          <div className="w-full  bg-white flex flex-col items-center justify-center text-4xl  ">
            <div className="w-full !px-20 !py-20 flex flex-row justify-between items-start">
              <div className="relative">
                <h1 className="font-bold font-rubik text-[200px] text-[#00000027] absolute top-0 left-0">
                  01
                </h1>
                <div className="flex flex-col !mt-15 !pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      program
                    </h5>
                  </div>
                  <h1 className="font-bold text-5xl font-rubik !my-8">
                    Management
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
                  <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                    REJOINDRE le programme
                  </button>
                </div>
              </div>

              <img src={managment} alt="" className="h-full" />
            </div>
            <div className="w-full !pl-10 !py-20 bg-[#02382B0D] flex flex-row justify-between items-start">
              <img src={marketing} alt="" className="w-2/5" />
              <div className="relative !ml-20">
                <h1 className="font-bold font-rubik text-[200px] text-[#00000027] absolute top-0 left-0">
                  02
                </h1>
                <div className="flex flex-col !mt-15  !pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      program
                    </h5>
                  </div>
                  <h1 className="font-bold text-5xl font-rubik !my-8">
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
                  <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                    REJOINDRE le programme
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full !px-20 !py-20 flex flex-row justify-between items-start">
              <div className="relative">
                <h1 className="font-bold font-rubik text-[200px] text-[#00000027] absolute top-0 left-0">
                  03
                </h1>
                <div className="flex flex-col !mt-15 !pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      program
                    </h5>
                  </div>
                  <h1 className="font-bold text-5xl font-rubik !my-8">
                    Management
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
                  <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                    REJOINDRE le programme
                  </button>
                </div>
              </div>

              <img src={ai} alt="" className="h-full" />
            </div>
            <div className="w-full !pl-10 !py-20 bg-[#02382B0D] flex flex-row justify-between items-start">
              <img src={gdrh} alt="" className="w-2/5" />
              <div className="relative !ml-20">
                <h1 className="font-bold font-rubik text-[200px] text-[#00000027] absolute top-0 left-0">
                  04
                </h1>
                <div className="flex flex-col !mt-15  !pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      program
                    </h5>
                  </div>
                  <h1 className="font-bold text-5xl font-rubik !my-8">
                    Gestion des <br /> Ressources Humaines
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
                    Compétences transversales :
                  </h4>
                  <p className="text-sm font-normal leading-[2] w-full">
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
                  <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                    REJOINDRE le programme
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full !px-20 !py-20 flex flex-row justify-between items-start">
              <div className="relative">
                <h1 className="font-bold font-rubik text-[200px] text-[#00000027] absolute top-0 left-0">
                  05
                </h1>
                <div className="flex flex-col !mt-15 !pl-35 !pr-5 font-rubik">
                  <div className="flex items-center">
                    <div className="bg-black h-[2px] w-16 "></div>
                    <h5 className="uppercase text-sm font-rubik tracking-widest  !ml-5">
                      program
                    </h5>
                  </div>
                  <h1 className="font-bold text-5xl font-rubik !my-8">
                    Management
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
                  <button className="bg-hist-green hover:bg-hist-green-effect text-lg text-white !mt-8 !px-5 !py-2 w-fit rounded-sm">
                    REJOINDRE le programme
                  </button>
                </div>
              </div>

              <img src={englais} alt="" className="h-full" />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}
