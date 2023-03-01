import React from 'react';
import './Nav.css';
import { MdLogin } from "react-icons/md"

const Nav = () =>{

    return(
        <section id="nav">
            <div className="Nav-Style">
                <div className="top-nav">
                    <div className='top-nav-long'>CENTRO DE ATENCIÓN TELEFÓNICA AL AFILIADO: <a href="tel:0800-345-1120" className='Upper-a'><strong>0800-345-1120</strong></a> // MESA DE AYUDA PARA EMPRESAS: <a href="tel:0810-345-0097" className='Upper-a'><strong>0810-345-0097</strong></a></div>
                    <div className="top-nav-short">Atención al Afiliado: <a href="tel:0800-345-1120" className='Upper-a'><strong>0800-345-1120</strong></a></div>
                </div>
                <div className="mid-nav">
                    <strong>SINDICATO EMPLEADOS DE COMERCIO</strong> de Capital Federal
                </div>
                <div className="Color-bar"></div>
                <div className="bottom-nav">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="https://www.sec.org.ar/index.php"><img src="https://www.sec.org.ar/img/SEC-logo_header.png" alt="" /></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="https://www.sec.org.ar/secretarias.php" className='Nav-A'>INSTITUCIONAL</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="http://beneficios.sec.org.ar/" className='Nav-A'>BENEFICIOS</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="https://www.sec.org.ar/novedades.php" className='Nav-A'>NOVEDADES</a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="https://www.sec.org.ar/contacto.php" className='Nav-A'>CONTACTO</a>
                                </li>
                            </ul>
                            <div class="hidden-xs">
                                <ul class="nav navbar-nav navbar-right">
                                        <li className="Nav-B"><a class="nav-link" href="https://aportes.sec.org.ar/" className='Nav-B'><MdLogin /> ACCESO EMPRESAS</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default Nav