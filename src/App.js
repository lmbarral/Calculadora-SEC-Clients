import React, { useRef, useState } from 'react';
import './App.css';
import Nav from './modules/NavBar/Nav';
import PreCalculator from './modules/PreCalculator/PreCalculator';
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

  const onSubmit = form => {
    setNeto(Math(form));
  }

  const pState = state => {
    setSt(state);
  }

  const pError = error => {
    setError(error);
  }

  return (
    <div className="App">
      <>
        <Nav />
        <PreCalculator />
        {error && st && <Error />}
        <Calculator submitSearch={onSubmit} passState={pState} pError={pError} />
        {!st && <ShowData neto={neto} />}
        <Footer />
      </>
    </div>
  );
}

export default App;