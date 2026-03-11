import React from 'react';
import { SERVICOS } from '../data/services';
import '../css/services.css';

const Servicos = () => {
  return (
    <section className="secao-servicos">
      <div className="header-container">
        <h2 className="titulo-secao">A nossa gamificação pode te ajudar de várias formas</h2>
        <p className="subtitulo-secao">Nossos serviços</p>
        <hr className="divisor-verde" />
      </div>

      <div className="grid-cards">
        {/* Desenvolvimento Gamificado */}
        <div className="card-item">
          <img src={SERVICOS["desenvolvimento-gamificado"].imageHero} alt="Desenvolvimento" />
          <h3>Desenvolvimento Gamificado</h3>
          <p>Eleve a originalidade do seu negócio com um software gamificado</p>
        </div>

        {/* Concepção de Software */}
        <div className="card-item">
          <img src={SERVICOS["concepção-de-software"].imageHero} alt="Concepção" />
          <h3>Concepção de Software</h3>
          <p>Inove a sua ideia com a gamificação, e fique a um passo do desenvolvimento</p>
        </div>

        {/* Design de Gamificação */}
        <div className="card-item">
          <img src={SERVICOS["design-de-gamificacao"].imageHero} alt="Design" />
          <h3>Design de Gamificação</h3>
          <p>Melhore o engajamento da sua equipe para uma melhor performance empresarial</p>
        </div>

        {/* Consultoria de Gamificação */}
        <div className="card-item">
          <img src={SERVICOS["consultoria-gamificada"].imageHero} alt="Consultoria" />
          <h3>Consultoria de Gamificação</h3>
          <p>Impulsione a eficiência da sua gamificação com uma equipe especializada</p>
        </div>

        {/* Treinamento */}
        <div className="card-item">
          <img src={SERVICOS["treinamento-gamificado"].imageHero} alt="Treinamento" />
          <h3>Treinamento</h3>
          <p>Capacite seus colaboradores com uma empresa experiente no ramo</p>
        </div>
      </div>
    </section>
  );
};

export default Servicos;