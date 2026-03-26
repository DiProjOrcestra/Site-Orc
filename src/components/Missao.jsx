import React from 'react';
import '../css/Missao.css'; 

const Missao = () => {
  return (
    <section className="missao-section">
      <div className="container-missao">
        
        <h2 className="titulo-secao">Nossa Missão</h2>
        <hr className="linha-verde" />

        <div className="missao-conteudo">
          
          <div className="missao-card">
            <div className="missao-imagem">
              <img 
                src="../src/assets/Frame-136.svg" alt="Alvo Gamificação" />
            </div>
            <div className="missao-texto-card">
              <h3>Missão</h3>
              <p>Mudar o comportamento das pessoas, através da gamificação, para motivar e engajar nossos parceiros.</p>
            </div>
          </div>

          <div className="missao-detalhes">
            <div className="detalhe-item">
              <h4>Porquê?</h4>
              <p>Em tudo o que fazemos, acreditamos em ressignificar a vida das pessoas. Acreditamos que a vida pode ser produtiva e prazerosa.</p>
            </div>
            <div className="detalhe-item">
              <h4>Como?</h4>
              <p>A maneira como redefinimos o sentido da vida é criando experiências, empoderando pessoas e mudando a forma de enxergar problemas.</p>
            </div>
            <div className="detalhe-item">
              <h4>O quê?</h4>
              <p>E o resultado disso são soluções gamificadas únicas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Missao;