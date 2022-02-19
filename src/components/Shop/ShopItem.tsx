import { Dispatch, SetStateAction } from "react";

interface Props {
  title: string;
  description: string;
  price: string;
  number: number;
  src: string;
  setPath: Dispatch<SetStateAction<string>>;
}

export const ShopItem = ({
  title,
  description,
  price,
  number,
  src,
  setPath,
}: Props) => {
  return (
    <div className="shop-item">
      <div className="shop-item__left">
        <img
          className="shop-item__left__image"
          src={src}
          alt="item"
          onClick={() => {
            setPath(src);
            $("#photo-modal").modal("show");
          }}
        ></img>
      </div>
      <div className="shop-item__right">
        <p className="shop-item__right__title">{title}</p>
        <p className="shop-item__right__description">{description}</p>
        <p className="shop-item__right__price">{price}</p>
      </div>
      <div className="shop-item__number">{number}</div>
    </div>
  );
};
