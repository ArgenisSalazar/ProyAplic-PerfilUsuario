import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/services');
    };

    return (
        <header className="header text-center">
            <img src="/images/imghome.jpg" alt="Background" className="header-bg" />
            <Container>
                <div className="header-content">
                    <h1>Catálogo de proveedores locales</h1>
                    <p>Promocione y administre sus servicios fácilmente</p>
                    <Button variant="dark" onClick={handleButtonClick}>Ver Servicios</Button>
                </div>
            </Container>
        </header>
    );
};

export default Header;