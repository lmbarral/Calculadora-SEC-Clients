import React, { useState } from "react";
import "./PreCalculator.css"

const PreCalculator = ({handleClick1, handleClick2, handleClick3}) => {

    const state1 = true;
    const state2 = true;
    const state3 = true;

    const onClick1 = () => {
        handleClick1(state1);
        //console.log(state1)
    }

    const onClick2 = () => {
        handleClick2(state2);
        //console.log(state2)
    }

    const onClick3 = () => {
        handleClick3(state3);
    }

    return(
        <section id="precalculator">
            <div className="PreCalcStyle">
                <h1 className="PreCalc">CALCULADORA SEC</h1>
                <div className="Body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos molestias doloribus ipsa, vero sapiente tempora beatae aliquam labore aspernatur voluptatum vel, repellendus corporis quam, modi saepe praesentium laudantium sit illo.</p>
                </div>
                <div className="Selector">
                    <div class="d-grid gap-2">
                        <button class="btn" className="btn-config" type="submit" onClick={onClick1}>Calculadora de Sueldo</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn" className="btn-config" type="submit" onClick={onClick2}>Calculadora de Horas Extras</button>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn" className="btn-config" type="submit" onClick={onClick3}>Calculadora de Aguinaldo</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PreCalculator