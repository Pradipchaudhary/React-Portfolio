import React from 'react'
import HeroSection from './components/HeroSection';

const Home = () => {
  const data = {
    name:"Pradip Chaudhary ",
    image:"./hero.svg",
  }
  return (
    <HeroSection {...data} />
  )
}

export default Home;
