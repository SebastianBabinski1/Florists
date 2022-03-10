import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { Slider } from "./Slider";
import { StartContent } from "./StartContent";
import { SummaryBar } from "./SummaryBar";

export const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <Navbar />
      <Slider />
      <StartContent />
      <SummaryBar />
      <Footer />
    </div>
  );
};
