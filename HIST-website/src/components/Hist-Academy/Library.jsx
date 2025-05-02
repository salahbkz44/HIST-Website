import LibraryPic from "../../assets/libraryPic.png";

export default function Library() {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(2, 56, 43, 0.5), rgba(2, 56, 43, 0.5)),
                     url(${LibraryPic}) no-repeat center center/cover`,
      }}
      className="md:h-60 h-50 w-full flex md:flex-row flex-col justify-between items-start text-white font-rubik !px-10 md:!px-20 !py-8 md:!py-10"
    >
      <div className="flex flex-col">
        <h1 className="md:text-3xl text-xl font-medium md:!my-8">
          Découvrez notre bibliothèque en ligne
        </h1>
        {/* <p className="md:text-xs text-[10px] font-light">
          Pellentesque egestas elementum egestas faucibus sem. Velit nunc
          egestas ut morbi.
        </p> */}
      </div>
      <a
        href="https://www.youscribe.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="md:!py-2 !py-1 md:!px-4 !px-2 border-2 border-white text-white md:text-2xl text-lg hover:bg-white hover:text-hist-green">
          Ouvrir la bibliothèque
        </button>
      </a>
    </div>
  );
}
