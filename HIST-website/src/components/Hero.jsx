import Carousel from "./Carousel";
import arrow from "../assets/arrow.svg";
export default function Hero() {
  return (
    <div className="w-full">
      <Carousel />
      <div className="w-full flex justify-end">
        <div className="flex !py-3 md:!px-14 !pl-1 justify-between bg-hist-green text-hist-beige md:text-2xl text-sm w-[85%] ">
          <p>
            <span className="font-bold !mr-1">586</span> people are learning
            with us{" "}
          </p>
          <a href="" className="flex flex-row md:gap-4 gap-2 items-center ">
            Join Us
            <img src={arrow} alt="" className="w-1/4" />
          </a>
        </div>
      </div>
    </div>
  );
}
