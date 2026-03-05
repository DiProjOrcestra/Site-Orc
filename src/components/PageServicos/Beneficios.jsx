import React from 'react';
import '../../css/Beneficios.css';

const Beneficios = ({ titulo, intro, lista }) => {
  return (
    <section className="beneficios-section">
      <div className="beneficios-container">
        <div className="beneficios-left">
            <h2 className="beneficios-titulo">{titulo}</h2>
            <p className="beneficios-intro">{intro}</p>
            <button onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>
                Entre em Contato
            </button>
        </div>

        <div className="beneficios-right">
          {lista.map((item, index) => (
            <div key={index} className="beneficio-item">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;