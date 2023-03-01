import React, { useRef, useEffect } from "react";
import './Error.css';
import { FaExclamation } from 'react-icons/fa'

const ErrorEx = () => {

    const componentRef = useRef();
    
    useEffect(() => {
        if (componentRef.current) {
          componentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return(
        <section id="error" ref={componentRef}>
            <div className="Error-style">
                <div class="row align-items-center">
                    <div class="col-3 bg-transparent d-flex justify-content-center">
                        <div className="Error-image">
                            <div className="sign stack-top"><FaExclamation className="Exclamation" /></div>
                        </div>
                    </div>
                    <div class="col-9 bg-transparent">
                        <div className="text">
                            <p className="Error-text">Los campos SUELDO BASE + PRESENTISMO, AÑOS DE ANTIGÜEDAD y, por lo menos, UN CAMPO DE HORAS EXTRAS deben completarse para realizar el cálculo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ErrorEx