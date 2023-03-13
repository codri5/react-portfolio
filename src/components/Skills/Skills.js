import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Skills.css';

function Skills() {
  const [html, htmlPercentage] = useState(0);
  const [css, cssPercentage] = useState(0);
  const [bs, bsPercentage] = useState(0);
  const [js, jsPercentage] = useState(0);
  const [php, phpPercentage] = useState(0);
  const [react, reactPercentage] = useState(0);

  useEffect(() => { if (html < 95) { htmlPercentage(html + 1); }});
  useEffect(() => { if (css < 80) { cssPercentage(css + 1); }});
  useEffect(() => { if (bs < 80) { bsPercentage(bs + 1); }});
  useEffect(() => { if (js < 60) { jsPercentage(js + 1); }});
  useEffect(() => { if (php < 40) { phpPercentage(php + 1); }});
  useEffect(() => { if (react < 60) { reactPercentage(react + 1); }});

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
                pathColor: `#85586F`,
                textColor: '#3a263e'                          
                })} />
                <p>HTML</p>
              </Col>
              <Col>
                <CircularProgressbar value={css} text={`${css}%`} 
                  styles={buildStyles({
                  pathColor: `#85586F`,
                  textColor: '#3a263e'
                })} />
                <p>CSS</p>
              </Col>
              <Col>
                <CircularProgressbar value={bs} text={`${bs}%`} 
                  styles={buildStyles({
                  pathColor: `#85586F`,
                  textColor: '#3a263e',
                })} />
                <p>Bootstrap</p>
              </Col>
              </Row>
              <Row className='skills-subheading'>
                <Col>
                <CircularProgressbar value={js} text={`${js}%`} 
                  styles={buildStyles({
                  pathColor: `#85586F`,
                  textColor: '#3a263e'
                })} />
                <p>JavaScript</p>
                </Col>
                <Col>
                <CircularProgressbar value={php} text={`${php}%`} 
                  styles={buildStyles({
                  pathColor: `#85586F`,
                  textColor: '#3a263e',
                })} />
                <p>PHP</p>
                </Col>
                <Col>
                <CircularProgressbar value={react} text={`${react}%`} 
                  styles={buildStyles({
                  pathColor: `#85586F`,
                  textColor: '#3a263e'
              })} />
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