import React from "react";
import avatar from "../../img/me.png";


const Me = () => {
    return (
        <div className="row mt-5 d-flex justify-content-center align-items-center ">
            <div className="col-4">
                <h4>Hola, mi nombre es</h4>
                <h2>Esteban Ossandón</h2>
                <h3>
                    Soy <strong className="text-yellow">Desarrollador FullStack</strong>
                </h3>
                <a href="Esteban-Ossandón-Vega-FlowCV-Resume-20251216.pdf" download className=" btn button-yellow">
                    Descargar CV
                </a>
                <a
                    href="https://www.linkedin.com/in/esteban-ignacio-ossandón-vega-8b301212b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-reverse m-3"
                >
                    LinkedIn
                </a>

            </div>
            <div className="col-3 mb-5 d-flex justify-content-center">
                <img src={avatar} alt="" className="img-fluid img-contorno" />
            </div>
        </div>
    );
}

export default Me;