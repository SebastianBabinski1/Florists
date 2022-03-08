import { createContext, useContext, useState } from "react";
import { Footer } from "../Footer";
import { SummaryBar } from "../LandingPage/SummaryBar";
import { Navbar } from "../Navbar";
import { Bouquets } from "./Bouquets";
import { Cemetery } from "./Cemetery";
import { Compositions } from "./Compositions";
import { Modal } from "./Modal";
import { Weddings } from "./Weddings";
import { Wreaths } from "./Wreaths";

export type PathContextType = {
  setPath: React.Dispatch<React.SetStateAction<string>>;
};

const PathContext = createContext<PathContextType>({ setPath: () => {} });
export const useGlobalContext = () => useContext(PathContext);

export const Offer = () => {
  const [path, setPath] = useState("");

  return (
    <>
      <Navbar />
      <div className="offer-content-wrapper">
        <p className="offer-content-title page-title">OFERTA</p>
        <div className="offers">
          <PathContext.Provider value={{ setPath }}>
            <Modal path={path} />
            <Bouquets />
            <Compositions />
            <Weddings />
            <Cemetery />
            <Wreaths />
          </PathContext.Provider>
          <SummaryBar />
        </div>
      </div>
      <Footer />
    </>
  );
};
