import WhyUSPic1 from "../assets/whyUs1.png";
import WhyUSPic2 from "../assets/whyUs2.png";
import WhyUSMobile from "../assets/whyUsMobile.png";
import recognition from "../assets/RecognitionIcon.svg";
import facilities from "../assets/FacilitiesIcon.svg";
import experts from "../assets/ExpertsIcon.svg";
import RectangleWhyUs from "../assets/RectangleWhyUs.png";
import bgImage from "../assets/WhyUsBg.png";
export default function WhyUs() {
  return (
    <div>
      <div className="h-1 w-screen bg-[#2D2D2D33]">
        {" "}
        <div className="h-full bg-[#2D2D2DCC] w-3/6"></div>
      </div>
      <div className="flex md:flex-row flex-col-reverse md:whyus justify-between items-center !py-10 md:!py-30 bg-[#02382B0D] relative md:!px-[3%]">
        <img
          src={bgImage}
          alt=""
          className="absolute h-13/12 right-44 object-cover"
          style={{ objectPosition: "top" }}
        />
        <div className="flex-1 flex md:!m-0 !mt-15 !px-[5%] md:!px-0 md:!pr-20 md:h-full justify-center md:justify-center">
          <div className="flex flex-col md:w-fit md:items-start  items-end w-4/5 ">
            <img
              src={WhyUSPic1}
              alt=""
              className="md:block hidden h-5/8 min-h-3/7"
            />
            <img
              src={WhyUSMobile}
              className="md:hidden block h-5/8 w-full min-h-5/8"
              alt=""
            />
            <div className="flex justify-end">
              <img src={RectangleWhyUs} alt="" className="w-4/6" />
            </div>
          </div>
          <div className="flex flex-col md:w-fit md:!p-0 items-end justify-end">
            <img
              src={WhyUSPic2}
              alt=""
              className="md:h-6/7 md:min-h-6/7 w-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-between w-[90%] gap-10 h-full md:min-w-1/2 md:w-1/2 font-roboto leading-normal md:leading-20 md:text-5xl text-[40px] font-medium">
          <h1 className="md:w-2/3 w-full leading-tight">
            Pourquoi Nous Choisir
          </h1>
          <div className="flex w-full md:!mt-0 !mt-10 justify-between items-start md:items-center gap-8 md:gap-18 ">
            <div className="bg-hist-beige min-w-13 min-h-13 w-13 h-13 rounded-full relative">
              <img
                src={experts}
                alt=""
                className="h-full absolute -top-4/12 -right-4/12"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h1 className="font-roboto text-3xl md:text-[32px]">
                Faculté Experte
              </h1>
              <p className="font-roboto text-xl md:text-[22px] font-normal leading-tight">
                Nos professeurs sont des leaders dans leur domaine et passionnés
                par l’enseignement.
              </p>
            </div>
          </div>
          <div className="flex mt-10 justify-between  items-start md:items-center gap-8 md:gap-18  w-full">
            <div className="bg-hist-beige min-w-13 min-h-13 w-13 h-13 rounded-full relative">
              <img
                src={facilities}
                alt=""
                className="h-full absolute -top-4/12 -right-4/12"
              />
            </div>
            <div className="flex flex-col ml-10 justify-between">
              <h1 className="font-roboto text-3xl md:text-[32px]">
                Installations modernes
              </h1>
              <p className="font-roboto text-[22px]  font-normal leading-tight">
                Nos installations à la pointe de la technologie garantissent un
                environnement d’apprentissage dynamique.
              </p>
            </div>
          </div>
          <div className="flex mt-10 justify-between  items-start md:items-center gap-8 md:gap-18  w-full">
            <div className="bg-hist-beige min-w-13 min-h-13 w-13 h-13 rounded-full relative">
              <img
                src={recognition}
                alt=""
                className="h-full absolute -top-4/12 -right-4/12"
              />
            </div>
            <div className="flex flex-col ml-10 justify-between">
              <h1 className="font-roboto text-3xl md:text-[32px]">
                Reconnaissance mondiale
              </h1>
              <p className="font-roboto text-[22px]  font-normal leading-tight">
                Nous bénéficions de solides partenariats mondiaux et d’une
                réputation académique reconnue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
