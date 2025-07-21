// src/pages/Services.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Services() {
  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: 'Développement Web',
      description: 'Création de sites web responsives et d\'applications web sur mesure avec les dernières technologies.',
    },
    {
      icon: 'fas fa-camera-retro',
      title: 'Photographie',
      description: 'Séances photo professionnelles pour portraits, événements, produits ou tout autre besoin visuel.',
    },
    {
      icon: 'fas fa-cogs',
      title: 'Maintenance & Optimisation',
      description: 'Maintenance de sites existants, amélioration des performances et optimisation SEO.',
    },
    {
      icon: 'fas fa-palette',
      title: 'Design UI/UX',
      description: 'Conception d\'interfaces utilisateur intuitives et d\'expériences utilisateur engageantes.',
    },
  ];

  return (
    <section className="services-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Mes Services</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <i className={`${service.icon} fa-4x text-primary mb-3`}></i>
                  <Card.Title className="h4">{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Services;