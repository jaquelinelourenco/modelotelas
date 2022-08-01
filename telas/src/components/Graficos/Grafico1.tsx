import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import '../../style.css';

export default function Grafico1() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate('/');
  };

  const goToTabPage = () => {
    navigate('/tab');
  };

  return (
    <div>
      <div className="globalStyled">
        <img />
        <h2>Entrada/Span</h2>
        <svg
          onClick={goToHomePage}
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="currentColor"
          className="bi bi-house-door"
          viewBox="0 0 16 16"
        >
          <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
        </svg>
      </div>
      <div className="botaoES">
        <button onClick={goToTabPage} type="button" className="btn btn-light">
          Entrada/Span
        </button>
        <button type="button" className="btn btn-success">
          Saída
        </button>
      </div>
      <h1>Grafico 1!</h1>
      <div className="grafico1">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Parâmetro 1</th>
              <th scope="col">Parâmetro 2</th>
              <th scope="col">Parâmetro 3</th>
              <th scope="col">Parâmetro 4</th>
              <th scope="col">Parâmetro 5</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
              <td>
                <input type="text" className="form-control" placeholder="0" />
              </td>
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
      <img src="" />
    </div>
  );
}
