import React from 'react';
import '../../css/ComoFunciona.css';

const ComoFunciona = ({ titulo, funcionamento, passos }) => {
  return (
    <section className="detalhamento-container">
      <div className="detalhamento-header">
        <h2 className="detalhamento-titulo">{titulo}</h2>
        <p className="detalhamento-intro">{funcionamento}</p>
      </div>

      <div className="passos-grid">
        {passos.map((passo, index) => (
          <div key={index} className="passo-card">
            <span className="passo-numero">{passo.n}</span>
            <div className="passo-texto">
              <h3>{passo.title}</h3>
              <p>{passo.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoFunciona;