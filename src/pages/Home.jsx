import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import Gallery from "../components/Home/Gallery";
import { StaggerTestimonials } from "../components/stagger-testimonials";

function Home() {
  return (
    <div>
      <HowItWorkTimeline/>
      <TracksAndTopics/>
      <Gallery/>
      <StaggerTestimonials/>
    </div>
  );
}

export default Home;
