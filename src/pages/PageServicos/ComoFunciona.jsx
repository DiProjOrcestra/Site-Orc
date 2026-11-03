import React from 'react';
import '../../css/ComoFunciona.css';

const ComoFunciona = ({ titulo, funcionamento, passos }) => {
  return (
    <section className="detalhamento-container">
      <div className="detalhamento-header">
        <h2 className="detalhamento-titulo">{titulo}</h2>
        {funcionamento.split('\n\n').map((paragrafo, i) => (
          <p key={i} className="detalhamento-intro">{paragrafo}</p>
        ))}
      </div>

      <div className="passos-grid">
        {passos.map((passo, index) => (
          <div key={index} className="passo-card">
            <div className="passo-numero-wrapper">
              <span className="passo-numero">{passo.n}</span>
            </div>
            <div className="passo-texto">
              <h3>{passo.title}</h3>
              {passo.text.split('\n\n').map((paragrafo, i) => (
                <p key={i}>{paragrafo}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComoFunciona;