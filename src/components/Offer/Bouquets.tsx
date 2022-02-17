export const Bouquets = () => {
  return (
    <div id="bouquets" className="offer-wrapper">
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* data-toggle="modal" data-target="#exampleModalCenter" */}
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
          onClick={() => $("#exampleModalCenter").modal("show")}
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet2.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet3.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet4.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet5.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet6.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet7.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet8.jpg"
          alt="bouquet"
        />
        <img
          className="bouquet"
          src="assets/Bouquets/Bouquet9.jpg"
          alt="bouquet"
        />
      </div>
    </div>
  );
};
