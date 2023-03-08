import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './About.css';

function About() {
    return (
        <>
        <section>
          <Container className='about' id='about'>
            <Container className='about-content'>
              <Row>
                <Col>
                  <img src='https://picsum.photos/200' alt='profile' className='profile' />
                </Col>
                <Col className='about-header text-center'>
                  <h3 className='about-heading'>Codrina Pal</h3>
                  <h6 className='about-subheading'>Web Developer</h6>
                  <hr></hr>
                  <p className='description'>
                    Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of 
                    type and scrambled it to make a type specimen book.
                  </p>
                  <button className='primaryBtn' type="button">Learn More</button>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
      )
}

export default About;