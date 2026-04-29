import React from 'react';
import '../css/Diretoria.css';
import presInt from '../assets/Fotos-DirEx-Site-2026-1.webp';
import presOrg from '../assets/Fotos-DirEx-Site-2026-3.webp';
import dirCom from '../assets/Fotos-DirEx-Site-2026.webp';
import dirNeg from '../assets/Fotos-DirEx-Site-2026-2.webp';
import dirProj from '../assets/Fotos-DirEx-Site-2026-4.webp';
import dirOp from '../assets/Fotos-DirEx-Site-2026-5.webp';

const diretores = [
  {
    id: 1,
    cargo: "Presidente Institucional",
    nome: "Guilherme Lorenzi Ventura",
    foto: presInt,
    linkedin: "https://www.linkedin.com/in/guilherme-lorenzi-ventura-005b27342/" 
  },
  {
    id: 2,
    cargo: "Presidente Organizacional",
    nome: "Vinícius Araújo Oliveira",
    foto: presOrg,
    linkedin: "https://www.linkedin.com/in/vin%C3%ADcius-ara%C3%BAjo-638a54360"
  },
  {
    id: 3,
    cargo: "Diretor de Comunicação e Marketing",
    nome: "Bryan Martinez Gutierrez Leite",
    foto: dirCom,
    linkedin: "https://www.linkedin.com/in/bryan-martinez-gutierrez/"
  },
  {
    id: 4,
    cargo: "Diretor de Negócios",
    nome: "Arthur Martins Santos da Silva",
    foto: dirNeg,
    linkedin: "https://www.linkedin.com/in/arthur-martins-71a608230/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app     "
  },
  {
    id: 5,
    cargo: "Diretor de Projetos",
    nome: "Alan Semil Dos Santos Vieira", 
    foto: dirProj,
    linkedin: "https://www.linkedin.com/in/alan-semil-dos-santos-vieira-895195271/"
  },
  
];

export function Diretoria() {
  return (
    <section className="diretoria-section">
      <div className="container-diretoria">
        
        <div className="titulo-diretoria-container">
          <h2>Nossa Diretoria Executiva</h2>
          <div className="linha-verde-diretoria"></div>
        </div>

        <div className="diretoria-grid">
          {diretores.map((diretor) => (
            <div className="diretoria-item" key={diretor.id}>
              <a 
                href={diretor.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="link-diretoria"
              >
                <img src={diretor.foto} alt={`Foto de ${diretor.nome}`} className="foto-diretoria" />
                <h3 className="cargo-diretoria">{diretor.cargo}</h3>
                <p className="nome-diretoria">{diretor.nome}</p>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}