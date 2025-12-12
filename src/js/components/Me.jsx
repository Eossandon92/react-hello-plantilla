import React from "react";
import avatar from "../../img/me.png";


const Me = () => {
    return (
        <div className="container d-flex justify-content-center border border-danger ">
            <div className="row d-flex  align-items-center border border-danger">
                <div className="col-6 border border-danger">
                    <h4>Hola, mi nombre es</h4>
                    <h2>Esteban Ossandón Vega</h2>
                    <h2>Soy Desarrollador FullStack</h2>
                    <button className="btn btn-primary">Descargar CV</button>
                    <button className="btn btn-primary m-3">Hablemos</button>
                </div>
                <div className="col-6 border border-primary">
                    <img src={avatar} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Me;