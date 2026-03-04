import React from "react";
import "./Hero.css";

const Hero = ({ name, texto1, texto2}) => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-name">{name}</h1>
        <p className="hero-subtitle">{texto1}</p>
        <p className="hero-description">{texto2}</p>
        <button onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>
            Entre em Contato
        </button>
      </div>
      
      <div className="hero-image-container">
        <img src="" alt={`Ilustração de ${name}`} />
      </div>
    </section>
  );
};

export default Hero;