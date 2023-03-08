import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function About() {
    return (
        <>
        <section>
          <Container className='about' id='about'>
            <Container className='about-content'>
              <Row>
                <Col className='about-header text-center'>
                  <h1 className='about-heading'>About</h1>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
      )
}

export default About;