import { useState } from "react";

export default function CreateDate({ onConfirm, isOpen }) {
  const [date, setDate] = useState("");
  return (
    <>
      {isOpen && (
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cadastrar Data</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="date">Data</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onConfirm(date)}
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
