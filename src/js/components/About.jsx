import React from "react";
import avatar from "../../img/me.png";


const About = () => {
    return (
        <div className="">
            <div className="row container-about d-flex justify-content-center align-items-center ">
                <div className="col-6 ">
                    <h2>Sobre mí</h2>
                    <p>Soy desarrollador de software con experiencia en sistemas críticos para los sectores de seguros y gestión pública. A lo largo de mi carrera he trabajado con bases de datos, reglas de negocio complejas, cálculos financieros y procesos de validación de información, donde la precisión y la confiabilidad son clave. Este contacto constante con la información y su impacto directo en los procesos despertó mi interés por el análisis de datos y por cómo utilizar los datos para mejorar procesos y apoyar la toma de decisiones.

                        En mi experiencia profesional he participado en el ciclo completo de desarrollo de software, manteniendo y modernizando sistemas heredados, optimizando consultas SQL y asegurando la integridad de los datos en plataformas de alto impacto operativo. El análisis de problemas, la identificación de patrones y la comprensión profunda del negocio han sido parte central de mi trabajo diario, habilidades que hoy busco aplicar y fortalecer dentro del ámbito del data analysis.</p>
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