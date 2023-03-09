import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from 'react-icons/ai';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <>
    <section>
      <Container className='contact' id='contact'>
        <Container className='contact-content'>
          <Row>
            <Col>
              <Row className='contact-heading'>
                <h3 className='contact-heading text-center'>Get in<span id='span'>Touch</span></h3>
                <hr></hr>
              </Row>
              <Button className='contactBtn' href='#' target='_blank'>
                <SlLocationPin /> Liverpool
              </Button>
              <Button className='contactBtn' href='#' target='_blank'>
                <AiOutlinePhone />+44 754 242 4360
              </Button>
              <Button className='contactBtn' href='#' target='_blank'>
                <AiOutlineMail /> codrinapal@gmail.com
              </Button>
              <Button className='contactBtn' href='https://github.com/codri5' target='_blank'>
                <AiFillGithub /> GitHub
              </Button>
            </Col>
            <Col className='contact-form text-center'>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    </>
  );
}

export default Contact;