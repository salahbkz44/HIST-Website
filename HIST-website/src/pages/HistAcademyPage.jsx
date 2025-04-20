import ProgramTabs from "../components/Hist-Academy/ProgramTabs";
import Presentation from "../components/Hist-Academy/Presentation";
import PresentationEspace from "../components/Hist-Academy/Presentation-espace";

export default function HistAcademyPage() {
  return (
    <div className="font-sans text-gray-800 !mt-20 bg-white">
      <Presentation />
      <ProgramTabs />
      <PresentationEspace />

      {/* Add your content here */}
    </div>
  );
}
