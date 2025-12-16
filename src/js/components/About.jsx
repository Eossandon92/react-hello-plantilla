import React from "react";
import avatar from "../../img/me.png";
import { TypingAnimation } from "../../components/ui/typing-animation"


const About = () => {
    return (
        <div className="container mt-5">
            <div className="row container-about d-flex justify-content-center align-items-center ">
                <div className="col-5">
                    <h3>Sobre <strong className="text-yellow">mí</strong></h3>
                    <TypingAnimation>Me desempeño como  Desarrollador priorizando la solidez en sistemas de alto impacto.  Mi experiencia se centra en la programación de lógica de negocio compleja (como cálculos financieros), asegurando la integridad de datos  y optimizando el rendimiento de consultas SQL. Utilizo el análisis de datos para impulsar la mejora continua en la confiabilidad de los procesos.</TypingAnimation>
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
        </div >
    );
};

export default About;