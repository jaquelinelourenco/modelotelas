import * as React from 'react';

export default function CardDadosEficiencia() {
  return (
    <div>
      <div className="card">
        <div className="card-header">Dados de eficiência da manutenção</div>
        <div className="card-body">
          <p>
            Duração de preventiva
            <input href="#" className="btn border-info" />
          </p>
        </div>
        <div className="card-body">
          <p>
            Duração de corretiva
            <input href="#" className="btn border-info" />
          </p>
        </div>
        <div className="card-body">
          <p>
            Duração de inspeção
            <input href="#" className="btn border-info" />
          </p>
        </div>
      </div>
    </div>
  );
}
