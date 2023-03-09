import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Cards from './Cards';
import './Projects.css';
import readmeGenerator from '../../assets/card-images/readme-generator.png';
import poolPosition from '../../assets/card-images/pool-position.png';
import newsSearch from '../../assets/card-images/news-search.png';
import workScheduler from '../../assets/card-images/work-day-scheduler.png';
import jsQuiz from '../../assets/card-images/javascript-quiz.png';
import passGenerator from '../../assets/card-images/password-generator.png';


function Projects() {
    return (
    <>
    <section>
      <Container className='projects' id='projects'>
        <Container className='projects-content text-center'>
          <Row>
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
            <Col>
              <Cards
                image={newsSearch}
                title='News Search'
                github='https://github.com/codri5/news-search'
                website='https://codri5.github.io/news-search'
              />
            </Col>
          </Row>
          <Row>
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
            <Col>
              <Cards
                image={passGenerator}
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