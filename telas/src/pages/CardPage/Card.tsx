import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from '../../imag/lnKaxev.gif';
import CardDados from '../../components/Cards/CardDados';
import CardDadosDistribuicao from '../../components/Cards/CardDadosDistribuicao';
import CardDadosEconomicos from '../../components/Cards/CardDadosEconomicos';
import CardDadosVida from '../../components/Cards/CardDadosVida';
import CardDadosEficiencia from '../../components/Cards/CardDadosEficiencia';

import '../../style.css';
import './style.css'

export default function CardPage() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  const goToGrafico3 = () => {
    navigate('/gf');
  };

  return (
    <div>
      <div className="globalStyled">
        <img src={Logo} />
        <h2>Entrada/Span</h2>
        <svg
          onClick={goToHomePage}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-house-door"
          viewBox="0 0 16 16"
        >
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
      </div>
      <div className="container">
        <div className="botaoES">
          <button type="button" className="btn btn-success">
            Entrada/Span
          </button>
          <button
            onClick={goToGrafico3}
            type="button"
            className="btn btn-light"
          >
            Saída
          </button>
        </div>
      </div>
      <CardDados />
      <CardDadosVida />
      <CardDadosDistribuicao />
      <div className="botaoCard">
          <button type="button" className="btn btn-success">
            Calcular
          </button>
          <button type="button" className="btn btn-light">
            Back To list
          </button>
        </div>
    </div>
  );
}
