import React from 'react';
import './SobreInstitucional.css';

const SobreInstitucional = () => {
  return (
    <section className="institucional-section">

      <div className="decor-images left">
        <img src="" alt="" className="img-1" />
      </div>

      <div className="institucional-container">
        <div className="institucional-block">
          <h2>Quem somos nós?</h2>
          <p>A Orc'estra Game Studio é a Empresa Júnior do curso de Engenharia de Software da Universidade de Brasília, campus Gama (FGA)...</p>
        </div>

        <div className="institucional-block">
          <h2>Por que gamificação?</h2>
          <p>A gamificação é a aplicação de elementos e conceitos de jogos no mundo real...</p>
        </div>

        <button onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>
            Entrar em Contato
        </button>
      </div>

      
      <div className="decor-images right">
        <img src="" alt="" className="img-2" />
      </div>
    </section>
  );
};

export default SobreInstitucional;