import Navbar from '../components/Navbar'
import React from 'react'
import Annoucement from '../components/Annoucement'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import Products from '../components/Products'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
      <>
        <Annoucement />
        <Navbar />
        <Hero />
        <CategoryList />
        <Products />
        <Newsletter />
        <Footer />
      </>
      
  )
}

export default Home