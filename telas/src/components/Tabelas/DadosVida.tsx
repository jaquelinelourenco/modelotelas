import * as React from 'react';
import './style.css';

export default function DadosVida() {
  return (
    <div className="dados">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Dados de Vida</th>
          </tr>
        </thead>
      </table>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th colspan="2">Número de Tempos</th>
            <th scope="col">Tempo de vida</th>
            <th scope="col">F ou S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
            <td>
              <input type="text" className="form-control" placeholder="0" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
