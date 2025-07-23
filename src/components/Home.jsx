import React from 'react'
import Header from '../components/Header';
import Body from '../components/Body';
import Areas from '../components/Area';
import About from '../components/About';
import Attorneys from '../components/Attorneys';
import Review from '../components/Review';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div>
      <Header/>
      <hr style={{ margin: '0 auto', border: '1px solid #e5e7eb' }}/>
      <Body/>
      <Areas/>
      <About/>
      <Attorneys/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Home
