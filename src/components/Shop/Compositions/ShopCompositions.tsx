import { useState } from "react";
import { Footer } from "../../Footer";
import { Navbar } from "../../Navbar";
import { Modal } from "../../Offer/Modal";
import { ShopImage } from "../ShopImage";
import { ShopItem } from "../ShopItem";
import { ShopNavbar } from "../ShopNavbar";

export const ShopCompositions = () => {
  const [path, setPath] = useState("");

  return (
    <>
      <Navbar />
      <ShopNavbar />
      <ShopImage text="KOMPOZYCJE" />
      <Modal path={path} />
      <div className="shop-items-wrapper">
        <ShopItem
          src="assets/Compositions/composition1.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={1}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition2.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={2}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition3.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={3}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition4.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={4}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition5.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={5}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition6.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={6}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition7.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={7}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Compositions/composition8.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={8}
          setPath={setPath}
        />
      </div>
      <Footer />
    </>
  );
};
