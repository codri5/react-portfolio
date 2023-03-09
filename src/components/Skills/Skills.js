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
                <h4 className='skills-header text-left'>Skills</h4>
                <hr className='hr'></hr>
              </Row>
                <Row className='skills-subheading'>
                    <Col>
                        <CircularProgressbar value={html} text={`${html}%`} 
                            styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'                          
                         })}
                        />
                        <p>HTML</p>
                    </Col>
                    <Col>
                        <CircularProgressbar value={css} text={`${css}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'
                          })}
                        />
                        <p>CSS</p>
                    </Col>
                    <Col>
                        <CircularProgressbar value={bootstrap} text={`${bootstrap}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e',
                          })}
                        />
                        <p>Bootstrap</p>
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
                        <p>JavaScript</p>
                    </Col>
                    <Col>
                        <CircularProgressbar value={php} text={`${php}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e',
                          })}
                        />
                        <p>PHP</p>
                    </Col>
                    <Col>
                        <CircularProgressbar value={react} text={`${react}%`} 
                         styles={buildStyles({
                            pathColor: `#8b5297`,
                            textColor: '#3a263e'
                          })}
                        />
                        <p>React</p>
                    </Col>
                </Row>
            </Container>
          </Container>
        </section>
      </>
    );
}

export default Skills;