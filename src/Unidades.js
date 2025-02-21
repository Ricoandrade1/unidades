import React from 'react';
import './Unidades.css';

function Unidades() {
  return (
    <div className="unidades-container">
      <h1>Selecione a Unidade</h1>
      <a href="braga.html" className="unidade-link"><button className="unidade-button">Braga</button></a>
      <a href="povoa.html" className="unidade-link"><button className="unidade-button">Póvoa de Varzim</button></a>
      <a href="famalicao.html" className="unidade-link"><button className="unidade-button">Famalicão</button></a>
      <a href="barcelos.html" className="unidade-link"><button className="unidade-button">Barcelos</button></a>
    </div>
  );
}

export default Unidades;
