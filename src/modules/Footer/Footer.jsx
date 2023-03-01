import React from "react";
import "./Footer.css"
import { BsFillEnvelopeFill } from "react-icons/bs";

const Footer = () => {

    return(
        <section id="footer">
            <div className="PreFooter">
                <div className="Row-Control">
                    <div class="row">
                        <div class="col-sm-4 d-flex flex-column">
                            <a href="https://www.sec.org.ar/index.php" className="SEC-Logo">
                                <img src="https://www.sec.org.ar/img/SEC-logo_footer.png" alt="" className="image"/>
                            </a>
                            <div className="Code-div">
                                <code className="Code">Sede Central</code>
                                <br/>
                                <br/>
                                Moreno 625, (C1091AAM)
                                <br/>
                                Ciudad de Buenos Aires,
                                <br/>
                                Argentina
                            </div>
                        </div>
                        <div class="col text-align-left col-sm-2 .d-none .d-sm-block">
                            <a href="https://www.sec.org.ar/secretarias.php" className="Footer-a">Institucional</a>
                            <a href="https://www.sec.org.ar/secretarias.php" className="Footer-a">Secretarías</a>
                            <a href="http://beneficios.sec.org.ar/" className="Footer-a">Beneficios</a>
                            <a href="https://www.sec.org.ar/fotos.php" className="Footer-a">Fotos</a>
                            <a href="https://www.sec.org.ar/contacto.php" className="Footer-a">Contacto</a>
                            <a href="https://www.sec.org.ar/afiliate.php#ModalDenuncia" className="Footer-a">Denuncias Laborales</a>
                        </div>
                        <div class="col-sm-2">
                            <a href="nuevo_webmail.php" className="Footer-b"><h6><BsFillEnvelopeFill className="Envelope"/><br/>ACCESO <strong>WEBMAIL</strong></h6></a>
                        </div>
                        <div class="col">
                            <a href="http://www.osecac.org.ar/"><img src="https://www.sec.org.ar/img/osecac.png" className="Osecac" alt="" /></a>
                        </div>
                        <div class="col">
                            <a href="http://www.faecys.org.ar/"><img src="https://www.sec.org.ar/img/faecys.png" className="Faecys" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-style">
                <div>© 2022 TODOS LOS DERECHOS RESERVADOS</div>
            </div>
        </section>
    );
}

export default Footer