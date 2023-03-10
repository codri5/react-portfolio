import React from 'react';
import { MDBInput, MDBValidation, MDBValidationItem, MDBTextArea } from 'mdb-react-ui-kit';

function ContactForm() {
  return (
    <>
    <section>
      <div className='contact-form' id='contact-form'>
        <MDBValidation noValidate id='form' >
          <MDBValidationItem invalid feedback='Please enter your name.'>
            <MDBInput placeholder='Name' required />
          </MDBValidationItem>
          <MDBValidationItem invalid feedback='Please enter your email.'>
            <MDBInput type='email' placeholder='Email' required />
          </MDBValidationItem>
          <MDBValidationItem invalid feedback='Please enter a message.' >
            <MDBTextArea placeholder='Message' required />
          </MDBValidationItem>
          <button type='submit' className='submitBtn'>Submit</button>
        </MDBValidation>
      </div>
    </section>
    </>
  );
}

export default ContactForm;