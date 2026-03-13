import React from 'react';
import HeroQuemSomos from './components/HeroQuemSomos';
import Missao from './components/Missao';
import Valores from './components/Valores';
import { Diretoria } from './components/Diretoria';
import Historia from './components/Historia';
import './css/QuemSomos.css'; 

const QuemSomos = () => {
  return (
    <main className="pagina-quem-somos">
      <HeroQuemSomos />
      <Missao />
      <Valores />
      <Diretoria />
      <Historia />
    </main>
  );
};

export default QuemSomos;