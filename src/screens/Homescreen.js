import React, { useState, useEffect } from 'react'
// import Restaurants from '../restaurants'
import { useDispatch, useSelector } from 'react-redux'
import { listRestaurants } from '../actions/restaurantActions'
import Restaurant from '../components/Restaurant'
import { Row, Col } from 'react-bootstrap'
import axios from 'axios'


function Homescreen() {
    const [restData, getRestData] = useState('')
    const url = 'http://localhost:8000/search'
    useEffect(() => {
        getAllRest();
    }, [])

    const getAllRest = () => {
        axios({
            method: 'GET',
            url: url,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                const allRestList = response.data.data;
                console.log(allRestList);

                getRestData(allRestList)
            })
            .catch(error => console.error(`Error: $(error)`))
    }
    return (
        // console.log(restData);
        < Col key={restData.id} >
            <Restaurant restData={restData} />
        </Col >
    )
}


export default Homescreen
