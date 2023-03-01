import React, { useRef, useState } from 'react';
import './App.css';
import Nav from './modules/NavBar/Nav';
import PreCalculator from './modules/PreCalculator/PreCalculator';
import Checker from './modules/Checker/Checker';
import Calculator from './modules/Calculator/Calculator';
import ShowData from './modules/ShowData/ShowData';
import Extras from './modules/Extras/Extras';
import SAC from './modules/Aguinaldo/SAC';
import Math from './modules/Math/Math';
import Error from './modules/Error/Error';
import ErrorEx from './modules/Error/ErrorEX';
import Footer from './modules/Footer/Footer';

function App() {
  const[neto, setNeto] = useState({});
  const[st, setSt] = useState(true);
  const[error, setError] = useState(false);
  const [st1, setSt1] = useState(false);
  const [st2, setSt2] = useState(false);
  const [st3, setSt3] = useState(false);

  const onSubmit = form => {
    setNeto(Math(form));
  }

  const pState = state => {
    setSt(state);
  }

  const pError = error => {
    setError(error);
  }

  const handleClick1 = state1 => {
    if(st1 === false && st2 === false && st3 === false) setSt1(state1);
    if(st1 === true && state1 === false) setSt1(false);
    if(st1 === true && st2 === false && st3 === false) return;
    if(st1 === false && (st2 === true || st3 === true)) setSt1(state1); setSt2(false); setSt3(false); setError(false);
  }

  const handleClick2 = state2 => {
    if(st1 === false && st2 === false && st3 === false) {setSt2(state2); setSt(true); setError(false)};
    if(st2 === true) {setSt2(state2); setSt(true); setError(false)};
    if(st2 === true && st1 === false && st3 === false) return;
    if(st2 === false && (st1 === true || st3 === true)) setSt1(false); setSt2(state2); setSt3(false); setSt(true); setError(false);
  }

  const handleClick3 = state3 => {
    if(st1 === false && st2 === false && st3 === false) {setSt3(state3); setSt(true); setError(false)};
    if(st3 === true) {setSt3(state3); setSt(true); setError(false)};
    if(st3 === true && st1 === false && st2 === false) return;
    if(st3 === false && (st1 === true || st2 === true)) setSt1(false); setSt3(state3); setSt2(false); setSt(true); setError(false);
  }

  //console.log(st1);
  //console.log(st2);
  //console.log(st3);

  return (
    <div className="App">
      <>
        <Nav />
        <PreCalculator handleClick1={handleClick1} handleClick2={handleClick2} handleClick3={handleClick3}/>
        {error && st && !st2 && <Error />}
        {error && st && st2 && <ErrorEx />}
        {st1 && !st2 && !st3 && <Calculator submitSearch={onSubmit} passState={pState} pError={pError} handleClick1={handleClick1}/>}
        {!st && <ShowData neto={neto} />}
        {!st1 && st2 && !st3 && <Extras handleClick2={handleClick2} pError={pError}/>}
        {!st1 && !st2 && st3 && <SAC handleClick3={handleClick3} pError={pError}/>}
        <Footer />
      </>
    </div>
  );
}

export default App;