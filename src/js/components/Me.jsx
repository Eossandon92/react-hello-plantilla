import React from "react";
import avatar from "../../img/me.png";


const Me = () => {
    return (
        <div className="">
            <div className="row mt-5 d-flex justify-content-center align-items-center ">
                <div className="col-4 ">
                    <h4>Hola, mi nombre es</h4>
                    <h2>Esteban Ossandón Vega</h2>
                    <h2>Soy Desarrollador FullStack</h2>
                    <button className="btn btn-primary">Descargar CV</button>
                    <button className="btn btn-primary m-3">Hablemos</button>
                </div>
                <div className="col-3 mb-5 d-flex justify-content-center">
                    <img src={avatar} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Me;