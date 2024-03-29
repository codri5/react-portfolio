import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Cards from './Cards';
import readmeGenerator from '../../assets/card-images/readme-generator.png';
import poolPosition from '../../assets/card-images/pool-position.png';
import newsSearch from '../../assets/card-images/news-search.png';
import workScheduler from '../../assets/card-images/work-day-scheduler.png';
import jsQuiz from '../../assets/card-images/javascript-quiz.png';
import contactForm from '../../assets/card-images/contact-form.png';
import './Projects.css';

function Projects() {
    return (
      <>
      <section>
        <Container className='projects' id='projects'>
          <Container className='projects-content'>
            <Row>
              <h4 className='projects-header text-left'>Projects</h4>
              <hr className='hr'></hr>
            </Row>
            <Row className='proj-content'>
              <Col>
                <Cards
                  image={contactForm}
                  title='Contact Form'
                  github='https://github.com/codri5/contact-form'
                />
              </Col>
              <Col>
                <Cards
                  image={readmeGenerator}
                  title='README Generator'
                  github='https://github.com/codri5/readme-generator'
                />
              </Col>
              <Col>
                <Cards
                  image={poolPosition}
                  title='Pool Position'
                  github='https://github.com/codri5/pool-position'
                  website='https://codri5.github.io/pool-position'
                />
              </Col>
            </Row>
            <Row className='proj-content'>
              <Col>
                <Cards
                  image={newsSearch}
                  title='News Search'
                  github='https://github.com/codri5/news-search'
                  website='https://codri5.github.io/news-search'
                />
              </Col>
              <Col>
                <Cards
                  image={workScheduler}
                  title='Workday Scheduler'
                  github='https://github.com/codri5/work-day-scheduler'
                  website='https://codri5.github.io/work-day-scheduler'
                />
              </Col>
              <Col>
                <Cards
                  image={jsQuiz}
                  title='JavaScript Quiz'
                  github='https://github.com/codri5/javascript-quiz'
                  website='https://codri5.github.io/javascript-quiz'
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