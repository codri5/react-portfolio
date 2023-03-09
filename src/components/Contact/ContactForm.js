import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function ContactForm() {
    return (
        <>
        <section>
          <Container className='contact-form' id='contact-form'>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label></Form.Label>
                <Form.Control type="name" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label></Form.Label>
                <Form.Control type="text" placeholder="Message" />
              </Form.Group>
              <Button className='contactBtn' variant="primary" type="submit">Submit</Button>
            </Form>
          </Container>
        </section>
        </>
  );
}

export default ContactForm;