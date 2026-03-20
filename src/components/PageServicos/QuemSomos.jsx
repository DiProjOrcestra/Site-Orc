import React from 'react';
import '../../css/QuemSomos.css';

const SobreInstitucional = ({ textButao }) => {
  return (
    <section className="institucional-section">

      <div className="decor-images left">
        <img src="/img/Frame-78.jpg" alt="Imagem decorativa esquerda da Orc'estra" className="img-1" />
      </div>

      <div className="institucional-container">
        <div className="institucional-block">
          <h2>Quem somos nós?</h2>
          <p>A Orc’estra Gamificação (ou Orc para os mais íntimos) é a Empresa Júnior de Engenharia de Software da Universidade de Brasília e a primeira a trabalhar com foco em Gamificação no Brasil, sempre procurando transformar o comportamento das pessoas por meio da Gamificação.</p>
          <p>Trazemos mais motivação e engajamento para nossos parceiros com soluções gamificadas únicas, com o auxílio de metodologias inovadoras consolidadas no mercado.</p>
        </div>

        <div className="institucional-block">
          <h2>Por que gamificação?</h2>
          <p>A Gamificação é a aplicação de elementos e conceitos de jogos no mundo real com o intuito de mudar o comportamento das pessoas. Para nós, a Gamificação é muito mais que uma técnica, é uma forma de motivar e engajar pessoas ressignificando suas vidas e transformando obrigações em desafios a serem superados para que o trabalho seja visto como algo prazeroso e divertido de se fazer.</p>
        </div>

        <button onClick={() => document.getElementById('forms').scrollIntoView({ behavior: 'smooth' })} className="institucional-button">
            {textButao || 'Fale Conosco'}
        </button>
      </div>

      
      <div className="decor-images right">
        <img src="/img/Frame-84.jpg" alt="Imagem decorativa direita da Orc'estra" className="img-2" />
      </div>
    </section>
  );
};

export default SobreInstitucional;