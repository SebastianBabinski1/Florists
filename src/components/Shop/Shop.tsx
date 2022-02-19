import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { ShopImage } from "./ShopImage";
import { ShopNavbar } from "./ShopNavbar";
import { StepByStep } from "./StepByStep";

export const Shop = () => {
  return (
    <>
      <Navbar />
      <ShopNavbar />
      <ShopImage text="ZAMÓW KWIATY" />
      <StepByStep />
      <div className="shop__contact">
        <p className="shop__contact__description">
          Wyszukaj interesujący Cię produkt korzystając z górnego menu. Jeżeli
          masz jakiekolwiek pytania, skontaktuj się z nami!
        </p>
        <a className="shop__contact__button" href="contact">
          KONTAKT
        </a>
      </div>
      <Footer />
    </>
  );
};
