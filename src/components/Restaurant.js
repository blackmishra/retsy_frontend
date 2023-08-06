import React from 'react'
// import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { ListGroup, Row, Col, Image } from 'react-bootstrap'
// import Card, { CardContent } from 'material-ui/Card';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { MDBSpinner } from 'mdb-react-ui-kit';


function Restaurants(props) {
    const displayRest = (props) => {
        const { restData } = props
        if (restData.length > 0) {
            return (
                <div>
                    <Row>
                        {restData.map(showRestaurant)}
                    </Row>
                </div>
            )
        }
        else {
            return (
                <div className='d-flex justify-content-center'>
                    <MDBSpinner role='status'>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner>
                </div>
            )
        }
    }
    return (
        <>
            {displayRest(props)}
        </>
    )
}
function showRestaurant(singleRest) {
    return (
        <Card sx={{ maxWidth: 420 }}>
            <CardActionArea>
                <CardContent>
                    <CardMedia
                        component="img"
                        height="140"
                        image={singleRest.image}
                        alt={singleRest.name}
                    />

                    <ListGroup variant='flush'>
                        <Typography gutterBottom variant="h5" component="div">
                            {singleRest.name}
                        </Typography>

                        <ListGroup.Item >
                            <Rating value={singleRest.rating} />
                            <span className='star-rating'>{singleRest.rating} Stars</span>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <p>Cuisines Available: {singleRest.cuisine}</p>
                        </ListGroup.Item>
                        <CardActions>
                            <Button variant="outlined" color="error">Book</Button>

                        </CardActions>
                    </ListGroup>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}

export default Restaurants