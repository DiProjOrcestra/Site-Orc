import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICOS } from '../data/services';
import '../css/services.css';

const Servicos = () => {
  return (
    <section className="secao-servicos" id='services'>
      <div className="header-container">
        <h2 className="titulo-secao">A nossa gamificação pode te ajudar de várias formas</h2>
        <hr className="divisor-verde" />
        <p className="subtitulo-secao">Nossos serviços</p>
      </div>

      <div className="grid-servicos-centralizado">
        <Link to="/servicos/desenvolvimento-gamificado" className="card-item">
          <img src={SERVICOS["desenvolvimento-gamificado"].imageHero} alt="Desenvolvimento" />
          <h3 className="texto-servico-destaque">Desenvolvimento Gamificado</h3>
          <p>Eleve a originalidade do seu negócio com um software gamificado</p>
        </Link>

        <Link to="/servicos/concepção-de-software" className="card-item">
          <img src={SERVICOS["concepção-de-software"].imageHero} alt="Concepção" />
          <h3 className="texto-servico-destaque">Concepção de Software</h3>
          <p>Inove a sua ideia com a gamificação, e fique a um passo do desenvolvimento</p>
        </Link>

        <Link to="/servicos/design-de-gamificacao" className="card-item">
          <img src={SERVICOS["design-de-gamificacao"].imageHero} alt="Design" />
          <h3 className="texto-servico-destaque">Design de Gamificação</h3>
          <p>Melhore o engajamento da sua equipe para uma melhor performance empresarial</p>
        </Link>


        <Link to="/servicos/consultoria-gamificada" className="card-item">
          <img src={SERVICOS["consultoria-gamificada"].imageHero} alt="Consultoria" />
          <h3 className="texto-servico-destaque">Consultoria Gamificada</h3>
          <p>Impulsione a eficiência da sua gamificação com uma equipe especializada</p>
        </Link>

    
        <Link to="/servicos/treinamento-gamificado" className="card-item">
          <img src={SERVICOS["treinamento-gamificado"].imageHero} alt="Treinamento" />
          <h3 className="texto-servico-destaque">Treinamento Gamificado</h3>
          <p>Capacite seus colaboradores com uma empresa experiente no ramo</p>
        </Link>
      </div>
    </section>
  );
};

export default Servicos;