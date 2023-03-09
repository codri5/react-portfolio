import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Contact.css';
import { SlLocationPin } from "react-icons/sl";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from 'react-icons/ai';


function Contact() {
    return (
        <>
        <section>
          <Container className='contact' id='contact'>
            <Container className='contact-content' id='contact-content'>
                 <Row>
                <Col>
                  <h3 className='contact-heading text-center'>Get in<span id='span'>Touch</span></h3>
                </Col>
                <hr></hr>
                <Col className='contBtn'>
                <Row>
                <Button className='contactBtn' href='#' target='_blank'>
                        <SlLocationPin /> Liverpool
                </Button>
                </Row>
                <Row>
                <Button className='contactBtn' href='#' target='_blank'>
                        <AiOutlinePhone />+44 754 242 4360
                </Button>
                </Row>
                <Row>
                <Button className='contactBtn' href='#' target='_blank'>
                        <AiOutlineMail /> codrinapal@gmail.com
                </Button>
                </Row>
                <Row>
                <Button className='contactBtn' href='https://github.com/codri5' target='_blank'>
                        <AiFillGithub /> GitHub
                </Button>
                </Row>
              
                  <form></form>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
      )
}

export default Contact;