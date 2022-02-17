export const StartContent = () => {
  return (
    <div className="start-content">
      <div className="description">
        <p className="description__normal">
          Kwiaty to upominek, który wyraża więcej niż jakiekolwiek słowa.
        </p>
        <p className="description__bold">
          Naszą misją jest oferowanie najpiękniejszych kompozycji na każdą
          okazję.
        </p>
        <p className="description__normal">Co nas wyróżnia?</p>
      </div>
      <div className="advantages-wrapper">
        <div className="advantage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          <p className="advantage__title">Dbałość o klienta</p>
          <p className="advantage__description">
            Każdego klienta traktujemy indywidualnie i staramy się sprostać
            wszelkim wyzwaniom
          </p>
        </div>
        <div className="advantage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-graph-up-arrow"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
            />
          </svg>
          <p className="advantage__title">Podążanie za trendami</p>
          <p className="advantage__description">
            Śledzimy nowości i dostosowujemy ofertę do aktualnych potrzeb
          </p>
        </div>
        <div className="advantage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-currency-dollar"
            viewBox="0 0 16 16"
          >
            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
          </svg>
          <p className="advantage__title">Przystępne ceny</p>
          <p className="advantage__description">
            Nasza oferta jest bezkonkurencyjna pod względem ceny i jakości
          </p>
        </div>
      </div>
    </div>
  );
};
