import React, { useRef, useState, useEffect } from "react";
import './ShowData.css';
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import emailjs from '@emailjs/browser';
import { ImWhatsapp } from 'react-icons/im';
import { TfiEmail } from 'react-icons/tfi';
import { GoLocation } from 'react-icons/go';

const ShowData = ({neto}) => {

    
    const componentRef = useRef();
    const thisRef = useRef();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [tel, setTel] = useState("");
    const [hora, setHora] = useState("");
    const [user, setUser] = useState({});

    //console.log(neto)
    useEffect(() => {
        if (thisRef.current) {
          thisRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    
    if(!neto) return;
    const TOTAL = neto.TOTAL;
    const AUM = neto.AUM || false;
    const ANT = neto.ANT || false;
    const EX50 = neto.EX50;
    const EX100 = neto.EX100;
    const PRES = neto.PRES;
    const SUM = neto.SUM;
    const JOR = neto.JOR;
    const JUB = neto.JUB;
    const L19032 = neto.L19032;
    const DOS = neto.DOS;
    const OSECAC = neto.OSECAC;
    const ART0 = neto.ART0;
    const FAECYS = neto.FAECYS;
    const RES = neto.RES;
    const FER = neto.FER;
    const VAC = neto.VAC;
    const NDOS = neto.NDOS || false;
    const NFAECYS = neto.NFAECYS || false;
    const NART0 = neto.NART0 || false;
    const NRES = neto.NRES || false;
    const ant = neto.ant;
    const jornada = neto.jornada;
    const os = neto.os;
    const extras50 = neto.extras50;
    const extras100 = neto.extras100;
    const m = neto.m;
    const fer = neto.feriadosM;
    const vac = neto.vacacionesM;
    const CAT = neto.category;
    const AGUI =  neto.AGUI;
    const agui = neto.agui;
    const month = neto.month;
    const adEmpresaM = neto.adEmpresaM || false;
    const km = neto.km || false;
    const ACU21 = neto.ACU21 || false;
    const ACU9 = neto.ACU21 || false;
    const FIJA = neto.FIJA || false;
    const ACU21KM = neto.ACU21KM || false;
    const ACU9KM = neto.ACU9KM || false;
    const FIJAKM = neto.FIJAKM || false;
    const pBase = neto.pBase || false;
    const RACU21 = neto.RACU21 || false;
    const RFIJA = neto.RFIJA || false;
    const RACU9 = neto.RACU9 || false;
    const RACU21KM = neto.RACU21KM || false;
    const RFIJAKM = neto.RFIJAKM || false;
    const RACU9KM = neto.RACU9KM || false;
    const RKM = neto.RKM || false;
    const BASEKM = neto.BASEKM || false;
    const TUR = neto.TUR || false;
    const ACU21KM100 = neto.ACU21KM100 || false;
    const FIJAKM100 = neto.FIJAKM100 || false;
    const ACU9KM100 = neto.ACU9KM100 || false;
    const RACU21KM100 = neto.RACU21KM100 || false;
    const RFIJAKM100 = neto.RFIJAKM00 || false;
    const RACU9KM100 = neto.RACU9KM100 || false;
    const kmm100 = neto.KMM100 || false;
    const kmp100 = neto.KMP100 || false;
    
    const antFixed = (ant*100).toFixed(0);
    
    const CATEGORÍAS = {
        "11": "Maestranza A",
        "12": "Maestranza B",
        "13": "Maestranza C",
        "21": "Administrativo A",
        "22": "Administrativo B",
        "23": "Administrativo C",
        "24": "Administrativo D",
        "25": "Administrativo E",
        "26": "Administrativo F",
        "31": "Cajeros A",
        "32": "Cajeros B",
        "33": "Cajeros C",
        "41": "Auxiliar A",
        "42": "Auxiliar B",
        "43": "Auxiliar C",
        "51": "Auxiliar Especializado A",
        "52": "Auxiliar Especializado B",
        "61": "Vendedor A",
        "62": "Vendedor B",
        "63": "Vendedor C",
        "64": "Vendedor D",
        "71": "Mantenimiento",
        "81": "Administrativo",
        "91": "Operación A",
        "92": "Operación B",
        "101": "Supervisor A1",
        "102": "Administrativo 1° A2",
        "103": "Administrativo 2° A3",
        "104": "Recepcionista A4",
        "105": "Cadete A5",
        "106": "Maestranza A6",
        "111": "Supervisor B1",
        "112": "Vendedor 1° B2",
        "113": "Vendedor 1° B3",
        "114": "Promotor B4",
        "121": "Supervisor C1",
        "122": "Auxiliar 1° C2",
        "123": "Auxiliar 2° C3",
        "124": "Conductor-Guía C4",
        "125": "Encargado de Vehículo C5",
        "131": "Desarrollador Principiante D1A",
        "132": "Desarrollador Junior D1B",
        "133": "Desarrollador Semi Senior D1C",
        "134": "Desarrollador Senior D1D",
        "141": "Infraestructura Principiante D2A",
        "142": "Infraestructura Junior D2B",
        "143": "Infraestructura Semi Senior D2C",
        "144": "Infraestructura Senior D2D",
        "151": "Prod. Téc. Principiante D3A",
        "152": "Prod. Téc. Junior D3B",
        "153": "Prod. Téc. Semi Senior D3C",
        "154": "Prod. Téc. Senior D3D",
        "161": "Mkt. Online Principiante D4A",
        "162": "Mkt. Online Junior D4B",
        "163": "Mkt. Online Semi Senior D4C",
        "164": "Mkt. Online Senior D4D",
        "171": "Supervisor D5",
        "181": "Operador E1",
        "182": "Operador E2",
    };

    const ANTG = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Antigüedad</th>
                    <td>{antFixed}%</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ANT)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const SAC = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Aguinaldo (SAC)</th>
                    <td>-</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AGUI)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const ADEMPRESA = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Adicional Empresa</th>
                    <td>-</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(adEmpresaM)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const FERIADOS = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Feriados</th>
                    <td>{fer}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(FER)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const EXTRAS50 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Horas Extras al 50%</th>
                    <td>{extras50}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX50)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const EXTRAS100 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Horas Extras al 100%</th>
                    <td>{extras100}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX100)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const VACACIONES = () => {
                            
        return(
            <tr>
                <th scope="row" className="Col-left">Vacaciones</th>
                    <td>{vac}</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(VAC)}</td>
                    <td>-</td>
                    <td>-</td>
            </tr>
        );
    }

    const ACUERDO = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Aumento Acuerdo</th>
                    <td>{m*100}%</td>
                    <td>-</td>
                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM)}</td>
                    <td>-</td>
            </tr>
        );
    }

    const ACU21T = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Acuerdo No Rem. 21%</th>
                <td>{ACU21 * 100}%</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RACU21)}</td>
                <td>-</td>
            </tr>
        );
    }

    const ACU9T = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Acuerdo No Rem. 9%</th>
                <td>{ACU9 * 100}%</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RACU9)}</td>
                <td>-</td>
            </tr>
        );
    }

    const FIJAT = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Suma Fija Acuerdo</th>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RFIJA)}</td>
                <td>-</td>
            </tr>
        );
    }

    const PBASET = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Base Adicional KM</th>
                <td>{kmm100} kms</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(BASEKM)}</td>
                <td>-</td>
                <td>-</td>
            </tr>
        );
    }

    const ACU21KMT = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Acuerdo No Rem. 21% Adicional KM (Hasta 100 Km)</th>
                <td>{ACU21KM * 100}%</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RACU21KM)}</td>
                <td>-</td>
            </tr>
        );
    }

    const ACU9KMT = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Acuerdo No Rem. 9% Adicional KM (Hasta 100 Km)</th>
                <td>{ACU9KM * 100}%</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RACU9KM)}</td>
                <td>-</td>
            </tr>
        );
    }

    const FIJAKMT = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Suma Fija Acuerdo Adicional KM (Hasta 100 Km)</th>
                <td>{kmm100} kms</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RFIJAKM)}</td>
                <td>-</td>
            </tr>
        );
    }

    const ACU21KMT100 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Acuerdo No Rem. 21% Adicional KM (Más de 100 Km)</th>
                <td>{ACU21KM * 100}%</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RACU21KM100)}</td>
                <td>-</td>
            </tr>
        );
    }

    const ACU9KMT100 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Acuerdo No Rem. 9% Adicional KM (Más de 100 Km)</th>
                <td>{kmp100} kms</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RACU9KM100)}</td>
                <td>-</td>
            </tr>
        );
    }

    const FIJAKMT100 = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Suma Fija Acuerdo Adicional KM (Más de 100 Km)</th>
                <td>{kmp100} kms</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RFIJAKM100)}</td>
                <td>-</td>
            </tr>
        );
    }

    const EXOS = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Extraordinario Obra Social</th>
                <td>3%</td>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NDOS)}</td>
            </tr>
        );
    }

    const EXSEC = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Extraordinario S.E.C.</th>
                <td>2%</td>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NART0)}</td>
            </tr>
        );
    }

    const EXFAECYS = () => {

        return(
            <tr>
                <th scope="row" className="Col-left">Extraordinario F.A.E.C.Y.S.</th>
                <td>0,5%</td>
                <td>-</td>
                <td>-</td>
                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(NFAECYS)}</td>
            </tr>
        );
    }

    const handleExport = () => {
        const pdf = new jsPDF("p", "mm", "a4");
        
        if(name === "" || email === "") return;
        setUser({name, email});

        autoTable(pdf, {
            html: '#recibo',
            theme:'grid',
            headStyles: {
                fillColor: '#004c97'
            },
            columnStyles:{
                1: {halign: "center"},
                2: {halign: "center"},
                3: {halign: "center"},
                4: {halign: "center"},
                5: {halign: "center"}
            },
            bodyStyles: {
                textColor: '#004c97'
            },
            footStyles: {
                halign: "center"
            }
        });
        pdf.save(`Recibo-SEC_${CATEGORÍAS[CAT]}_${month}`);
        //let pdfOutput = pdf.output();
        //console.log(pdfOutput)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name === "" || email === "") return;
        handleExport();

        emailjs.sendForm('Gremiales SEC','template_5pad7f3','#emailForm','iWHVlKZpwMfy0pzmm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            
        setName("");
        setEmail("");
    }

    return(
        <section id="ShowData">
            <div className="ShowData_Style">
                <div className="Recibo" ref={thisRef}>
                    <div className="neto">
                        <h1 className="neto">Total del Convenio: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(TOTAL)}</h1>
                        <div className="texto">
                        <p>
                            El valor representado indica el sueldo neto final en función al sueldo base indicado dentro del acuerdo paritario en relación a nuestro convenio. Sí tenés dudas sobre el total que cobrás en relación al resultado, o sí simplemente querés saber más sobre la composición de tu recibo de sueldo, no dudes en comunicarte con la <strong>Secretaría de Asuntos Gremiales</strong> por cualquiera de los medios mencionados a continuación:
                        </p>
                        <div className="contactos">
                            <a href="https://api.whatsapp.com/send?phone=5491136826116" className="links">
                                <div className="contenedor">
                                    <div className="icon">
                                        <ImWhatsapp />
                                    </div>
                                    <div className="text">
                                        CHAT ONLINE
                                    </div>
                                </div>
                            </a>
                            <a href="mailto:gremiales@sec.org.ar" className="links">
                                <div className="contenedor">
                                    <div className="icon">
                                        <TfiEmail />
                                    </div>
                                    <div className="text">
                                        CORREO DE GREMIALES
                                    </div>
                                </div>
                            </a>
                            <a href="#selector" className="links">
                                <div className="contenedor">
                                    <div className="icon">
                                        <GoLocation />
                                    </div>
                                    <div className="text">
                                        AGENDÁ UNA REUNIÓN
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="table-responsive d-none" ref={componentRef} >
                    <table className="table table-bordered" id="recibo">
                        <thead>
                            <tr>
                                <th colSpan={5} className="Title">
                                    CATEGORÍA: {CATEGORÍAS[CAT]}
                                    <br />
                                    ANTIGÜEDAD: {antFixed} AÑO/S
                                    <br />
                                    JORNADA: {jornada} Horas
                                </th>
                            </tr>
                            <tr>
                                <th scope="col" className="First-col" key={1}>HABERES</th>
                                <th scope="col" className="Second-col" key={2}>UNIDADES</th>
                                <th scope="col" className="Third-col" key={3}>REMUNERATIVOS</th>
                                <th scope="col" className="Fourth-col" key={4}>NO REMUNERATIVOS</th>
                                <th scope="col" className="Fourth-col" key={5}>DEDUCCIONES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row" className="Col-left">Sueldo Base</th>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(JOR)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <>
                                {ant && <ANTG />}
                            </>
                            <>
                                {fer && <FERIADOS />}
                            </>
                            <>
                                {extras50 && <EXTRAS50 />}
                            </>
                            <>
                                {extras100 && <EXTRAS100 />}
                            </>
                            <>
                                {agui && <SAC />}
                            </>
                            <>
                                {adEmpresaM && <ADEMPRESA />}
                            </>
                            <>
                                {ACU21 && <ACU21T />}
                            </>
                            <>
                                {ACU9 && <ACU9T />}
                            </>
                            <>
                                {FIJA && <FIJAT />}
                            </>
                            <>
                                {pBase && <PBASET />}
                            </>
                            <>
                                {ACU21KM && <ACU21KMT />}
                            </>
                            <>
                                {ACU9KM && <ACU9KMT />}
                            </>
                            <>
                                {FIJAKM && <FIJAKMT />}
                            </>
                            <>
                                {ACU21KM100 && <ACU21KMT100 />}
                            </>
                            <>
                                {ACU9KM100 && <ACU9KMT100 />}
                            </>
                            <>
                                {FIJAKM100 && <FIJAKMT100 />}
                            </>
                            <tr>
                                <th scope="row" className="Col-left">Presentismo</th>
                                    <td>8,33%</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(PRES)}</td>
                                    <td>-</td>
                                    <td>-</td>
                            </tr>
                            <>
                                {vac && <VACACIONES />}
                            </>
                            <>
                                {AUM && <ACUERDO />}
                            </>
                            <tr>
                                <th scope="row" className="Col-left">Jubilación</th>
                                    <td>11%</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(JUB)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Ley 19.032</th>
                                    <td>3%</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(L19032)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Aporte Obra Social</th>
                                <td>{os * 100}%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(DOS)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">Aporte Solidario O.S.E.C.A.C.</th>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(OSECAC)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">S.E.C.</th>
                                <td>2%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(ART0)}</td>
                            </tr>
                            <tr>
                                <th scope="row" className="Col-left">F.A.E.C.Y.S.</th>
                                <td>0,5%</td>
                                <td>-</td>
                                <td>-</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(FAECYS)}</td>
                            </tr>
                            <>
                                {NDOS && <EXOS />}
                            </>
                            <>
                                {NART0 && <EXSEC />}
                            </>
                            <>
                                {NFAECYS && <EXFAECYS />}
                            </>
                            <tr className="Spacer"><th colSpan={5} key={"spacer"}></th></tr>
                            <tr>
                                <th scope="row" colSpan={2}>Totales Parciales</th>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(SUM + AGUI)}</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(AUM + TUR)}</td>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(RES + NRES)}</td>
                            </tr>
                            <tr>
                                <th scope="row" colSpan={4}>Sueldo Neto</th>
                                <td>${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(TOTAL)}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan={5} className="Footer">
                                    La presente liquidación no es real y se imprime al sólo efecto de orientar sobre la misma. Cada caso puede ser revisado puntualmente enviando la documentación a gremiales@sec.org.ar.
                                </th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div className="Selector" id="selector">
                    <div className="d-grid gap-2">
                        <div className="Selector-style">
                            <h3>¿Te quedaron dudas?</h3>
                            <h2>¡Agendá una reunión con nuestros abogados!</h2>
                            <p>
                                Completá el formulario a continuación y nos pondremos en contacto con vos a la brevedad.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} id="emailForm">
                            <div className="mb-3">
                                <label className="form-label">Nombre Completo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="user_name"
                                    required
                                    onChange={(e) => { setName(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Empresa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="empresa"
                                    required
                                    onChange={(e) => { setEmpresa(e.target.value) }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Número de Contacto</label>
                                <div className="tel-style">
                                    <div className="prefix"><div className="staticPre">+54 9</div></div>
                                    <input
                                        colSpan={3}
                                        type="number"
                                        className="form-control control"
                                        id="Tel"
                                        required
                                        onChange={(e) => { setTel(e.target.value) }}
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Rango Horario Preferido</label>
                                <select
                                    type="text"
                                    className="form-control text-center"
                                    id="hora"
                                    required
                                    onChange={(e) => { setHora(e.target.value) }}
                                >
                                    <option value="0">Elegí una opción</option>
                                    <option value="1">10:00hs - 11:00hs</option>
                                    <option value="2">11:00hs - 12:00hs</option>
                                    <option value="3">12:00hs - 13:00hs</option>
                                    <option value="4">13:00hs - 14:00hs</option>
                                    <option value="5">14:00hs - 15:00hs</option>
                                    <option value="6">15:00hs - 16:00hs</option>
                                    <option value="7">16:00hs - 17:00hs</option>
                                    <option value="8">17:00hs - 18:00hs</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Dirección de Correo Electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="emailcontacto"
                                    required
                                    name="user_email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />
                                <div id="emailHelp" className="form-text">Jamás compartiremos este correo con terceros.</div>
                            </div>
                        </form>
                        <button class="btn" className="btn-config" type="submit" onClick={handleSubmit}>Enviar Formulario</button>
                    </div>
                </div>
            </div>
        </div> 
    </section>
    );
}

export default ShowData;