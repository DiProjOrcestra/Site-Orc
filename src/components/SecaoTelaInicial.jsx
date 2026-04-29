import React from 'react';
import '../css/SecaoTelaInicial.css';
import sabJuniorWebp from '../assets/Orcestra_SabJun.webp';

const SecaoTelaInicial = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="secao-container">
      <div className="secao-content">
        <h1 className="secao-name">
          A maior Empresa Júnior de gamificação do Brasil!
        </h1>

        <p className="secao-subtitle">
          Ressignificando a vida das pessoas através da gamificação
        </p>

        <div className="secao-botoes">
          <button
            type="button"
            className="secao-btn"
            onClick={() => scrollToSection('services')}
          >
            O que fazemos
          </button>

          <button
            type="button"
            className="secao-btn"
            onClick={() => scrollToSection('forms')}
          >
            Fale conosco
          </button>
        </div>
      </div>

      <div className="secao-imagem-container">
        <img
          src={sabJuniorWebp}
          alt="Equipe da Orc'estra"
          className="secao-img"
          width="2738"
          height="1825"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default SecaoTelaInicial;