import { useState } from "react";

export default function CreateStudent({ onConfirm, isOpen }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSave() {
    onConfirm(name, image);
  }
  return (
    <>
      {isOpen && (
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cadastrar Aluno</h5>
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
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Imagem</label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
              onClick={handleSave}
            >
              Salvar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
