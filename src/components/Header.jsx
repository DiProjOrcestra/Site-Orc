import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import logo from '../assets/logo.png';
import hamburguer from '../assets/hamburguer.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Orcestra Gamificação" className="logo" />
        </Link>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        <img 
          src={hamburguer} 
          alt="Abrir menu"
          className="hamburger-icon"
        />
      </button>

      {menuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}

      <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Início</Link></li>
          <li className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
            <span onClick={toggleDropdown}>Serviços</span>
            <ul className="dropdown-menu">
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