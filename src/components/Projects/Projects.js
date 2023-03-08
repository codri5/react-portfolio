import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Cards from './Cards';
import './Projects.css';

function Projects() {
    return (
    <>
    <section>
      <Container className='projects' id='projects'>
        <Container className='projects-content text-center'>
          <Row>
            <Col>
              <Cards 
                title='README Generator'
                github='https://github.com/codri5/readme-generator'
              />
            </Col>
            <Col>
              <Cards
                title='Pool Position'
                github='https://github.com/codri5/pool-position'
                website='https://codri5.github.io/pool-position'
              />
            </Col>
            <Col>
              <Cards
                title='News Search'
                github='https://github.com/codri5/news-search'
                website='https://codri5.github.io/news-search'
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Cards
                title='Work Day Scheduler'
                github='https://github.com/codri5/work-day-scheduler'
                website='https://codri5.github.io/work-day-scheduler'
              />
            </Col>
            <Col>
              <Cards
                title='JavaScript Quiz'
                github='https://github.com/codri5/javascript-quiz'
                website='https://codri5.github.io/javascript-quiz'
              />
            </Col>
            <Col>
              <Cards
                title='Password Generator'
                github='https://github.com/codri5/password-generator'
                website='https://codri5.github.io/password-generator'
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    </>
  );
}

export default Projects;