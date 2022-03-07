import { useGlobalContext } from "./Offer";
import { useInView } from "react-intersection-observer";

export const Compositions = () => {
  const { setPath } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  return (
    <div
      id="compositions"
      className={`offer-wrapper ${inView ? `bg visible` : ``}`}
      ref={ref}
    >
      <div className="offer-wrapper__left">
        <p className="offer-wrapper__left__title">Kompozycje w szkle</p>
        <p className="offer-wrapper__left__description">123</p>
        <img
          className="offer-wrapper__left__image"
          src="assets/Compositions/composition4.jpg"
          alt="bouquet"
        />
      </div>
      <div className="offer-wrapper__right">
        <img
          className="bouquet"
          src="assets/Compositions/composition1.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition1.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition2.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition2.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition3.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition3.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition4.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition4.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition5.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition5.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition6.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition6.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition7.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition7.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition8.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition8.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Compositions/composition9.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Compositions/composition9.jpg");
            $("#photo-modal").modal("show");
          }}
        />
      </div>
    </div>
  );
};
