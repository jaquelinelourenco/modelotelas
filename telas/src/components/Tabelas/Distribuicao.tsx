import * as React from 'react';
import './style.css';

export default function Distribuicao() {
  return (
    <div className="dados">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colspan="3">Distribuição</th>
          </tr>
          <tr>Weibull 2p</tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Beta Weibayes</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Mínimo triangular</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Mode triangular</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">Máximo</th>
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
