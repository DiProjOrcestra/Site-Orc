import React from 'react';
import HeroQuemSomos from './components/HeroQuemSomos';
import Missao from './components/Missao';
import Valores from './components/Valores';
import './css/QuemSomos.css'; 

const QuemSomos = () => {
  return (
    <main className="pagina-quem-somos">
      <HeroQuemSomos />
      <Missao />
      <Valores />
    </main>
  );
};

export default QuemSomos;