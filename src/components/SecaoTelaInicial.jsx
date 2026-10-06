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
          Engenharia de Software para criar experiências digitais que fazem sentido.
        </h1>

        <p className="secao-subtitle">
          Desenvolvemos softwares e produtos digitais personalizados, unindo engenharia, estratégia, design e gamificação para resolver problemas reais.
        </p>

        <div className="secao-botoes">
          <button
            type="button"
            className="secao-btn"
            onClick={() => scrollToSection('services')}
          >
            Conheça nossas soluções
          </button>

          <button
            type="button"
            className="secao-btn"
            onClick={() => scrollToSection('forms')}
          >
            Fale com a gente
          </button>
        </div>
      </div>

      <div className="secao-imagem-container">
        <img
          src={sabJuniorWebp}
          alt="Equipe da Orc'estra"
          className="secao-img"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default SecaoTelaInicial;