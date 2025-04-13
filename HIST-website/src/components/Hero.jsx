import Carousel from "./Carousel";
import arrow from "../assets/arrow.svg";
export default function Hero() {
  return (
    <div className="w-full">
      <Carousel />
      <div className="w-full flex justify-end">
        <div className="flex !py-3 !px-14 justify-between bg-hist-green text-hist-beige text-2xl w-[85%] ">
          <p>
            <span className="font-bold !mr-1">586</span> people are learning
            with us{" "}
          </p>
          <a href="" className="flex flex-row gap-4 items-center ">
            Join Us
            <img src={arrow} alt="" className="w-1/4" />
          </a>
        </div>
      </div>
    </div>
  );
}
