import React from "react";
import "../../css/Hero.css";

const Hero = ({ name, texto1, texto2, image }) => {
  return (
    <section className="hero-container">
      <div className="hero-content">
    
        <h1 className="hero-name">{name}</h1>
        
        <p className="hero-subtitle">{texto1}</p>
        <p className="hero-description">{texto2}</p>
        
        <button 
          className="hero-btn-contato"
          onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}
        >
          Entre em Contato
        </button>
      </div>
      
      <div className="hero-image-container">
        <img src={image} alt={`Ilustração de ${name}`} className="hero-main-image" />
      </div>
    </section>
  );
};

export default Hero;