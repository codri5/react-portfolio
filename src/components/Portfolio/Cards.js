import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Cards(props) {
    return (
        <>
            <Card className='project-card'>
                <Card.Img variant='top' src={props.image} alt='card-image' />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.content}</Card.Text>
                    <Button variant='primary' href={props.github} target='_blank'>
                        GitHub
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default Cards;