import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';
import { Link } from 'react-router-dom';

function About() {

  const profileImg = 'https://picsum.photos/200';

    return (
        <>
        <section>
          <Container className='about' id='about'>
            <Container className='about-content'>
              <Row>
                <Col>
                  <img src={profileImg} alt='profile' className='profile' />
                </Col>
                <Col className='about-header text-center'>
                  <h3 className='about-heading'>Codrina Pal</h3>
                  <h6 className='about-subheading'>Web Developer</h6>
                  <hr className='hr'></hr>
                  <p className='description'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit 
                  amet risus sed justo condimentum sagittis at nec ex. Mauris erat justo, 
                  facilisis quis leo eu, tincidunt venenatis orci. Curabitur in scelerisque 
                  orci. 
                  </p>
                  <Link to="/skills" className="btn-primary primaryBtn">Learn More</Link>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
    );
}

export default About;