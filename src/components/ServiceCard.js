import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <Card className="service-card">
            <Card.Img variant="top" src={service.image} />
            <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Link to={`/services/${service.id}`}>
                    <Button variant="primary">Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ServiceCard;
