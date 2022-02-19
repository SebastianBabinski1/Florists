import { Footer } from "../../Footer";
import { Navbar } from "../../Navbar";
import { ShopImage } from "../ShopImage";
import { ShopNavbar } from "../ShopNavbar";
import { ShopItem } from "../ShopItem";
import { useState } from "react";
import { Modal } from "../../Offer/Modal";

export const ShopBouquets = () => {
  const [path, setPath] = useState("");

  return (
    <>
      <Navbar />
      <ShopNavbar />
      <ShopImage text="BUKIETY" />
      <Modal path={path} />
      <div className="shop-items-wrapper">
        <ShopItem
          src="assets/Bouquets/bouquet1.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={1}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet2.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={2}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet3.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={3}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet4.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={4}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet5.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={5}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet6.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={6}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet7.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={7}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Bouquets/bouquet8.jpg"
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
