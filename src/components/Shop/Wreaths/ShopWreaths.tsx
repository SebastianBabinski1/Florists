import { useState } from "react";
import { Footer } from "../../Footer";
import { Navbar } from "../../Navbar";
import { Modal } from "../../Offer/Modal";
import { ShopImage } from "../ShopImage";
import { ShopItem } from "../ShopItem";
import { ShopNavbar } from "../ShopNavbar";

export const ShopWreaths = () => {
  const [path, setPath] = useState("");

  return (
    <>
      <Navbar />
      <ShopNavbar />
      <ShopImage text="WIEŃCE POGRZEBOWE" />
      <Modal path={path} />
      <div className="shop-items-wrapper">
        <ShopItem
          src="assets/Wreaths/wreath1.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={1}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath2.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={2}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath3.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={3}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath4.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={4}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath5.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={5}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath6.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={6}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath7.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={7}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Wreaths/wreath8.jpg"
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
