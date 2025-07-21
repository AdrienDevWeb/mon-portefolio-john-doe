// src/pages/Portfolio.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Project1Img from '../assets/Desktop_John_Doe_Portfolio.png'; // J'ai mis .png, adaptez si besoin

function Portfolio() {
  const projects = [
    {
      title: 'Projet Alpha',
      description: 'Conception et développement d\'une application web pour la gestion de tâches.',
      image: Project1Img,
      link: '#'
    },
    {
      title: 'Site Vitrine Client Y',
      description: 'Réalisation d\'un site web moderne et responsif pour une petite entreprise.',
      image: Project1Img,
      link: '#'
    },
    {
      title: 'Projet Photographie Z',
      description: 'Série de photographies pour un portfolio artistique personnel.',
      image: Project1Img,
      link: '#'
    },
    {
      title: 'Application Mobile Beta',
      description: 'Développement d\'une application mobile simple pour iOS et Android.',
      image: Project1Img,
      link: '#'
    }
  ];

  return (
    <section className="portfolio-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Mon Portfolio</h2>
        <Row className="justify-content-center">
          {projects.map((project, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={project.image} alt={project.title} />
                <Card.Body>
                  <Card.Title className="h4">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button variant="primary" href={project.link}>Voir le projet</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
export default Portfolio;