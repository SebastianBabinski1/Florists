import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { SummaryBar } from "../LandingPage/SummaryBar";
import { ShopNavbar } from "./ShopNavbar";
import { StepByStep } from "./StepByStep";

export const Shop = () => {
  return (
    <>
      <Navbar />
      <ShopNavbar />
      <StepByStep />
      <SummaryBar />
      <Footer />
    </>
  );
};
