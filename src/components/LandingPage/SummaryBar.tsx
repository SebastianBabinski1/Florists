import { useInView } from "react-intersection-observer";

export const SummaryBar = () => {
  const { ref, inView } = useInView({
    threshold: 0.05,
  });
  return (
    <div className={`summary-bar-wrapper ${inView ? `visible` : ``}`} ref={ref}>
      <div className="summary-item">
        <p className="summary-item__description">Poznaj naszą ofertę</p>
        <button className="summary-item__button">OFERTA</button>
      </div>
      <div className="summary-item">
        <p className="summary-item__description">
          Odwiedź kwiaciarnię online i złóż zamówienie
        </p>
        <button className="summary-item__button">SKLEP</button>
      </div>
      <div className="summary-item">
        <p className="summary-item__description">
          Odwiedź nas i spraw radość sobie lub komuś bliskiemu
        </p>
        <button className="summary-item__button">KONTAKT</button>
      </div>
    </div>
  );
};
