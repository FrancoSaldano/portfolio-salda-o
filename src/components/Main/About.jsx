import React from "react";

const About = () => {
  return (
    <div className="row-span-4 col-span-2 row-start-2 col-start-2 flex flex-col -mt-20">
      <div>
        <p className="font-title-hammer text-4xl -mx-5 mb-5 text-right text-stone-500">
          ABOUT
        </p>
        <p className="m-5 font-detail-roboto text-start text-amber-100">
          La idea principal de este proyecto es establecer los conocimientos
          adquiridos en el periodo que estudié en CODERHOUSE <br/>
          Espacialmente en el curso de React.js <br />
          El mismo consta de un e-commerse con un catálogo , detalle del item y
          carrito.
        </p>
      </div>
    </div>
  );
};

export default About;
