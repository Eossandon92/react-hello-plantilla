import React from "react";
import avatar from "../../img/me.png";


const About = () => {
    return (
        <div className="container mt-5">
            <div className="row container-about d-flex justify-content-center align-items-center ">
                <div className="col-5">
                    <h2>Sobre <strong className="text-yellow">mí</strong></h2>
                    <p>Me desempeño como <strong className="text-yellow">Desarrollador </strong>priorizando la solidez en <strong className="text-yellow">sistemas de alto impacto. </strong> Mi experiencia se centra en la programación de lógica de negocio compleja (como cálculos financieros), <strong className="text-yellow">asegurando la integridad de datos </strong> y optimizando el rendimiento de consultas SQL. Utilizo el análisis de datos para impulsar la mejora continua en la confiabilidad de los procesos</p>
                </div>
                <div className="col-4 mt-5 mb-5">
                    <div class="shape-container">
                        <div>
                            <div class="pill yellow left"></div>
                            <div class="circle top"></div>
                        </div>
                        <div>
                            <div class="pill outline center"></div>

                        </div>
                        <div>
                            <div class="pill yellow right"></div>
                            <div class="circle bottom"></div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;