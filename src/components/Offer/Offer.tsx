import { Footer } from "../Footer";
import { SummaryBar } from "../LandingPage/SummaryBar";
import { Navbar } from "../Navbar";
import { Bouquets } from "./Bouquets";
import { Cemetery } from "./Cemetery";
import { Compositions } from "./Compositions";
import { Weddings } from "./Weddings";
import { Wreaths } from "./Wreaths";

export const Offer = () => {
  return (
    <>
      <Navbar />
      <div className="offer-content-wrapper">
        <p className="offer-content-title">OFERTA</p>
        <div className="offers">
          <Bouquets />
          <Compositions />
          <Weddings />
          <Cemetery />
          <Wreaths />
          <SummaryBar />
        </div>
      </div>
      <Footer />
    </>
  );
};
