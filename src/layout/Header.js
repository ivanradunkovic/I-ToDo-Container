import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>
{
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            |<Link className="link" style={linkStyle} to="/">Home</Link> || <Link style={linkStyle} to="/about">About</Link>|
        </header>
    )
};

const headerStyle = {
    background: "#808080",
    color: '#FFFFFF',
    textAlign: 'center'
};

const linkStyle = {
    color: '#FFFFFF',
    textDecoration: 'none'
};

export default Header;