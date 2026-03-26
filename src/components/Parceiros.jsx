import '../css/Parceiros.css';
import facto from '../assets/facto-logo.png'
import logo360 from '../assets/logo-360.png'
import trinus from '../assets/trinus-logo.png'
import brasilJunior from '../assets/brasil-junior-logo.png'
import bring from '../assets/associacao-bring.png'



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
            <img src={facto} alt="Facto" />
          </div>
          <div className="parceiro-card">
            <img src={logo360} alt="360" />
          </div>
          <div className="parceiro-card">
            <img src={bring} alt="Associação BRING" />
          </div>
          <div className="parceiro-card">
            <img src={trinus} alt="Trinus" />
          </div>
          <div className="parceiro-card">
            <img src={brasilJunior} alt="Brasil Júnior" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Parceiros;