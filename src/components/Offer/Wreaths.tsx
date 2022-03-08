import { useGlobalContext } from "./Offer";
import { useInView } from "react-intersection-observer";

export const Wreaths = () => {
  const { setPath } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div
      id="wreaths"
      className={`offer-wrapper ${inView ? `visible` : ``}`}
      ref={ref}
    >
      <div className="offer-wrapper__left">
        <p className="offer-wrapper__left__title">Wieńce pogrzebowe</p>
        <p className="offer-wrapper__left__description">
          Wykonane z najlepszych materiałów
        </p>
        <img
          className="offer-wrapper__left__image"
          src="assets/Wreaths/wreath6.jpg"
          alt="bouquet"
        />
      </div>
      <div className="offer-wrapper__right">
        <img
          className="bouquet"
          src="assets/Wreaths/wreath1.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath1.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath2.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath2.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath3.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath3.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath4.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath4.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath5.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath5.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath6.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath6.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath7.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath7.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath8.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath8.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Wreaths/wreath9.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Wreaths/wreath9.jpg");
            $("#photo-modal").modal("show");
          }}
        />
      </div>
    </div>
  );
};
