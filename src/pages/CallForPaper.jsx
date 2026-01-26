import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import PaperSubmission from "../components/callforpaper/PaperSubmission";
import Hero from "@/components/Hero";

function CallForPaper() {
  return (
    <div>
      <Hero src="/background/9.jpg" content="Call For Paper"/>
      <HowItWorkTimeline/>
      <TracksAndTopics/>
      <PaperSubmission/>
    </div>
  );
}

export default CallForPaper;
