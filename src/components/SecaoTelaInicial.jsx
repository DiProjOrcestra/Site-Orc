import React from 'react';
import '../css/SecaoTelaInicial.css';

const equipeImg = new URL('../assets/orcestra-equipe.jpg', import.meta.url).href;

const SecaoTelaInicial = () => {
  return (
    <section className="secao-container">
      <div className="secao-content">
        <h1 className="secao-name">A maior Empresa Júnior de gamificação do Brasil!</h1>
        <p className="secao-subtitle">Ressignificando a vida das pessoas através da gamificação</p>
        
        <div className="secao-botoes">
          <button 
            className="secao-btn"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            O que fazemos
          </button>
          
          <button 
            className="secao-btn" 
            onClick={() => document.getElementById('forms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Fale conosco
          </button>
        </div>
      </div>
      
      <div className="secao-imagem-container">
        <img 
          src={equipeImg} 
          alt="Equipe da Orc'estra" 
          className="secao-img" 
        />
      </div>
    </section>
  );
};

export default SecaoTelaInicial;