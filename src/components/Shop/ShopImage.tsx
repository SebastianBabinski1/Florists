interface Props {
  text: string;
}

export const ShopImage = ({ text }: Props) => {
  return (
    <div className="shop-image-wrapper">
      <img
        className="shop-image"
        src="assets/flowers-background.jpg"
        alt="flower"
      />
      <p className="shop-image-description">{text}</p>
    </div>
  );
};
