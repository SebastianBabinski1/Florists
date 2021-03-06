export const Slider = () => {
  return (
    <div id="carousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" className="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="assets/flowers-background.jpg"
            alt="First composition"
          />
        </div>
        <div className="carousel-item active">
          <img
            className="d-block w-100"
            src="assets/Slider/slider4.jpg"
            alt="Second composition"
          />
        </div>
        <div className="carousel-item">
          <img
            className="d-block w-100"
            src="assets/Slider/slider5.jpg"
            alt="Third composition"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};
