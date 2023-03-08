import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

function Skills() {
    const html = 95;
    const css = 80;
    const bootstrap = 80;
    const js = 60;
    const php = 40;
    const react = 60;

    return (
        <>
        <section>
          <Container className='skills' id='skills'>
            <Container className='skills-content'>
              <Row>
                <h4 className='skills-header text-center'>Skills</h4>
              </Row>
                <Row className='skills-subheading'>
                    <Col>
                        <CircularProgressbar value={html} text={`${html}%`} 
                            styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'                          
                         })}
                        />
                        <h6>HTML</h6>
                    </Col>
                    <Col>
                        <CircularProgressbar value={css} text={`${css}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'
                          })}
                        />
                        <h6>CSS</h6>
                    </Col>
                    <Col>
                        <CircularProgressbar value={bootstrap} text={`${bootstrap}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e',
                          })}
                        />
                        <h6>Bootstrap</h6>
                    </Col>
                </Row>
                <Row className='skills-subheading'>
                    <Col>
                        <CircularProgressbar value={js} text={`${js}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'
                          })}
                        />
                        <h6>JavaScript</h6>
                    </Col>
                    <Col>
                        <CircularProgressbar value={php} text={`${php}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e',
                          })}
                        />
                        <h6>PHP</h6>
                    </Col>
                    <Col>
                        <CircularProgressbar value={react} text={`${react}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'
                          })}
                        />
                        <h6>ReactJS</h6>
                    </Col>
                </Row>
            </Container>
          </Container>
        </section>
      </>
    );
}

export default Skills;