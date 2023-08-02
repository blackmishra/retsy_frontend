import React from 'react'
import { Card, Col } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'



function SingleRestaurant({ restaurant }) {
    return (
        <Col>
            <Card>
                <Card.Body>
                    <Link to={`/restaurant/${restaurant.id}`}>
                            <h1>{restaurant.name}</h1>
                        </Link>
                    <Rating value={restaurant.rating}></Rating>
                    <p>{restaurant.rating}</p>
                    <Card.Img src={restaurant.image}
                        alt={restaurant.name}
                        className='img-thumbnail' />
                    <Card.Text>{restaurant.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>


    )
}

export default SingleRestaurant