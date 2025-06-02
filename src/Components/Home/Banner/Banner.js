import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bannerImg from '../../images/banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container fluid className="px-5">
        <Row className="align-items-center gx-5">
          <Col xs={12} md={6} className="text-center text-md-start">
            <h1 className="heading">Florence Agency</h1>
            <p className="p-text mt-3">
              Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <Link to="#pricing">
              <button className="global-btn mt-4">See Pricing</button>
            </Link>
          </Col>

          <Col xs={12} md={6} className="text-center mt-4 mt-md-0">
            <img src={bannerImg} alt="athena-agency" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
