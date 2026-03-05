import React, { useState } from 'react';
import './Header.css';
import logo from '../../public/assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Orcestra Gamificação" className="logo" />
        </a>
      </div>

      {/* Botão Hambúrguer */}
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        
      </button>

      {/* Menu de navegação */}
      <nav className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="/">Início</a></li>
          <li className='dropdown'>
            <a href="/servicos">Serviços</a>
            <ul className='dropdown-menu'>
              <li><a href="/servicos/consultoria-gamificada">Consultoria Gamificada</a></li>
              <li><a href="/servicos/desenvolvimento-gamificado">Desenvolvimento Gamificado</a></li>
              <li><a href="/concepção-de-software">Concepção de Software</a></li>
              <li><a href="/servicos/treinamento-gamificado">Treinamento Gamificado</a></li>
              <li><a href="/design-de-gamificacao">Design de Gamificação</a></li>
            </ul>
          </li>
          <li><a href="/portfolio">Portfólio</a></li>
          <li><a href="/contato">Contato</a></li>
          <li><a href="/quem-somos">Quem Somos</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;