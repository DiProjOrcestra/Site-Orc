import './Header.css';
// Importe a logo (escolha uma das opções)
import logo from '../assets/logo.png'; // ou logo.png

const Header = () => {
  return (
    <header className="header">
        <div className="logo-container">
            <a href="/">
              <img src={logo} alt="Orcestra Gamificação" className="logo" />
            </a>
        </div>
      <nav className="nav-menu">
       
        <ul>
          <li><a href="/">Início</a></li>
          <li><a href="/servicos">Serviços</a></li>
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