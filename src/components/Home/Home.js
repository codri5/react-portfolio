import React from 'react';
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
              <button className='primaryBtn' type="button">Get in Touch</button>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  </>
  )
}

export default Home;