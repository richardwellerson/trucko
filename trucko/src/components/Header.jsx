import React from 'react';
import truckoLogo from '../img/logo.png';
import '../styles/Header.css';

const Header = () => (
  <div className="header_all">
    <img
      src={truckoLogo}
      alt="Trucko Logo"
      className="header_logo"
    />
  </div>
);

export default Header;
