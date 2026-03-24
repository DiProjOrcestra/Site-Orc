import "../css/Contato.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="team-section">
        <div className="team-card">
          <a
            href="https://www.linkedin.com/in/guilherme-lorenzi-ventura-005b27342/"
            target="_blank"
            rel="noopener noreferrer">
            <img src="./src/assets/presidenteInstitucional.jpeg" alt="Guilherme Lorenzi Ventura"/>
          </a>

          <div>
            <div className="tudo">
              <div className="nome-cargo">
              <h2>Guilherme Lorenzi</h2>
              <p className="role">Presidente Institucional</p>
            </div>
            
            <div className="numero-email">
              <p>(17) 9 8207-0899</p>
              <p>guilherme.ventura@orcestra.com.br</p>
            </div>
            
          </div>
            </div>
            
        </div>

        <div className="team-card">
          <a
            href="https://www.linkedin.com/in/vinícius-araújo-638a54360/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/presidenteOrg.jpg"
              alt="Vinicius Araújo de Oliveira"
            />
          </a>

          <div>
            <div className="tudo">
               <div className="nome-cargo">
              <h2>Vinícius Araújo</h2>
              <p className="role">Presidente Organizacional</p>
            </div>
            

            <div className="numero-email">
              <p>(61) 9 9973-2566</p>
              <p>vini.araujo@orcestra.com.br</p>
            </div>
          </div>
        </div>
            </div>
           

      </div>

      <div className="location-medias">
        <div className="location-section">
          <h2>Localização</h2>
            <p>Container 06, Faculdade do Gama UnB, Brasília - DF</p>
           
                  <iframe
                    title="Orc'estra Gamificação"
                    src="https://maps.google.com/maps?q=Orc%27estra%20Gamifica%C3%A7%C3%A3o&t=m&z=13&output=embed&iwloc=near"
                    loading="lazy"
                  ></iframe>
            
              
      </div>

      <div className="social-section">
        <h2>Acesse nossas mídias sociais!</h2>

        <div className="social-icons">

          <a href="https://pt-br.facebook.com/Orcestra.Ej/" target="_blank" rel="noreferrer">
            <img src="./src/assets/icons8-facebook (1).svg" alt="facebook-icon"/>
          </a>

          <a href="https://open.spotify.com/show/7z5VG5HPnaMFsDh2fLu5L6" target="_blank" rel="noreferrer">
              <img src="./src/assets/icons8-spotify.svg" alt="spotify-icon" />
          </a>

          <a href="https://www.instagram.com/orcgamificacao/" target="_blank" rel="noreferrer">
            <img src="./src/assets/icons8-instagram-96.png" alt="instagram-icon"/>
          </a>

          <a href="https://www.linkedin.com/company/orcestragamificacao/" target="_blank" rel="noreferrer">
            <img src="./src/assets/icons8-linkedin (2).svg" alt="linkedin-icon"/>
          </a>

        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;