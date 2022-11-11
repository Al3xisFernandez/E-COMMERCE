
import React from "react";
// import img from "../../images/img01.jpg";

export const ProductoLista = () => {
  return (
    <>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        <div className="producto">
          <a href="">
            <div className="producto__img">
              {/* <img src="#" alt="" /> */}
            </div>
          </a>
          <div className="producto__footer">
            <h1> title </h1>
            <p> Categoria</p>
            <p className="price"> $320</p>
          </div>
          <div className="buttom">
            <button className="btn">
              Anadir al carrito
            </button>
            <div>
              <a href="" className="btn">Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="">
            <div className="producto__img">
              {/* <img src="#" alt="" /> */}
            </div>
          </a>
          <div className="producto__footer">
            <h1> title </h1>
            <p> Categoria</p>
            <p className="price"> $320</p>
          </div>
          <div className="buttom">
            <button className="btn">
              Anadir al carrito
            </button>
            <div>
              <a href="" className="btn">Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="">
            <div className="producto__img">
              {/* <img src="#" alt="" /> */}
            </div>
          </a>
          <div className="producto__footer">
            <h1> title </h1>
            <p> Categoria</p>
            <p className="price"> $320</p>
          </div>
          <div className="buttom">
            <button className="btn">
              Anadir al carrito
            </button>
            <div>
              <a href="" className="btn">Vista</a>
            </div>
          </div>
        </div>
        <div className="producto">
          <a href="">
          <div className="producto__img">
            {/* <img src="#" alt="" /> */}
          </div>
        </a>
        <div className="producto__footer">
          <h1> title </h1>
          <p> Categoria</p>
          <p className="price"> $320</p>
        </div>
        <div className="buttom">
          <button className="btn">
            Anadir al carrito
          </button>
          <div>
            <a href="" className="btn">Vista</a>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};
