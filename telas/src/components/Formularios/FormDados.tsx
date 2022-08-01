import * as React from 'react';
import './style.css';

export default function FormDados() {
  return (
    <div className="containerF">
      <div>
        <h5>Dados</h5>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-app"
            viewBox="0 0 16 16"
          >
            <path d="M11 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6zM5 1a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4H5z" />
          </svg>
          Dados de vida
        </p>
        <button type="button" className="btn btn-secondary">
          Dados de Degradação
        </button>
      </div>
    </div>
  );
}
