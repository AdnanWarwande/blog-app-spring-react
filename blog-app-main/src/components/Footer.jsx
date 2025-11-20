import React from 'react';
import { Container, Row, Col } from 'reactstrap'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
      <Row className="mb-4 text-center">        
          <Col>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebook} className="me-2" /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} className="me-2" /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} className="me-2" /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} className="me-2" /></a>
            </div>
          </Col>
        </Row>

        {/* <Row>
          <Col md={4}>
            <h5>BlogiFy</h5>
            <p>A brief description of the company.</p>
            <p>Contact information: contact@example.com</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              {/* Add more links as needed */}
            {/* </ul>
          </Col>
        </Row> */} 
      </Container>
      <div className="text-center mt-3">
        <p>&copy; {new Date().getFullYear()} BLOGIFY. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;