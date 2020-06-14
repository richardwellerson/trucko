import React from 'react';
import truckoLogo from '../img/logo.svg';
import Tag from '../img/Etiqueta.svg';
import Menu from '../img/Menu.svg';
import '../styles/Header.css';

const Header = () => (
  <div className="header_all">
    <img
      src={truckoLogo}
      alt="Trucko Logo"
      className="header_logo"
    />
    <div className="header_right">
      <p className="header_awards">Prêmios</p>
      <img
        className="header_tag_menu"
        src={Tag} alt="tag header"
      />
      <img
        className="header_tag_menu"
        src={Menu} alt="menu header"
      />
    </div>
  </div>
);

export default Header;
