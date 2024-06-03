import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col xs={12}>
            <nav className="footer-nav">
              <a href="/services">Servicios</a>
              <a href="/admission">Admisión de servicio</a>
              <a href="/contact">Contactanos</a>
            </nav>
          </Col>
        </Row>
        <hr className="footer-separator" />
        <Row>
          <Col xs={6} className="text-left">
            <div className="footer-site-name">Site name</div>
          </Col>
          <Col xs={6} className="text-right">
            <div className="social-media">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;