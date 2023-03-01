import React, { useState, useRef, useEffect } from "react";
import './Checker.css';
import Math from "../Math/Math";
import { InlineWidget } from "react-calendly";

const Checker = () => {

    const [category, setCategory] = useState("");
    const [month, setMonth] = useState("");
    const [ant, setAnt] = useState("");
    const [jornada, setJornada] = useState("");
    const [base, setBase] = useState("");
    const [netoF, setNetoF] = useState({});
    const [state, setState] = useState(false);
    const [status, setStatus] = useState(true);

    const thisRef = useRef();

    useEffect(() => {
        if (thisRef.current) {
          thisRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {}, [netoF]);

    useEffect(() => {}, [status]);

    var neto = {};
    const os = "", extras50 = "", extras100 = "", feriados = "", vacaciones = "", adEmpresa = "", km = "", AG = true;
    const data = {category, month, ant, jornada, os, extras50, extras100, feriados, vacaciones, adEmpresa, km, AG}

    const handleSubmit = e => {
        e.preventDefault();
        if(!category || !month || !ant || !jornada || category === "" || month === "" || ant === "" || jornada === "") {
            return;
        }
        //console.log(data);
        neto = Math(data);
        setNetoF(neto);
        //console.log(netoF)
        setState(true);
        if(neto.TOTAL <= base) setStatus(true); else setStatus(false);
        //console.log(status)
    }

    const handleErrase = () => {
        setNetoF("");
        if(category === "" || month === "" || ant === "" || jornada === "") return;
        setCategory("");
        setMonth("");
        setAnt("");
        setJornada("");
        if(data === "" || data === {} || data === undefined) return;
    }

    const handleReturn = () => {
        setStatus(false);
        setState(false);
        handleErrase();
    }

    return(
        <section id="checker">
            <div className="Checker-Style">
                <h1 className="PreCalc">¡Corroborá tu SUELDO con la calculadora del SEC!</h1>
                <div className="Checker-Body">
                    <p>
                        ¿Tenés dudas sobre tu recibo de sueldo? Con nuestra práctica aplicación web, podrás comprobar sí el total que cobrás en mano se encuentra por dentro o fuera del valor base del convenio según tu categoría.
                    </p>
                    {!state && <div className="Checker-Form">
                        <h4 className="Title-Background">Completá el formulario a continuación para evaluar el monto de tu recibo</h4>
                        <form className="CheckerForm" onSubmit={handleSubmit}>
                            <div className="container text-left ">
                                <div className="row row-checker">
                                    <div className="col col-checker">
                                        <h6>Elegí tu categoría:</h6>
                                        <select
                                        className="form-select text-center form-checker"
                                        type="text"
                                        name="Category"
                                        required
                                        autoFocus
                                        value={category}
                                        onChange={(e) => { setCategory(e.target.value) }}>
                                            <option defaultValue={""}>Elegí una opción</option>
                                            <option className="disOpt" disabled>CONVENIO GENERAL</option>
                                            <option value="11" >Maestranza A</option>
                                            <option value="12" >Maestranza B</option>
                                            <option value="13" >Maestranza C</option>
                                            <option value="21" >Administrativo A</option>
                                            <option value="22" >Administrativo B</option>
                                            <option value="23" >Administrativo C</option>
                                            <option value="24" >Administrativo D</option>
                                            <option value="25" >Administrativo E</option>
                                            <option value="26" >Administrativo F</option>
                                            <option value="31" >Cajeros A</option>
                                            <option value="32" >Cajeros B</option>
                                            <option value="33" >Cajeros C</option>
                                            <option value="41" >Auxiliar A</option>
                                            <option value="42" >Auxiliar B</option>
                                            <option value="43" >Auxiliar C</option>
                                            <option value="51" >Auxiliar Especializado A</option>
                                            <option value="52" >Auxiliar Especializado B</option>
                                            <option value="61" >Vendedor A</option>
                                            <option value="62" >Vendedor B</option>
                                            <option value="63" >Vendedor C</option>
                                            <option value="64" >Vendedor D</option>
                                            <option className="disOpt" disabled>CONVENIO CALL CENTER</option>
                                            <option value="71" >Mantenimiento</option>
                                            <option value="81" >Administrativo</option>
                                            <option value="91" >Operación A</option>
                                            <option value="92" >Operación B</option>
                                            <option className="disOpt" disabled>CONVENIO TURISMO</option>
                                            <option value="101">Supervisor A1</option>
                                            <option value="102">Administrativo 1° A2</option>
                                            <option value="103">Administrativo 2° A3</option>
                                            <option value="104">Recepcionista A4</option>
                                            <option value="105">Cadete A5</option>
                                            <option value="106">Maestranza A6</option>
                                            <option value="111">Supervisor B1</option>
                                            <option value="112">Vendedor 1° B2</option>
                                            <option value="113">Vendedor 1° B3</option>
                                            <option value="114">Promotor B4</option>
                                            <option value="121">Supervisor C1</option>
                                            <option value="122">Auxiliar 1° C2</option>
                                            <option value="123">Auxiliar 2° C3</option>
                                            <option value="124">Conductor-Guía C4</option>
                                            <option value="125">Encargado de Vehículo C5</option>
                                            <option value="131">Desarrollador Principiante D1A</option>
                                            <option value="132">Desarrollador Junior D1B</option>
                                            <option value="133">Desarrollador Semi Senior D1C</option>
                                            <option value="134">Desarrollador Senior D1D</option>
                                            <option value="141">Infraestructura Principiante D2A</option>
                                            <option value="142">Infraestructura Junior D2B</option>
                                            <option value="143">Infraestructura Semi Senior D2C</option>
                                            <option value="144">Infraestructura Senior D2D</option>
                                            <option value="151">Prod. Téc. Principiante D3A</option>
                                            <option value="152">Prod. Téc. Junior D3B</option>
                                            <option value="153">Prod. Téc. Semi Senior D3C</option>
                                            <option value="154">Prod. Téc. Senior D3D</option>
                                            <option value="161">Mkt. Online Principiante D4A</option>
                                            <option value="162">Mkt. Online Junior D4B</option>
                                            <option value="163">Mkt. Online Semi Senior D4C</option>
                                            <option value="164">Mkt. Online Senior D4D</option>
                                            <option value="171">Supervisor D5</option>
                                            <option value="181">Operador E1</option>
                                            <option value="182">Operador E2</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-checker">
                                    <div className="col col-checker">
                                        <h6>Elegí el mes de cálculo:</h6>
                                        <select
                                        className="form-select text-center form-checker"
                                        type="text"
                                        name="month"
                                        //required
                                        autoFocus
                                        value={month}
                                        onChange={(e) => { setMonth(e.target.value) }}>
                                            <option defaultValue={"0"}>Elegí una opción</option>
                                            <option value="202304" >Abr.2023</option>
                                            <option value="202303" >Mar.2023</option>
                                            <option value="202302" >Feb.2023</option>
                                            <option value="202301" >Ene.2023</option>
                                            <option value="202212" >Dic.2022</option>
                                            <option value="202211">Nov.2022</option>
                                            <option value="202210" >Oct.2022</option>
                                            <option value="202209" >Sep.2022</option>
                                            <option value="202208" >Ago.2022</option>
                                            <option value="202207" >Jul.2022</option>
                                            <option value="202206" >Jun.2022</option>
                                            <option value="202205" >May.2022</option>
                                            <option value="202204" >Abr.2022</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-checker">
                                    <div className="col col-checker">
                                        <h6>Indicanos la antigüedad que tenés en la empresa:</h6>
                                        <select
                                        className="form-select text-center form-checker"
                                        type="number"
                                        name="ant"
                                        required
                                        //autoFocus
                                        value={ant}
                                        onChange={(e) => { setAnt(e.target.value) }}>
                                            <option defaultValue={""}>Elegí una opción</option>
                                            <option value="0.00">0</option>
                                            <option value="0.01">1</option>
                                            <option value="0.02">2</option>
                                            <option value="0.03">3</option>
                                            <option value="0.04">4</option>
                                            <option value="0.05">5</option>
                                            <option value="0.06">6</option>
                                            <option value="0.07">7</option>
                                            <option value="0.08">8</option>
                                            <option value="0.09">9</option>
                                            <option value="0.10">10</option>
                                            <option value="0.11">11</option>
                                            <option value="0.12">12</option>
                                            <option value="0.13">13</option>
                                            <option value="0.14">14</option>
                                            <option value="0.15">15</option>
                                            <option value="0.16">16</option>
                                            <option value="0.17">17</option>
                                            <option value="0.18">18</option>
                                            <option value="0.19">19</option>
                                            <option value="0.20">20</option>
                                            <option value="0.21">21</option>
                                            <option value="0.22">22</option>
                                            <option value="0.23">23</option>
                                            <option value="0.24">24</option>
                                            <option value="0.25">25</option>
                                            <option value="0.26">26</option>
                                            <option value="0.27">27</option>
                                            <option value="0.28">28</option>
                                            <option value="0.29">29</option>
                                            <option value="0.30">30</option>
                                            <option value="0.31">31</option>
                                            <option value="0.32">32</option>
                                            <option value="0.33">33</option>
                                            <option value="0.34">34</option>
                                            <option value="0.35">35</option>
                                            <option value="0.36">36</option>
                                            <option value="0.37">37</option>
                                            <option value="0.38">38</option>
                                            <option value="0.39">39</option>
                                            <option value="0.40">40</option>
                                            <option value="0.41">41</option>
                                            <option value="0.42">42</option>
                                            <option value="0.43">43</option>
                                            <option value="0.44">44</option>
                                            <option value="0.45">45</option>
                                            <option value="0.46">46</option>
                                            <option value="0.47">47</option>
                                            <option value="0.48">48</option>
                                            <option value="0.49">49</option>
                                            <option value="0.50">50</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-checker">
                                    <div className="col col-checker">
                                        <h6>Elegí la jornada que realizás:</h6>
                                        <select
                                        className="form-select text-center form-checker"
                                        type="number"
                                        name="jornada"
                                        required
                                        //autoFocus
                                        value={jornada}
                                        onChange={(e) => { setJornada(e.target.value) }}>
                                            <option defaultValue={""}>Elegí una opción</option>
                                            <option value="48">Completa (48 hs)</option>
                                            <option value="47">47 hs</option>
                                            <option value="46">46 hs</option>
                                            <option value="45">45 hs</option>
                                            <option value="44">44 hs</option>
                                            <option value="43">43 hs</option>
                                            <option value="42">42 hs</option>
                                            <option value="40">40 hs</option>
                                            <option value="39">39 hs</option>
                                            <option value="38">38 hs</option>
                                            <option value="37">37 hs</option>
                                            <option value="36">36 hs</option>
                                            <option value="35">35 hs</option>
                                            <option value="34">34 hs</option>
                                            <option value="33">33 hs</option>
                                            <option value="32">32 hs (dos tercios)</option>
                                            <option value="31">31 hs</option>
                                            <option value="30">30 hs</option>
                                            <option value="29">29 hs</option>
                                            <option value="28">28 hs</option>
                                            <option value="27">27 hs</option>
                                            <option value="26">26 hs</option>
                                            <option value="25">25 hs</option>
                                            <option value="24">24 hs (media)</option>
                                            <option value="23">23 hs</option>
                                            <option value="22">22 hs</option>
                                            <option value="21">21 hs</option>
                                            <option value="20">20 hs</option>
                                            <option value="19">19 hs</option>
                                            <option value="18">18 hs</option>
                                            <option value="17">17 hs</option>
                                            <option value="16">16 hs</option>
                                            <option value="15">15 hs</option>
                                            <option value="14">14 hs</option>
                                            <option value="13">13 hs</option>
                                            <option value="12">12 hs</option>
                                            <option value="11">11 hs</option>
                                            <option value="10">10 hs</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row row-checker">
                                    <div className="col col-checker">
                                        <h6>Ingresá el sueldo neto del período indicado:</h6>
                                        <input
                                        type="number"
                                        className="form-control text-center form-checker"
                                        id="base"
                                        placeholder="Ingresá tu sueldo base"
                                        onChange={(e) => { setBase(e.target.value) }}></input>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="submit" onClick={handleSubmit}>Simular</button>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger" type="reset" onClick={handleErrase}>Borrar Calculadora</button>
                        </div>
                    </div>}
                    {state && <div className="Checker-Result">
                        {status && <div className="Checker-True">
                                <div className="True" ref={thisRef}>
                                    <div className="Neto">
                                        <h1 className="Neto">Tu sueldo estaría bien liquidado</h1>
                                        <p className="Modif">Sí querés saber más al respecto, te invitamos a comunicarte con la <strong>Secretaría de Gremiales</strong> para despejar cualquier duda que tengas o bien conocer la liquidación de sueldo en detalle. Podés agendar una reunión personal con los abogados utilizando el calendario que te dejamos a continuación.</p>
                                    </div>
                                    <div className="Calendly-Style">
                                        <InlineWidget
                                            url="https://calendly.com/gremiales-sec/asesoramiento-gremial-sec-caba"
                                            styles={{
                                                height: '800px',
                                                color: '#004c97',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>}
                        {!status && <div className="Checker-True">
                            <div className="True" ref={thisRef}>
                                <div className="NetoM">
                                    <h1 className="NetoM">Tu sueldo estaría mal liquidado</h1>
                                    <p className="Modif">Sí querés saber más al respecto, te invitamos a comunicarte con la <strong>Secretaría de Gremiales</strong> para despejar cualquier duda que tengas o bien conocer la liquidación de sueldo en detalle. Podés agendar una reunión personal con los abogados utilizando el calendario que te dejamos a continuación.</p>
                                </div>
                            </div>
                            <div className="Calendly-Style">
                                <InlineWidget
                                    url="https://calendly.com/gremiales-sec/asesoramiento-gremial-sec-caba"
                                    styles={{
                                        height: '800px',
                                    }}
                                />
                            </div>
                        </div>}
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="reset" onClick={handleReturn}>Volver al comparador</button>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    );
}

export default Checker