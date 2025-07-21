// src/pages/Contacts.js
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contacts() {
  return (
    <section className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-5">Me Contacter</h2>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <Form className="p-4 border rounded shadow-sm bg-white">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nom complet</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adresse email</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicSubject">
                <Form.Label>Sujet</Form.Label>
                <Form.Control type="text" placeholder="Sujet de votre message" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Votre message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Écrivez votre message ici" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Envoyer le message
              </Button>
            </Form>
          </Col>
        </Row>

        <Row className="mt-5 text-center">
          <Col md={4} className="mb-4">
            <i className="fas fa-map-marker-alt fa-2x text-primary mb-3"></i>
            <h4>Adresse</h4>
            <p>13 rue de la République, 75001 Paris</p>
          </Col>
          <Col md={4} className="mb-4">
            <i className="fas fa-phone fa-2x text-primary mb-3"></i>
            <h4>Téléphone</h4>
            <p>06 00 00 00 00</p>
          </Col>
          <Col md={4} className="mb-4">
            <i className="fas fa-envelope fa-2x text-primary mb-3"></i>
            <h4>Email</h4>
            <p>john.doe@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contacts;