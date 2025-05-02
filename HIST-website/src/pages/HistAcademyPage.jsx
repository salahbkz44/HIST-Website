import ProgramTabs from "../components/Hist-Academy/ProgramTabs";
import Presentation from "../components/Hist-Academy/Presentation";
import PresentationEspace from "../components/Hist-Academy/Presentation-espace";
import Testimonial from "../components/Hist-Academy/Testimonials";
import Webinar from "../components/Hist-Academy/Webinar";
import Library from "../components/Hist-Academy/Library";
import AdmissionCall from "../components/Hist-Academy/AdmissionCall";

export default function HistAcademyPage() {
  return (
    <div className="font-sans text-gray-800 !mt-20 bg-white">
      <Presentation />
      <ProgramTabs />
      <PresentationEspace />
      <Testimonial />
      <Webinar />
      <Library />
      <AdmissionCall />

      {/* Add your content here */}
    </div>
  );
}
