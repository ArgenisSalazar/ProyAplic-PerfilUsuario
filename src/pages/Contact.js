import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <NavBar />
            <Container className="contact-container">
                <h2 className="contact-title">Ponerse en contacto</h2>
                <h1 className="contact-subtitle">Contactanos</h1>
                <p className="contact-description">
                    Comuníquese con nosotros para cualquier consulta o para programar una cita de servicio.
                </p>
                <Row>
                    <Col md={8}>
                        <Form>
                            <Form.Group controlId="formName">
                                <Form.Label>Nombre Completo *</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su nombre completo" />
                            </Form.Group><br />
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email *</Form.Label>
                                <Form.Control type="email" placeholder="Ingrese su email" />
                            </Form.Group><br />
                            <Form.Group controlId="formPhone">
                                <Form.Label>Número de Teléfono *</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese su número de teléfono" />
                            </Form.Group><br />
                            <Form.Group controlId="formMessage">
                                <Form.Label>Mensaje *</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Ingrese su mensaje" />
                            </Form.Group><br />
                            <Form.Group controlId="formCheckbox">
                                <Form.Check type="checkbox" label="Permito que este sitio web almacene mi envío para que puedan responder a mi consulta." />
                            </Form.Group><br />
                            <div className="button-container">
                                <Button variant="success" type="submit">
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col md={4}>
                        <div className="contact-info">
                            <h4>Ponerse en contacto</h4>
                            <p><i className="far fa-envelope"></i> argenis.salazar@gmail.com</p>
                            <h4>Horarios de atención</h4>
                            <ul className="contact-hours">
                                <li><strong>Lunes:</strong> 9am - 10 pm</li>
                                <li><strong>Martes:</strong> 9am - 10 pm</li>
                                <li><strong>Miércoles:</strong> 9am - 10 pm</li>
                                <li><strong>Jueves:</strong> 9am - 10 pm</li>
                                <li><strong>Viernes:</strong> 9am - 10 pm</li>
                                <li><strong>Sábado:</strong> 9am - 6 pm</li>
                                <li><strong>Domingo:</strong> 9am - 6 pm</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default Contact;
