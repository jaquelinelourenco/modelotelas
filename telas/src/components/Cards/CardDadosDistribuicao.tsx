import * as React from 'react';
import './style.css';

export default function CardDadosDistribuicao() {
  return (
    <div className="dadosContainer">
      <div className="cDistribuicao">
        <div className="card">
          <div className="card-header">Distribuição</div>
          <div className="card-body">
            <h5 className="card-title">Beta Weibayes</h5>
            <p>
              Mínimo triangular
              <input href="#" className="btn border-info" />
            </p>
          </div>
          <div className="card-body">
            <p>
              Mode triangular
              <input href="#" className="btn border-info" />
            </p>
          </div>
          <div className="card-body">
            <p>
              <h6>Máximo</h6>
              <input href="#" className="btn border-info" />
            </p>
          </div>
        </div>
      </div>
      <div className="cDistribuicao">
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
      <div className="cDistribuicao">
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
    </div>
  );
}
