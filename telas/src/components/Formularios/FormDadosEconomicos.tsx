import * as React from 'react';
import './style.css';

export default function FormDadosEconomicos() {
  return (
    <div className="tableMargem">
      <h3>Dados econômicos da manutenção</h3>
      <form noValidate autoComplete="off">
        <div>
          <label>Custo de Preventiva</label>
          <input />
        </div>
        <div>
          <label>Custo de corretiva</label>
          <input />
        </div>
        <div>
          <label>Custo de inspeção</label>
          <input />
        </div>
      </form>
    </div>
  );
}
