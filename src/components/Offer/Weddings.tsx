import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "./Offer";

export const Weddings = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  const { setPath } = useGlobalContext();

  return (
    <div
      id="weddings"
      className={`offer-wrapper ${inView ? `visible` : ``}`}
      ref={ref}
    >
      <div className="offer-wrapper__left">
        <p className="offer-wrapper__left__title">Śluby i wesela</p>
        <p className="offer-wrapper__left__description">123</p>
        <img
          className="offer-wrapper__left__image"
          src="assets/Weddings/wedding5.jpg"
          alt="wedding"
        />
      </div>
      <div className="offer-wrapper__right">
        <img
          className="bouquet"
          src="assets/Weddings/wedding1.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding1.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding2.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding2.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding3.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding3.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding4.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding4.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding5.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding5.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding6.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding6.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding7.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding7.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding8.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding8.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Weddings/wedding9.jpg"
          alt="wedding"
          onClick={() => {
            setPath("assets/Weddings/wedding9.jpg");
            $("#photo-modal").modal("show");
          }}
        />
      </div>
    </div>
  );
};
