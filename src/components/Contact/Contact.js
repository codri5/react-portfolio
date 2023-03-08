import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
    return (
        <>
        <section>
          <Container className='contact' id='contact'>
            <Container className='contact-content'>
              <Row>
                <Col className='contact-header text-center'>
                  <h1 className='contact-heading'>Contact</h1>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
      )
}

export default Contact;