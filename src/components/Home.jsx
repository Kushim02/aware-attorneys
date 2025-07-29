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

      <Body/>
      <div id='practice-areas'>
        <Areas/>
      </div>
      <div id='about-us'>
         <About/>
      </div>
      <div id='attorneys'>
      <Attorneys/>
      </div>
      <Review/>
      <div id='contact'>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
