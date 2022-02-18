import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Offer } from "./components/Offer/Offer";
import { Contact } from "./components/Contact/Contact";
import { Galery } from "./components/Galery/Galery";
import { Shop } from "./components/Shop/Shop";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Offer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="galery" element={<Galery />} />
        <Route path="shop" element={<Shop />} />
      </Routes>
    </div>
  );
};
