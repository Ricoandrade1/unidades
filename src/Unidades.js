import React from 'react';
import './Unidades.css';
import { Link } from 'react-router-dom';

function Unidades() {
  return (
    <div className="unidades-container">
      <h1>Selecione a Unidade</h1>
      <Link to="/braga" className="unidade-link"><button className="unidade-button">Braga</button></Link>
      <Link to="/povoa" className="unidade-link"><button className="unidade-button">Póvoa de Varzim</button></Link>
      <Link to="/famalicao" className="unidade-link"><button className="unidade-button">Famalicão</button></Link>
      <Link to="/barcelos" className="unidade-link"><button className="unidade-button">Barcelos</button></Link>
    </div>
  );
}

export default Unidades;
