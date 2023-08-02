import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Restaurants from '../restaurants'
import { ListGroup, Row, Col, Image, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

function RestaurantDetailScreen() {
  const { id } = useParams()

  let clickedRestaurant = giveRestaurant(id)
  let matchRestaurant = clickedRestaurant[0]

  return (
    <div>
      <Row>
        <Col md={3}>
          <Image src={matchRestaurant.image} fluid />

          <ListGroup variant='flush'>
          <ListGroup.Item >
          <p>Cuisines Available: {matchRestaurant.cuisine}</p>
            </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={6}>
          <ListGroup variant='flush'>
            <ListGroup.Item >
              <h3>{matchRestaurant.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item >
              <Rating value={matchRestaurant.rating} />
              <span className='star-rating'>{matchRestaurant.rating} Stars</span>
            </ListGroup.Item>
            <ListGroup.Item >
              About Restaurant: {matchRestaurant.description}
            </ListGroup.Item>
            <ListGroup.Item >
              <Button className='btn btn-block'>Make Booking</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

function giveRestaurant(id) {
  let idToSearch = id
  return Restaurants.filter(function (rest) {
    let rest_ID = JSON.stringify(rest.id[0])
    return rest_ID === idToSearch
  })

}

export default RestaurantDetailScreen