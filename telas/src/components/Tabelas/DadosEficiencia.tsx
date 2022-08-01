import * as React from 'react';
import './style.css';

export default function DadosEficiencia() {
  return (
    <div className="dados">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colspan="3">Dados de eficiência da manutenção</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Duração de preventiva</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Duração de corretiva</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Duração de inspeção</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th colspan="3"></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
