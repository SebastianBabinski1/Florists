import { useState } from "react";
import { Footer } from "../../Footer";
import { Navbar } from "../../Navbar";
import { Modal } from "../../Offer/Modal";
import { ShopImage } from "../ShopImage";
import { ShopItem } from "../ShopItem";
import { ShopNavbar } from "../ShopNavbar";

export const ShopCemetery = () => {
  const [path, setPath] = useState("");
  return (
    <>
      <Navbar />
      <ShopNavbar />
      <ShopImage text="KOMPOZYCJE NAGROBNE" />
      <Modal path={path} />
      <div className="shop-items-wrapper">
        <ShopItem
          src="assets/Cemetery/cemetery1.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={1}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery2.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={2}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery3.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={3}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery4.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={4}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery5.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={5}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery6.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={6}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery7.jpg"
          title="Elegancki kosz kwiatów o wiosennej kolorystyce"
          description="Róża, złocień, goździk, gipsówka, liście"
          price="150 zł"
          number={7}
          setPath={setPath}
        />
        <ShopItem
          src="assets/Cemetery/cemetery8.jpg"
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
