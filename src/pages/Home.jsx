import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import Gallery from "../components/Home/Gallery";
import FeatureCards from "../components/Home/FeatureCards";
import Sponsors from "../components/Home/Sponsors";
import { StaggerTestimonials } from "../components/stagger-testimonials";
import VideoShowcase from "../components/Home/VideoShowcase";

function Home() {
  return (
    <div>
      <VideoShowcase/>
      <HowItWorkTimeline/>
      <TracksAndTopics/>
      <Gallery/>
      <FeatureCards/>
      <Sponsors/>
      <StaggerTestimonials/>
    </div>
  );
}

export default Home;
