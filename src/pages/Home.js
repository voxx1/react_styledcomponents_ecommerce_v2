import Navbar from '../components/Navbar'
import React from 'react'
import Annoucement from '../components/Annoucement'
import Hero from '../components/Hero'
import CategoryList from '../components/CategoryList'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>

      <Navbar />
      <Annoucement />
      <Hero />
      <CategoryList />
      <Newsletter />
      <Footer />
    </>

  )
}

export default Home