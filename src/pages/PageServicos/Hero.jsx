import React from "react";
import "../../css/Hero.css";

const Hero = ({ name, texto1, texto2, image, textButao }) => {
  return (
    <section className="hero-container">
      <div className="hero-content">
    
        <h1 className="hero-name">{name}</h1>
        
        <p className="hero-subtitle">{texto1}</p>
        {texto2.split('\n\n').map((paragrafo, i) => (
          <p key={i} className="hero-description">{paragrafo}</p>
        ))}
        
        <button 
          className="hero-btn-contato"
          onClick={() => document.getElementById('forms').scrollIntoView({ behavior: 'smooth'})}
        >
          {textButao || 'Fale com a Orc’estra'}
        </button>
      </div>
      
      <div className="hero-image-container">
        <img src={image} alt={`Ilustração de ${name}`} className="hero-main-image" />
      </div>
    </section>
  );
};

export default Hero;