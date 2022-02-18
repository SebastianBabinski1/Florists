interface Props {
  path: string;
}

export const Modal = ({ path }: Props) => {
  return (
    <div
      className="modal fade"
      id="photo-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <img src={path} alt="flowers" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
