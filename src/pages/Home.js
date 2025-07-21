// src/pages/Home.js
import React from 'react';
import { Container, Row, Col, ProgressBar, Button } from 'react-bootstrap';
// Assurez-vous que cette image est bien dans src/assets/
import JohnDoePortrait from '../assets/Desktop_John_Doe_Home.png'; // J'ai mis .png car votre capture montre .png, adaptez si c'est .jpg

function Home() {
  return (
    <>
      {/* Section Hero/Bannière */}
      <section className="hero-section text-center text-white bg-dark py-5">
        <Container>
          <h1 className="display-4">Je suis John Doe</h1>
          <p className="lead">Développeur web full-stack</p>
          <Button variant="primary" size="lg" href="/services" className="mt-3">
            Mes services
          </Button>
        </Container>
      </section>

      {/* Section À propos */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <img
                src={JohnDoePortrait}
                alt="John Doe Portrait"
                className="img-fluid rounded-circle shadow"
              />
            </Col>
            <Col md={6}>
              <h2 className="mb-3">À propos</h2>
              <p>
                Passionné par le développement web, je mets mes compétences au service de vos projets. Fort d'une expérience solide en UX/UI design, développement front-end et back-end, ainsi qu'en référencement, je suis capable de concevoir des solutions numériques complètes et esthétiques.
              </p>
              <p>
                Mon approche est orientée vers la création d'expériences utilisateur fluides et intuitives, tout en garantissant des performances optimales et une visibilité accrue sur le web.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Section Compétences */}
      <section className="skills-section py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">Mes compétences</h2>
          <Row>
            <Col md={6}>
              <h3 className="h5">HTML5 / CSS3</h3>
              <ProgressBar now={90} label="90%" className="mb-3" />

              <h3 className="h5">JavaScript / React</h3>
              <ProgressBar now={85} label="85%" className="mb-3" />

              <h3 className="h5">PHP / Symfony</h3>
              <ProgressBar now={75} label="75%" className="mb-3" />
            </Col>
            <Col md={6}>
              <h3 className="h5">SQL / MySQL</h3>
              <ProgressBar now={80} label="80%" className="mb-3" />

              <h3 className="h5">UX/UI Design</h3>
              <ProgressBar now={95} label="95%" className="mb-3" />

              <h3 className="h5">SEO</h3>
              <ProgressBar now={70} label="70%" className="mb-3" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
export default Home;