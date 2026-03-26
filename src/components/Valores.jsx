import React from 'react';
import '../css/Valores.css'; 
import familia from '../assets/Frame-233-3.svg';
import sintonia from '../assets/Frame-234.svg';
import crescimento from '../assets/Frame-236.svg';
import sangueOrc from '../assets/Frame-237.svg';

const Valores = () => {
  return (
    <section className="valores-section">
      <div className="container-valores">
        
        <h2 className="titulo-valores">Nossos valores</h2>
        <hr className="linha-verde" />

        <div className="valores-grid">
          <div className="valor-card">

            <div className="valor-imagem">
              <img 
                src={familia} 
                alt="Ilustração Família" /> 
            </div>
            <div className="valor-texto">
              <h3>Família</h3>
              <p>Nós somos responsáveis uns pelos outros. Nosso dever como Orcs é de cuidar uns dos outros, prezar pela empatia, motivar a equidade e celebrar a diversidade. Somos feitos pela junção das mais diferentes pessoas, origens, objetivos e sonhos.</p>
            </div>
          </div>

          <div className="valor-card">
            <div className="valor-imagem">
              <img 
                src={sintonia} 
                alt="Ilustração Sintonia" />
            </div>
            <div className="valor-texto">
              <h3>Sintonia</h3>
              <p>Mais do que juntos, estamos no mesmo ritmo. Nos conhecemos tão bem que nossas vontades são quase as mesmas. Estarmos alinhados é nossa meta, para que possamos sempre crescer em tamanho e qualidade constantes.</p>
            </div>
          </div>

          <div className="valor-card">
            <div className="valor-imagem">
              <img 
                src={crescimento} 
                alt="Ilustração Crescimento" />
            </div>
            <div className="valor-texto">
              <h3>Crescimento</h3>
              <p>Estamos sempre atrás de novos conhecimentos, não temos medo de tentar e errar, pois só assim podemos crescer e só assim podemos nos conhecer. Com maiores conhecimentos, aparecem maiores desafios. Mas isso não nos impede.</p>
            </div>
          </div>

          <div className="valor-card">
            <div className="valor-imagem">
              <img 
                src={sangueOrc} 
                alt="Ilustração Sangue Orc" />
            </div>
            <div className="valor-texto">
              <h3>Sangue Orc</h3>
              <p>Nossa identidade está sempre estampada em tudo o que fazemos. Temos orgulho de ser quem somos, e orgulho de sermos os responsáveis pela proteção e desenvolvimento de nossa realidade. Somos a Orc'estra Gamificação e nosso sangue é de Orcs.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Valores;