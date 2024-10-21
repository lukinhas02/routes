import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Faculdade XYZ</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/courses">Cursos</Link>
        <Link to="/about">Sobre</Link>
      </nav>
    </header>
  );
}

export default Header;
