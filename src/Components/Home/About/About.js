import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/about.png';
import experience from '../../images/Experience.png';
import prototyping from '../../images/Prototyping.png';
import illustration from '../../images/Illustrating.png';
import interfaceImg from '../../images/Interface.png';
import './About.css';

const aboutCard = [
  { id: 1, img: experience, title: 'Experience Design' },
  { id: 2, img: interfaceImg, title: 'Interface Design' },
  { id: 3, img: prototyping, title: 'Prototyping' },
  { id: 4, img: illustration, title: 'Illustration' }
];

const About = () => {
  return (
    <section id="about">
      <Container fluid>

        {/* Section Title */}
        <div className="text-center mb-5">
          <h2 className="section-title">What we do</h2>
          <p className="p-text">
            Our main focus is to make the User Experience very simple and easy. Simplicity is our strength.
          </p>
        </div>

        {/* Cards */}
        <Row className="mb-5">
          {aboutCard.map((ab) => (
            <Col key={ab.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
              <div className="about-cards h-100">
                <div className="img-top d-flex align-items-center justify-content-center">
                  <img src={ab.img} alt={ab.title} className="img-fluid" />
                </div>
                <div className="text-center card-body">
                  <h5><strong>{ab.title}</strong></h5>
                  <p className="text-secondary">
                    The point of using Lorem Ipsum is that it has a more-or-less normal.
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* About Image & Description */}
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <img src={aboutImg} alt="About" className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <div className="pl-md-3">
              <h2 className="section-title">Stay Running & Project</h2>
              <p className="text-secondary">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters.
              </p>
              <Link to="#contact-us">
                <button className="global-btn mt-3">Contact Us</button>
              </Link>
            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default About;
