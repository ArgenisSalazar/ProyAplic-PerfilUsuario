import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Admission.css';

const Admission = () => {
    return (
        <div className="admission-page">
            <NavBar />
            <Container className="admission-container">
                <h2 className="admission-title">Formulario de admisión</h2>
                <h1 className="admission-subtitle">Ayúdenos a servirle mejor</h1>
                <p className="admission-description">
                    Complete los campos obligatorios y comparta sus respuestas con nosotros.
                </p>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Nombre Completo *</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre completo" />
                            </Form.Group><br />
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su email" />
                            </Form.Group><br />
                            <Form.Group controlId="formService">
                                <Form.Label>¿Qué servicio o servicios brindas? *</Form.Label>
                                <Form.Check type="checkbox" label="Construcción" />
                                <Form.Check type="checkbox" label="Plomería" />
                                <Form.Check type="checkbox" label="Otro" />
                            </Form.Group><br />
                            <Form.Group controlId="formMessage">
                                <Form.Label>Mensaje *</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Ingrese su mensaje" />
                            </Form.Group><br />
                            <div className="button-container">
                                <Button variant="success" type="submit">
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Admission;
