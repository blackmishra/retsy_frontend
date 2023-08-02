import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import Homescreen from './screens/Homescreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SingleRestaurant from './components/SingleRestaurant';
import RestaurantDetailScreen from './screens/RestaurantDetailScreen';






function App() {
  return (
    <div >
      <Router>
        <Header />
        <main>
          <Container className='py-5'>
            <Routes>
              <Route path='/' element={<Homescreen/>} />
              <Route path='/restaurant/:id' element={<RestaurantDetailScreen/>} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
