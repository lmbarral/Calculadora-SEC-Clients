import React, { useState, useRef, useEffect } from "react";
import './Extras.css';

const Extras = ({handleClick2, pError}) => {

    const [base, setBase] = useState("");
    const [ant, setAnt] = useState("");
    const [extras50, setExtras50] = useState("");
    const [extras100, setExtras100] = useState("");
    const [EX50, setEX50] = useState(0);
    const [EX100, setEX100] = useState(0);
    const [error, setError] = useState(true);
    const thisRef = useRef();

    useEffect(() => {
        if (thisRef.current) {
          thisRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    const JOR = Number(base);
    const ANT = JOR * Number(ant);
    const PRES = (JOR + ANT) * 0.08333;

    const handleSubmit = e => {
        e.preventDefault();
        if(!base && !ant) {
            pError(error);
            return
        };
        if(base === "" && ant === "") {
            pError(error);
            return
        };
        if(!extras50 && !extras100) {
            pError(error);
            return
        };
        if(extras50 === "" && extras100 === "") {
            pError(error);
            return
        };
        /*console.log(base, ant, extras50, extras100);*/
        setEX50(((JOR + PRES)/192)*1.5*Number(extras50));
        setEX100(((JOR + PRES)/192)*2*Number(extras100));
    }

    const handleErrase = () => {
        if(base === "" && ant === "" && extras50 === "" && extras100 === "") return;
        setBase("");
        setAnt("");
        setExtras50("");
        setExtras100("");
        setEX50("");
        setEX100("");
        setError(false);
        pError(error);
        setError(current => !current);
    }

    const handleClosure = () => {
        handleClick2(false);
        handleErrase();
        pError(false);
    }

    return(
        <section id="extras" ref={thisRef}>
            <div className="Extras-style">
                <div className="PreExtras">
                    <h2 className="Extras-Title">CALCULADORA DE HORAS EXTRAS</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <h4>Sueldo Base + Presentismo</h4>
                                <input type="number" className="form-control text-center" id="base" placeholder="Ingresá el valor acá" onChange={(e) => { setBase(e.target.value) }}></input>
                            </div>
                            <div className="col">
                                <h4>Años de Antigüedad</h4>
                                <select
                                className="form-select text-center"
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
                        <div className="row">
                            <div className="col">
                                <h4>Horas Extras al 50%</h4>
                                <input type="number"
                                className="form-control text-center"
                                id="extras50"
                                //autoFocus
                                placeholder="Cant. de Horas Extras"
                                value={extras50}
                                onChange={(e) => { setExtras50(e.target.value) }}></input>
                            </div>
                            <div className="col">
                                <h4>Horas Extras al 100%</h4>
                                <input type="number"
                                className="form-control text-center"
                                id="extras100"
                                //autoFocus
                                placeholder="Cant. de Horas Extras"
                                value={extras100}
                                onChange={(e) => { setExtras100(e.target.value) } }></input>
                            </div>
                        </div>
                    </div>
                    <div className="results">
                        <div className="extras-50"><h2 className="Sub-h2">Total Extras al 50%: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX50)}</h2></div>
                        <div className="extras-100"><h2 className="Sub-h2">Total Extras al 100%: ${new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'ARS' }).format(EX100)}</h2></div>
                    </div>
                    <div className="Selector">
                        <div className="d-grid gap-2">
                            <button className="btn btn-success" type="submit" onClick={handleSubmit}>Simular</button>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-danger" type="reset" onClick={handleErrase}>Borrar Calculadora</button>
                        </div>
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" type="reset" onClick={handleClosure}>Cerrar Calculadora</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Extras