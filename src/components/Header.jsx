import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importação necessária
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false); // Fecha o menu ao clicar num link

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="Orcestra Gamificação" className="logo" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <img 
          src={menuOpen ? "/assets/close.png" : "/assets/hamburguer.png"} 
          alt={menuOpen ? "Fechar menu" : "Abrir menu"}
          className="hamburger-icon"
        />
      </button>

      <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li className='dropdown'>
            <span>Serviços</span>
            <ul className='dropdown-menu'>
              <li><Link to="/servicos/consultoria-gamificada" onClick={closeMenu}>Consultoria Gamificada</Link></li>
              <li><Link to="/servicos/desenvolvimento-gamificado" onClick={closeMenu}>Desenvolvimento Gamificado</Link></li>
              <li><Link to="/servicos/concepção-de-software" onClick={closeMenu}>Concepção de Software</Link></li>
              <li><Link to="/servicos/treinamento-gamificado" onClick={closeMenu}>Treinamento Gamificado</Link></li>
              <li><Link to="/servicos/design-de-gamificacao" onClick={closeMenu}>Design de Gamificação</Link></li>
            </ul>
          </li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portfólio</Link></li>
          <li><Link to="/contato" onClick={closeMenu}>Contato</Link></li>
          <li><Link to="/quem-somos" onClick={closeMenu}>Quem Somos</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;