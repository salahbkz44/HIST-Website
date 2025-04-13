import WhyUSPic1 from "../assets/whyUs1.png";
import WhyUSPic2 from "../assets/whyUs2.png";
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
      <div
        className="flex justify-between items-center !py-20 bg-[#02382B0D] relative !px-[3%]"
        style={{ height: "calc(100vh - 70px)", overflow: "hidden" }}
      >
        <img
          src={bgImage}
          alt=""
          className="absolute h-13/12 right-44 object-cover"
          style={{ objectPosition: "top" }}
        />
        <div className="flex-1 flex h-full justify-evenly">
          <div className="flex flex-col gap-3">
            <img src={WhyUSPic1} alt="" className="h-5/8 min-h-3/7" />
            <div className="flex justify-end">
              <img src={RectangleWhyUs} alt="" className="w-4/6" />
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <img src={WhyUSPic2} alt="" className="h-6/7 min-h-6/7" />
          </div>
        </div>
        <div className="flex flex-col justify-between   h-full min-w-1/2 w-1/2 font-roboto leading-20 text-5xl font-medium">
          <h1 className="w-2/3 leading-tight">Why You Should choose Us</h1>
          <div className="flex w-full mt-10 justify-between  items-center gap-18 ">
            <div className="bg-hist-beige min-w-13 min-h-13 w-13 h-13 rounded-full relative">
              <img
                src={experts}
                alt=""
                className="h-full absolute -top-4/12 -right-4/12"
              />
            </div>
            <div className="flex flex-col ml-10 justify-between">
              <h1 className="font-roboto text-[32px]">Expert Faculty</h1>
              <p className="font-roboto text-[22px] font-normal leading-tight">
                Our professors are leaders in their fields with a passion for
                teaching.
              </p>
            </div>
          </div>
          <div className="flex mt-10 justify-between  items-center gap-18 w-full">
            <div className="bg-hist-beige min-w-13 min-h-13 w-13 h-13 rounded-full relative">
              <img
                src={facilities}
                alt=""
                className="h-full absolute -top-4/12 -right-4/12"
              />
            </div>
            <div className="flex flex-col ml-10 justify-between">
              <h1 className="font-roboto text-[32px]">Modern Facilities</h1>
              <p className="font-roboto text-[22px]  font-normal leading-tight">
                Our state-of-the-art facilities ensure a dynamic learning
                environment.
              </p>
            </div>
          </div>
          <div className="flex mt-10 justify-between  items-center gap-18 w-full">
            <div className="bg-hist-beige min-w-13 min-h-13 w-13 h-13 rounded-full relative">
              <img
                src={recognition}
                alt=""
                className="h-full absolute -top-4/12 -right-4/12"
              />
            </div>
            <div className="flex flex-col ml-10 justify-between">
              <h1 className="font-roboto text-[32px]">Global Recognition</h1>
              <p className="font-roboto text-[22px]  font-normal leading-tight">
                We have strong global partnerships and a recognized academic
                reputation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
