// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row>
          <Col md={4} className="footer-section about mb-3">
            <h3>John Doe</h3>
            <p>Photographe et développeur web basé à Paris.</p>
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt me-2"></i> 13 rue de la République, 75001 Paris</p>
              <p><i className="fas fa-phone me-2"></i> 06 00 00 00 00</p>
              <p><i className="fas fa-envelope me-2"></i> john.doe@gmail.com</p>
            </div>
          </Col>
          <Col md={4} className="footer-section links mb-3">
            <h3>Liens utiles</h3>
            <ul className="list-unstyled">
              <li><Link to="/mentions-legales" className="text-white text-decoration-none">Mentions Légales</Link></li>
            </ul>
          </Col>
          <Col md={4} className="footer-section social mb-3 text-md-start">
            <h3>Suivez-moi</h3>
            <a href="#" className="text-white me-3 fs-4"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white me-3 fs-4"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white me-3 fs-4"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white me-3 fs-4"><i className="fab fa-linkedin-in"></i></a>
          </Col>
        </Row>
        <Row className="mt-4 border-top border-secondary pt-3">
          <Col className="text-center">
            <p className="mb-0">&copy; 2024 John Doe. Tous droits réservés.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
export default Footer;