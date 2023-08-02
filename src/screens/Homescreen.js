import React from 'react'
import Restaurants from '../restaurants'
import SingleRestaurant from '../components/SingleRestaurant'
import { Row, Col } from 'react-bootstrap'

function Homescreen() {
    return (
        <div>
            <Row>
                {Restaurants.map(showRestaurant)}
            </Row>
        </div>
    )
}

function showRestaurant(restaurant) {
    return (
        <Col key={restaurant._id} >
            <SingleRestaurant restaurant={restaurant} />
        </Col>
    )
}

export default Homescreen