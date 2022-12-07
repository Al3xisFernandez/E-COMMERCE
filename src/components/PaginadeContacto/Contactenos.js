import React from "react";
const Contactenos = () => {
  return (
    <>
      <input type="checkbox" id="btn-modal" />
      <label htmlFor="btn-modal" className="lbl-modal">
        Contactenos
      </label>
      <div className="modal">
        <div className="contenedor">
          <p>¡Bienvenidos!</p>
          <label htmlFor="btn-modal">X</label>
          <form className="contenido">
            <input
              className="GET-name"
              type="text"
              name="name"
              placeholder="Deja tu comentario"
            />
            <input className="submit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};
export default Contactenos;
