import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "./Offer";

export const Bouquets = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
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
        <p className="offer-wrapper__left__description">
          Różnorodne bukiety na każdą okazję
        </p>
        <img
          className="offer-wrapper__left__image"
          src="assets/Bouquets/bouquet6.jpg"
          alt="bouquet"
        />
      </div>
      <div className="offer-wrapper__right">
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet1.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet1.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet2.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet2.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet3.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet3.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet4.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet4.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet5.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet5.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet6.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet6.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet7.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet7.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet8.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet8.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/bouquet9.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Bouquets/bouquet9.jpg");
            $("#photo-modal").modal("show");
          }}
        />
      </div>
    </div>
  );
};
