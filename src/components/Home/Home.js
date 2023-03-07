import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Type from './Type';

function Home() {
  return (
    <>
    <section>
      <Container className='home'>
        <Container className='home-content'>
          <Row>
            <Col className='home-header text-center'>
              <h1 className='name-heading'>Codrina Pal</h1>
              <Type />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  </>
  )
}

export default Home;