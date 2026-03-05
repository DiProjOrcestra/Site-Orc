import React, { useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="projeto-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(${projeto.image})` }}
    >

      <h3 className={`projeto-name ${isHovered ? 'hidden' : ''}`}>
        {projeto.name}
      </h3>

      {isHovered && (
        <div className="projeto-overlay">
          <p className="projeto-resumo">{projeto.resumo}</p>
        </div>
      )}
    </div>
  );
};

export default Projetos;