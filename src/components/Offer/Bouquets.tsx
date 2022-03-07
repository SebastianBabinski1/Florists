import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "./Offer";

export const Bouquets = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const { setPath } = useGlobalContext();
  return (
    <div
      id="bouquets"
      className={`offer-wrapper ${inView ? `visible` : ``}`}
      ref={ref}
    >
      <div className="offer-wrapper__left">
        <p className="offer-wrapper__left__title">Bukiety i wiązanki</p>
        <p className="offer-wrapper__left__description">123</p>
        <img
          className="offer-wrapper__left__image"
          src="assets/Bouquets/bouquet6.jpg"
          alt="bouquet"
        />
      </div>
      <div className="offer-wrapper__right">
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet1.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet1.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet2.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet2.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet3.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet3.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet4.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet4.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet5.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet5.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet6.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet6.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet7.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet7.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet8.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet8.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet9.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/Bouquet9.jpg");
            $("#photo-modal").modal("show");
          }}
        />
      </div>
    </div>
  );
};
