import React from 'react';
import '../../css/Projetos.css';

const Projetos = ({ titulo, lista }) => {
  return (
    <section className="projetos-section">
      <h2 className="projetos-titulo">{titulo}</h2>
      
      <div className="projetos-grid">
        {lista.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  );
};

const ProjetoCard = ({ projeto }) => {
  return (
    <div 
      className="projeto-card"
      style={{ backgroundImage: `url(${projeto.image})` }}
    >
      <div className="projeto-overlay">
        <h3 className="projeto-name">{projeto.name}</h3>
        <p className="projeto-resumo">{projeto.resumo}</p>
      </div>
    </div>
  );
};

export default Projetos;