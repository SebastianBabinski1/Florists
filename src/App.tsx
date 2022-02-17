import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Offer } from "./components/Offer/Offer";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Offer />} />
      </Routes>
    </div>
  );
};
