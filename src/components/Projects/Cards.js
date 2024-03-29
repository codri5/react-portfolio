import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Cards(props) {
    return (
        <>
        <section>
            <Card className='project-card'>
                <Card.Img variant='top' src={props.image} alt='card-image' />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Button className='projectBtn' variant='primary' href={props.github} target='_blank'>
                        GitHub
                    </Button>
                    {props.website && (
                         <Button 
                         className='projectBtn' 
                         variant='primary' 
                         href={props.website} target='_blank'>
                         Visit Website
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </section>
        </>
    );
}

export default Cards;