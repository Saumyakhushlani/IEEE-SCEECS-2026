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
import Hero from "@/components/Hero";
import EventTimerSection from "@/components/Timer";


function Home() {
  const button=[
    {text:"Visit IEEE-MSB", link :"https://ieeenitb.com/"},
    {text:"Conference details", link :"https://sceecs.ieeenitb.com/docs/CALL%20FOR%20PAPER%201.png"},
  ]
  return (
    <div>
      <Hero src="/background/conference.jpg" content="IEEE SCEECS 2026" dates="31st Jan - 1st Feb 2026, Bhopal, India." buttonContent={button}/>
      {/* <EventTimerSection/> */}
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
