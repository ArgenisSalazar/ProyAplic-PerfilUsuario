import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/ServiceDetail.css';

const serviceDetail = {
    title: 'Instalación de cableado eléctrico',
    description: 'Instalación de cableado eléctrico profesional para tu hogar o negocio en Lima, Perú. Nuestro equipo está capacitado para brindar un servicio eficiente y seguro, cumpliendo con todos los estándares de calidad.',
    image: '/images/servicio1.jpg',
    technicalSpecifications: [
        { label: 'Tipo de cables', value: 'Cables de cobre de alta conductividad' },
        { label: 'Estándares de seguridad', value: 'Normas de seguridad internacionales IEC' },
        { label: 'Tiempo estimado de instalación', value: '3-5 días hábiles' },
    ],
    cost: 'Desde S/.1500',
    contact: {
        email: 'info@servicioslima.com',
        phone: '+51 987 654 321',
    },
};

const ServiceDetail = () => {
    return (
        <div className="service-detail-page">
            <NavBar />
            <Container className="service-detail-container">
                <h2 className="service-detail-title">Detalles y Especificaciones</h2>
                <h1 className="service-detail-subtitle">{serviceDetail.title}</h1>
                <Row>
                    <Col md={8}>
                        <p className="service-detail-description">{serviceDetail.description}</p>
                        <h3 className="service-detail-section-title">Especificaciones técnicas</h3>
                        <ul className="service-detail-list">
                            {serviceDetail.technicalSpecifications.map((spec, index) => (
                                <li key={index} className="service-detail-list-item">
                                    <strong>{spec.label}:</strong> {spec.value}
                                </li>
                            ))}
                        </ul>
                        <h3 className="service-detail-section-title">Costo del servicio</h3>
                        <p className="service-detail-cost"><strong>Precio:</strong> {serviceDetail.cost}</p>
                        <h3 className="service-detail-section-title">Contáctenos</h3>
                        <p className="service-detail-contact">
                            <strong>Email:</strong> {serviceDetail.contact.email}<br/>
                            <strong>Teléfono:</strong> {serviceDetail.contact.phone}
                        </p>
                    </Col>
                    <Col md={4}>
                        <img src={serviceDetail.image} alt="Service" className="service-detail-image" />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default ServiceDetail;
