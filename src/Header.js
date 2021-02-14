import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper purple lighten-3">
                <a href="/" className="brand-logo">Casa do código</a>
                <ul className="right">
                    <li><a href="/autores">Autores</a></li>
                    <li><a href="/livros">Livros</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;