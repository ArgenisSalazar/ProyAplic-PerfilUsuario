import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';

const About = () => {
    return (
        <div className="app-container">
            <NavBar />
            <div className="content-wrap">
                <Container className="about-content">
                    <Row>
                        <Col md={6} className="about-text">
                            <h2>Centro de proveedores de servicios locales</h2>
                            <h1>Conectando proveedores locales con clientes</h1>
                            <p>Desarrollo de un Catálogo Web para Facilitar a los Proveedores Locales la Promoción y Gestión de Servicios en Lima.</p>
                            <a href="/contact" className="about-link">Get in touch</a>
                        </Col>
                        <Col md={6} className="about-image">
                            <img src="/images/imghome.jpg" alt="Service" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default About;
