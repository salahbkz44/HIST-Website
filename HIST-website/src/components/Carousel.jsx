import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import carouselImg1 from "../assets/carousel1.png";
import carouselImg2 from "../assets/carousel2.png";
import carouselImg3 from "../assets/carousel3.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Carousel() {
  return (
    <div className="w-full !mt-20 h-auto md:h-[calc(100vh-80px)]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          renderBullet: (index, className) => {
            return `<span class="${className} bg-white opacity-60 mx-1.5 !w-3 !h-3 rounded-full"></span>`;
          },
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-full relative"
      >
        {/* Slides */}
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={carouselImg1}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <img
              src={carouselImg2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <h1 className="h1Carousel md:text-7xl absolute top-1/2 left-1/2 z-10 text-white drop-shadow-2xl text-center w-full text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2">
              welcome to{" "}
              <span className="bg-hist-beige md:!h-[85px] !p-0 shadow-md inline-block">
                Hist
              </span>{" "}
              Academy
            </h1>
            <img
              src={carouselImg3}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>

        {/* Navigation Arrows */}
        <div className="custom-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 md:w-12 md:h-12 rounded-full bg-[#073B2E]/60 backdrop-blur-sm flex items-center justify-center cursor-pointer">
          <svg
            className="w-6 h-6 text-hist-beige"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="custom-next absolute right-4 top-1/2 z-10 -translate-y-1/2 md:w-12 md:h-12 rounded-full bg-[#073B2E]/60 backdrop-blur-sm flex items-center justify-center cursor-pointer">
          <svg
            className="w-6 h-6 text-hist-beige"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>

        {/* Pagination Container - NOW VISIBLE */}
        <div className="custom-pagination absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2"></div>
      </Swiper>

      {/* Active bullet styling */}
      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: #ccb290 !important;
          opacity: 1 !important;
          transform: scale(1.2);
        }

        /* Add shadow to letters */
        .h1Carousel {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Shadow for each letter */
        }

        /* Add shadow to the span */
        .h1Carousel span {
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3); /* Shadow for the span */
        }
      `}</style>
    </div>
  );
}
