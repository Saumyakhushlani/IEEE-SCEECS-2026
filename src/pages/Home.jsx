import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import Gallery from "../components/Home/Gallery";
import FeatureCards from "../components/Home/FeatureCards";
import Sponsors from "../components/Home/Sponsors";
import { StaggerTestimonials } from "../components/stagger-testimonials";
import VideoShowcase from "../components/Home/VideoShowcase";
import RegistrationFeeTable from "../components/Home/RegistrationFeeTable";
import GuestLectures from "../components/Home/GuestLectures";
import About from "../components/Home/About";

function Home() {
  return (
    <div>
      <VideoShowcase/>
      <About/>
      <HowItWorkTimeline/>
      <TracksAndTopics/>
      <Gallery/>
      <FeatureCards/>
      <GuestLectures/>
      <Sponsors/>
      <RegistrationFeeTable/>
      <StaggerTestimonials/>
    </div>
  );
}

export default Home;
