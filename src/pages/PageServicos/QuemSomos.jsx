import React from 'react';
import '../../css/QuemSomos.css';
import imgEsquerda from '../../assets/Frame-78.jpg';
import imgDireita from '../../assets/Frame-84.jpg';

const SobreInstitucional = ({ textButao }) => {
  return (
    <section className="institucional-section">

      <div className="decor-images left">
        <img src={imgEsquerda} alt="Imagem decorativa esquerda da Orc'estra" className="img-1" />
      </div>

      <div className="institucional-container">
        <div className="institucional-block">
          <h2>Quem somos?</h2>
          <p>A Orc’estra é a empresa júnior de Engenharia de Software da Universidade de Brasília.</p>
          <p>Desenvolvemos softwares e experiências digitais personalizadas para resolver problemas reais de pessoas e organizações.</p>
          <p>Unimos Engenharia de Software, estratégia, design e gamificação para criar produtos funcionais, confiáveis e pensados para quem realmente irá utilizá-los.</p>
          <p>A gamificação faz parte da nossa história e é o nosso maior diferencial. Mas nosso trabalho começa antes dela: começar a entender o problema.</p>
        </div>

        <div className="institucional-block">
          <h2>Por que gamificação?</h2>
          <p>Gamificação não é criar jogos.</p>
          <p>É utilizar princípios de design de jogos em outros contextos para tornar objetivos, progresso, feedback e jornadas mais compreensíveis e envolventes.</p>
          <p>Na Orc’estra, ela começa com perguntas: qual comportamento queremos apoiar? O que motiva as pessoas? O que dificulta sua participação? Como tornar o progresso visível? Prezamos, sempre, pelo objetivo final dos nossos clientes e as estratégias que vão levar para esses objetivos.</p>
          <p>Por isso, não aplicamos a gamificação como uma fórmula pronta. Utilizamos essa abordagem quando ela faz sentido para o problema e para as pessoas envolvidas.</p>
        </div>

        <button onClick={() => document.getElementById('forms').scrollIntoView({ behavior: 'smooth' })} className="institucional-button">
            {textButao || 'Fale com a Orc’estra'}
        </button>
      </div>

      
      <div className="decor-images right">
        <img src={imgDireita} alt="Imagem decorativa direita da Orc'estra" className="img-2" />
      </div>
    </section>
  );
};

export default SobreInstitucional;