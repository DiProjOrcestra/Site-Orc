import React from 'react';
import '../css/Historia.css';

const Historia = () => {
  return (
    <section className="historia-section">
      <div className="container-historia">

        <h2 className="titulo-secao">Entenda nossa História</h2>
        <hr className="linha-verde" />

        <div className="timeline-container">
          <div className="timeline-linha"></div>

          <div className="timeline-item direita">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2015</div>

            <div className="timeline-card">
              <h3 className="verde">Criação InSoft</h3>
              <img
                src="../src/assets/INSOFT.webp"
                alt="Criação Insoft"
                className="card-imagem" />
              <ul>
                <li>A empresa é criada com o nome de Insoft por Bruno Pinheiro e Ricardo Canela, iniciada com 9 diretorias e 11 membros;</li>
                <li>Foi realizado o primeiro processo seletivo com entrada de 25 novos membros.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item esquerda">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2016</div>

            <div className="timeline-card">
              <h3 className="verde">Implementando Gamificação</h3>
              <img 
                src="../src/assets/implementandoGamificacao.webp" alt="Implementando Gamificação" className="card-imagem" />
              <ul>
                <li>Bruno Pinheiro e Paulo Markes finalizam uma matéria sobre gamificação;</li>
                <li>Ambos fazem um treinamento sobre gamificação, se identificam com a ideia e percebem que seria uma área de interesse para trabalhar futuramente.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item direita">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2017</div>

            <div className="timeline-card">
              <h3 className="verde">Virada de Chave</h3>
              <img 
                src="../src/assets/fotoViradaDeChave.webp" alt="Virada de Chave" className="card-imagem" />
              <ul>
                <li>Começo do uso gamificação como ferramenta inovadora e transformadora;</li>
                <li>Trocado o nome de Insoft para Orc'estra Gamificação;</li>
                <li>Foi federada à Concentro como a primeira Empresa Júnior do Brasil de Gamificação.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item esquerda">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2018</div>

            <div className="timeline-card">
              <h3 className="verde">Reconhecimento</h3>
              <img 
                src="../src/assets/reconhecimento.webp" alt="Reconhecimento" className="card-imagem" />
              <ul>
                <li>Empresa se tornou uma referência como uma das EJs que mais cresceu após a sua federação;</li>
                <li>Ganhou o Prêmio Concentro como Destaque da Comunidade.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item direita">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2019-2020</div>

            <div className="timeline-card">
              <h3 className="verde">Impacto</h3>
              <img 
                src="../src/assets/impacto.webp" alt="Impacto" className="card-imagem" />
              <ul>
                <li>Atingimos Alto Crescimento;</li>
                <li>EJ conectada;</li>
                <li>Conquistamos o título de EJ Impacto;</li>
                <li>Conquistamos o título de EJ Bi Impacto.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item esquerda">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2021</div>

            <div className="timeline-card">
              <h3 className="verde">Tri-Impactante</h3>
              <img 
                src="../src/assets/impactoTri.webp" alt="Tri-Impactante" className="card-imagem" />
              <ul>
                <li>A Empresa conseguiu o TRI Impacto!</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item direita">
            <div className="timeline-icone">
              <svg viewBox="0 0 512 512" width="22" height="22" fill="#ffffff">
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
              </svg>
            </div>
            <div className="timeline-ano">2022</div>

            <div className="timeline-card">
              <h3 className="verde">Aumentando o Alcance</h3>
              <img 
                src="../src/assets/concepcao.webp" 
                alt="Aumentando o Alcance" className="card-imagem" />
              <ul>
                <li>O Serviço de Concepção foi criado.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Historia;