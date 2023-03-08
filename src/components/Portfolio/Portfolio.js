import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Portfolio() {
    return (
        <>
        <section>
          <Container className='portfolio' id='portfolio'>
            <Container className='portfolio-content'>
              <Row>
                <Col className='portfolio-header text-center'>
                  <h1 className='portfolio-heading'>Portfolio</h1>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
      )
}

export default Portfolio;