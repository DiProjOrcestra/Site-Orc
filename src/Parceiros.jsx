import './Parceiros.css';

function Parceiros() {
  return (
    <section className="parceiros-section">
      <div className="container-title">
        <h1 className="title">Conheça quem nos apoia</h1>
      </div>

      <div className="container-parceiros">
        <div className="line"></div>
        <div className="container-subtitle">
          <h2 className="subtitle">Parceiros</h2>
        </div>

        <div className="parceiros-grid">
          <div className="parceiro-card">
            <img src="/assets/facto-logo.png" alt="Facto" />
          </div>
          <div className="parceiro-card">
            <img src="/assets/360-logo.png" alt="360" />
          </div>
          <div className="parceiro-card">
            <img src="/assets/associacao-bring.png" alt="Associação BRING" />
          </div>
          <div className="parceiro-card">
            <img src="/assets/trinus-logo.png" alt="Trinus" />
          </div>
          <div className="parceiro-card">
            <img src="/assets/brasil-junior-logo.png" alt="Brasil Júnior" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parceiros;