import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/home';
import FormPage from '../pages/FormPage/Form';
import TabelaPage from '../pages/TabelaPage/Tabela';
import Grafico1 from '../components/Graficos/Grafico1';
import Grafico2 from '../components/Graficos/Grafico2';
import Grafico3 from '../components/Graficos/Grafico3';
import CardPage from '../pages/CardPage/Card';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/for" element={<FormPage />} />
        </Routes>
        <Routes>
          <Route path="/tab" element={<TabelaPage />} />
        </Routes>
        <Routes>
          <Route path="/card" element={<CardPage />} />
        </Routes>
        <Routes>
          <Route path="/gra" element={<Grafico1 />} />
        </Routes>
        <Routes>
          <Route path="/gr" element={<Grafico2 />} />
        </Routes>
        <Routes>
          <Route path="/gf" element={<Grafico3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
