import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import '../styles/Services.css';

const services = [
    {
        id: 1,
        title: 'Instalación de cableado eléctrico',
        description: 'Instalación de cableado eléctrico profesional para tu hogar o negocio.',
        image: '/images/servicio1.jpg',
    },
    {
        id: 2,
        title: 'Instalación de cableado eléctrico',
        description: 'Instalación de cableado eléctrico profesional para tu hogar o negocio.',
        image: '/images/servicio2.jpg',
    },
    {
        id: 3,
        title: 'Instalación de cableado eléctrico',
        description: 'Instalación de cableado eléctrico profesional para tu hogar o negocio.',
        image: '/images/servicio3.jpg',
    },
];

const Services = () => {
    return (
        <div className="services-page">
            <NavBar />
            <Container className="services-container">
                <h2 className="services-title">Servicios Profesionales Locales</h2>
                <h1 className="services-subtitle">Conectate con expertos para todas tus necesidades.</h1>
                <p className="services-description">
                    Servicios eficientes y confiables brindados por profesionales capacitados.
                </p>
                <Row>
                    {services.map((service) => (
                        <Col md={4} key={service.id} className="service-card-col">
                            <ServiceCard service={service} />
                        </Col>
                    ))}
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Services;
