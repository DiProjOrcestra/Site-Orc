import React from 'react';
import '../css/HeroQuemSomos.css';
import equipe from '../assets/Frame-211.svg';

const HeroQuemSomos = () => {
  return (
    <section className="hero-section"> 
      <div className="container-conteudo hero-flex">
         
        <div className="hero-texto">
          <h1>Projeta Aqui, Motiva Lá!</h1>
          <p>Uma empresa empenhada a transformar vidas das pessoas através da gamificação</p>
        </div>

        <div className="hero-imagem">
          <img 
            src={equipe} 
            alt="Ilustração da equipe Orc'estra se abraçando" 
          />
        </div>
      </div>
    </section>
  );
};  

export default HeroQuemSomos;