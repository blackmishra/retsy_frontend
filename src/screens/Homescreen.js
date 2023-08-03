import React, { useState, useEffect } from 'react'
// import Restaurants from '../restaurants'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantActions'
import Restaurants from '../components/Restaurants'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'



// function Homescreen() {
//     const dispatch = useDispatch()
//     // state={details: [],}
//     let keyword = ''

//     const restaurantList = useSelector(state => state.restaurantList)
//     const { error, loading, products, page, pages } = restaurantList

//     useEffect(() => {
//         dispatch(listRestaurants(keyword))

//     }, [dispatch, keyword])
//     return (
//         <div>
//             <Row>
//                 {Restaurants.map(showRestaurant)}
//             </Row>
//         </div>
//     )
// }

// function showRestaurant(restaurant) {
//     return (
//         <Col key={restaurant.id} >
//             <Restaurants restaurant={restaurant} />
//         </Col>
//     )
// }

// export default Homescreen



class Homescreen extends React.Component {
    state = { details: [], };
    componentDidMount() {
        let data
        axios.get('http://localhost:8000/search')
            .then(res => {
                this.setState({ details: data });
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Row>
                    {this.state.details.map((rest, id) => (
                        <Col key={id} >
                            <Restaurants restaurant={rest} />
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
   
}

export default Homescreen
