import React, { useState, useEffect } from 'react'
import Booking from '../components/Booking'
import axios from 'axios'


function BookingScreen() {
  const [allRestList, getRestData] = useState('')
  const url = 'http://localhost:8000/'
  useEffect(() => {
    getAllRest();
  }, [])

  // console.log(restData)

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

    <div>
      <Booking />
    </div>
  )
}

export default BookingScreen
