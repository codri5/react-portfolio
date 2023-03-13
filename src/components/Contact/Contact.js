import React from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from 'react-icons/ai';
import './Contact.css';

function Contact() {
  return (
    <>
    <section>
      <Container className='contact' id='contact'>
        <Container className='contact-content'>
          <Row className='contact-heading'>
            <h3 className='contact-heading text'>Get in<span id='span'>Touch</span></h3>
            <hr></hr>
          </Row>
          <Row className='contact-body'>
            <Button className='contactBtn' href='#'>
              <SlLocationPin className='icon' /> Liverpool
            </Button>
            <Button className='contactBtn' href='#'>
              <AiOutlinePhone className='icon' />(+44) 7542 424 360 
            </Button>
            <Button className='contactBtn' href='mailto:codrinapal@gmail.com' target='_blank' rel='noopener noreferrer'>
              <AiOutlineMail className='icon' /> codrinapal@gmail.com
            </Button>
            <Button className='contactBtn' href='https://github.com/codri5' target='_blank' rel='noopener noreferrer'>
              <AiFillGithub className='icon' /> GitHub
            </Button>
          </Row>
        </Container>
      </Container>
    </section>
    </>
  );
}

export default Contact;