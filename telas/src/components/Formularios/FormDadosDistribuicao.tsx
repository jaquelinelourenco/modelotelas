import * as React from 'react';
import './style.css';

export default function FormDadosDistribuicao() {
  return (
    <div className="tableMargem">
      <div>
        <h3>Distribuição</h3>
        <p>Beta Weibayes</p>
        <form noValidate autoComplete="off">
          <div>
            <label>Mínimo triangular</label>
            <input />
          </div>
          <div>
            <label>Mode triangular</label>
            <input />
          </div>
          <div>
            <label>Máximo</label>
            <input />
          </div>
        </form>
      </div>
    </div>
  );
}
