import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <>
      <footer className='footer' id='footer'>
          <hr></hr>
          <a href='https://github.com/codri5' target='_blank' rel='noopener noreferrer'>
            <AiFillGithub className='footer-icon' />
          </a>
          <a href='mailto:codrinapal@gmail.com'>
            <AiOutlineMail className='footer-icon' />
          </a>
          <a href='https://uk.linkedin.com/in/codrina-pal-5b0031199' target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin className='footer-icon' />
          </a>

     
          <p className='copy'>&copy; 2023 - Codrina Pal</p>
    
      </footer>
    </>
  );
}

export default Footer;



