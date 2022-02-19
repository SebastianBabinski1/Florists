import "./App.css";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { LandingPage } from "./components/LandingPage/LandingPage";
import { Offer } from "./components/Offer/Offer";
import { Contact } from "./components/Contact/Contact";
import { Shop } from "./components/Shop/Shop";
import { ShopBouquets } from "./components/Shop/Bouquets/ShopBouquets";
import { ShopCemetery } from "./components/Shop/Cemetery/ShopCemetery";
import { ShopCompositions } from "./components/Shop/Compositions/ShopCompositions";
import { ShopWreaths } from "./components/Shop/Wreaths/ShopWreaths";

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about" element={<About />} />
        <Route path="offer" element={<Offer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="bouquets" element={<ShopBouquets />} />
        <Route path="compositions" element={<ShopCompositions />} />
        <Route path="cemetery" element={<ShopCemetery />} />
        <Route path="wreaths" element={<ShopWreaths />} />
      </Routes>
    </div>
  );
};
