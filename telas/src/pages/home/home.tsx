import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function Home() {
  const navigate = useNavigate();

  const goToFormPage = () => {
    navigate('/for');
  };

  const goToTabPage = () => {
    navigate('/tab');
  };

  const goToCardPage = () => {
    navigate('/card');
  };

  return (
    <div className="buttonContainer">
      <h1>Home</h1>
      <img />
      <h6>Modelos Tela</h6>
      <div>
        <button
          onClick={goToTabPage}
          type="button"
          className="btn btn-outline-danger"
        >
          Tela Tabela
        </button>
        <button
          onClick={goToFormPage}
          type="button"
          className="btn btn-outline-danger"
        >
          Tela Formulario
        </button>
        <button
          onClick={goToCardPage}
          type="button"
          className="btn btn-outline-danger"
        >
          Tela Cards
        </button>
      </div>
    </div>
  );
}
