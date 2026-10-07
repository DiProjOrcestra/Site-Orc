import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICOS } from '../data/services';
import '../css/services.css';

const Servicos = () => {
  return (
    <section className="secao-servicos" id='services'>
      <div className="header-container">
        <h2 className="titulo-secao">Transformamos desafios em soluções digitais.</h2>
        <hr className="divisor-verde" />
        <p className="subtitulo-secao">O que podemos construir com você</p>
      </div>

      <div className="grid-servicos-centralizado">
        <Link to="/servicos/desenvolvimento-gamificado" className="card-item">
          <img src={SERVICOS["desenvolvimento-gamificado"].imageHero} alt="Desenvolvimento" />
          <h3 className="texto-servico-destaque">Desenvolvimento Gamificado</h3>
          <p>Desenvolvemos softwares personalizados que unem Engenharia de Software e experiência para resolver problemas e envolver usuários.</p>
        </Link>

        <Link to="/servicos/concepção-de-software" className="card-item">
          <img src={SERVICOS["concepção-de-software"].imageHero} alt="Concepção" />
          <h3 className="texto-servico-destaque">Concepção de Software</h3>
          <p>Transformamos ideias em produtos digitais estruturados, validados e preparados para o desenvolvimento.</p>
        </Link>

        <Link to="/servicos/design-de-gamificacao" className="card-item">
          <img src={SERVICOS["design-de-gamificacao"].imageHero} alt="Design" />
          <h3 className="texto-servico-destaque">Design de Gamificação</h3>
          <p>Projetamos experiências gamificadas personalizadas para orientar comportamentos, tornar jornadas mais claras e aumentar o envolvimento das pessoas.</p>
        </Link>


        <Link to="/servicos/consultoria-gamificada" className="card-item">
          <img src={SERVICOS["consultoria-gamificada"].imageHero} alt="Consultoria" />
          <h3 className="texto-servico-destaque">Consultoria Gamificada</h3>
          <p>Analisamos experiências gamificadas existentes e propomos melhorias alinhadas aos objetivos, ao contexto e ao comportamento dos usuários.</p>
        </Link>

    
        <Link to="/servicos/treinamento-gamificado" className="card-item">
          <img src={SERVICOS["treinamento-gamificado"].imageHero} alt="Treinamento" />
          <h3 className="texto-servico-destaque">Treinamento Gamificado</h3>
          <p>Criamos experiências de aprendizagem práticas e envolventes para capacitar equipes em tecnologia, engenharia e gamificação.</p>
        </Link>
      </div>
    </section>
  );
};

export default Servicos;