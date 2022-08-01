import * as React from 'react';
import './style.css';

export default function FormDadosEficiencia() {
  return (
    <div className="tableMargem">
      <h3>Dados de eficiência da manutenção</h3>
      <form noValidate autoComplete="off">
        <div>
          <label>Duração de preventiva</label>
          <input />
        </div>
        <div>
          <label>Duração de corretiva</label>
          <input />
        </div>
        <div>
          <label>Duração de inspeção</label>
          <input />
        </div>
      </form>
    </div>
  );
}
