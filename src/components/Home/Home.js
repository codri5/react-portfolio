import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import './Home.css'

function Home() {
  return (
    <>
    <section>
      <Container className='home' id='home'>
        <Container className='home-content'>
          <Row>
            <Col className='home-header text-center'>
              <h1 className='name-heading'>Codrina <span id='span'>Pal</span></h1>
              <Type />
              <Link to='/contact' className='btn-primary primaryBtn'>Get in Touch</Link>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    </>
  );
}

export default Home;