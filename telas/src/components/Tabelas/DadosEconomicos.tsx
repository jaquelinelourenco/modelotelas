import * as React from 'react';
import './style.css';

export default function DadosEconomicos() {
  return (
    <div className="dados">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colspan="3">Dados econômicos de manutenção</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Custo de preventiva</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Custo de corretiva</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Custo de inspeção</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
