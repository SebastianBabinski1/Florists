import { Footer } from "../Footer";
import { SummaryBar } from "../LandingPage/SummaryBar";
import { Navbar } from "../Navbar";
import { AboutContent } from "./AboutContent";
import { Opinions } from "./Opinions";

export const About = () => {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Opinions />
      <SummaryBar />
      <Footer />
    </>
  );
};
