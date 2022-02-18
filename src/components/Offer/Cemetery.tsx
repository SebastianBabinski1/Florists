import { useInView } from "react-intersection-observer";
import { useGlobalContext } from "./Offer";

export const Cemetery = () => {
  const { setPath } = useGlobalContext();
  const { ref, inView } = useInView({
    threshold: 0.05,
  });

  return (
    <div
      id="cemetery"
      className={`offer-wrapper ${inView ? `bg` : ``}`}
      ref={ref}
    >
      <div className="offer-wrapper__left">
        <p className="offer-wrapper__left__title">Kompozycje na nagrobek</p>
        <p className="offer-wrapper__left__description">123</p>
        <img
          className="offer-wrapper__left__image"
          src="assets/Cemetery/cemetery5.jpg"
          alt="bouquet"
        />
      </div>
      <div className="offer-wrapper__right">
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery1.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery1.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery2.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery2.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery3.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery3.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery4.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery4.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery5.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery5.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery6.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery6.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery7.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery7.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery8.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery8.jpg");
            $("#photo-modal").modal("show");
          }}
        />
        <img
          className="bouquet"
          src="assets/Cemetery/cemetery9.jpg"
          alt="bouquet"
          onClick={() => {
            setPath("assets/Cemetery/cemetery9.jpg");
            $("#photo-modal").modal("show");
          }}
        />
      </div>
    </div>
  );
};
