import * as React from 'react';

export default function CardDadosEconomicos() {
  return (
    <div>
      <div className="card">
        <div className="card-header">Dados econômicos da manutenção</div>
        <div className="card-body">
          <p>
            Custo de Preventiva
            <input href="#" className="btn border-info" />
          </p>
        </div>
        <div className="card-body">
          <p>
            Custo de corretiva
            <input href="#" className="btn border-info" />
          </p>
        </div>
        <div className="card-body">
          <p>
            Custo de inspeção
            <input href="#" className="btn border-info" />
          </p>
        </div>
      </div>
    </div>
  );
}
