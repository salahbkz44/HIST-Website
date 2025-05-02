import Calendar from "./Calendar";
import WebinarPic from "../../assets/Webinar.png";

export default function Webinar() {
  return (
    <div className="relative flex md:flex-row flex-col items-center justify-center md:!px-25 md:!py-20 !px-10 font-rubik">
      <div
        style={{
          background: `linear-gradient(
      rgba(196, 196, 196, 0.5),  
      rgba(196, 196, 196, 0.5)
    ), url(${WebinarPic}) no-repeat center center / cover`,
        }}
        className="md:h-150 md:w-210 w-full h-60"
      ></div>
      <Calendar className="absolute md:top-1/2 top-20 left-46/100 md:left-5/12 transform -translate-x-5/12 md:-translate-y-1/2 z-20" />

      <div className="bg-[#EEDFCB] md:!pl-30 md:!pr-15 !px-8   text-center !pt-25 !pb-5 md:!py-15 w-8/9 md:w-6/9 shadow-2xl  h-min md:-translate-x-10 md:translate-y-0 -translate-y-20  z-10">
        <div className="flex gap-4 md:justify-start justify-center items-center">
          <div className="h-[2px] w-15 md:block hidden bg-black"></div>
          <h1 className="text-hist-green text-center uppercase md:text-[16px] text-[8px] tracking-[0.2em]">
            Événements
          </h1>
        </div>
        <h1 className="md:text-[30px] text-sm font-black md:font-bold text-black">
          ابواب مفتوحة للاستعلام و التسجيل للسنة الجامعية 2025/2026
        </h1>
        <p className="md:text-sm text-[10px]">
          في إطار التحضير للدخول الجامعي 2025/2026، يعلن المعهد العالي للعلوم و
          التكنولوجيا عن تنظيم أبواب مفتوحة عن بعد مخصصة للاستعلام والتوجيه
          والتسجيل لفائدة الطلبة الجدد. تهدف هذه المبادرة إلى تمكين الزوار من
          التعرف على العروض التكوينية، شروط الالتحاق، وآليات التسجيل، وذلك تحت
          إشراف الطاقم الإداري والبيداغوجي المؤهل. تُعد هذه الأبواب المفتوحة
          فرصة هامة للتواصل المباشر وتوفير كافة المعلومات الضرورية لضمان تسجيل
          سلس و منظم
        </p>
        <p className="font-semibold md:text-lg text-sm !my-4 md:!my-10">
          Rejoignez-nous pour une discussion ci-dessous.
        </p>
        <a
          href="https://teams.live.com/meet/936666134559?p=TqM0sEIxUWXqVmeX4F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="md:!px-8 md:!py-2 !px-4 !py-1 md:text-[16px] text-[10px] border-hist-green border-2 
          rounded-sm text-hist-green font-regular hover:bg-hist-green hover:text-white transition-colors duration-300"
          >
            Ouvrir le webinaire
          </button>
        </a>
      </div>
    </div>
  );
}
