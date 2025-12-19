import React from "react";
import avatar from "../../img/me.png";

const Me = () => {
    const isDesktop = window.innerWidth >= 992;
    return (
        <section className="container-fluid min-vh-100 min-vh-lg-0 d-flex align-items-center mb-0">
            <div className="w-100 px-3 px-lg-5">
                <div className="row justify-content-center align-items-center">

                    {/* TEXTO */}
                    <div className="col-12 col-lg-4 text-center text-lg-start mb-4 mb-lg-0">
                        <h4 className="fs-5 fs-lg-4">Hola, mi nombre es</h4>

                        <h2 className="fw-bold display-6 display-lg-4">
                            Esteban Ossandón
                        </h2>

                        <h4 className="fs-5 fs-lg-4 mt-2">
                            Soy <strong className="text-yellow">Desarrollador FullStack</strong>
                        </h4>


                        <div className="mt-4">
                            <a
                                href={`${import.meta.env.BASE_URL}Esteban-Ossandón-Vega-FlowCV-Resume-20251216.pdf`}
                                download
                                className="btn button-yellow me-3"
                            >
                                Descargar CV
                            </a>


                            <a
                                href="https://www.linkedin.com/in/esteban-ignacio-ossandón-vega-8b301212b"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-reverse"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* AVATAR */}
                    <div className="col-12 col-lg-2 d-flex justify-content-center img-wrapper">
                        <img
                            src={avatar}
                            alt="Avatar"
                            className="img-fluid img-contorno "
                            style={{
                                maxWidth: isDesktop ? "500px" : "420px"
                            }}
                        />

                    </div>

                </div>
            </div>
        </section>

    );
};

export default Me;
