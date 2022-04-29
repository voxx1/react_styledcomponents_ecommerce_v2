import Navbar from '../components/UI/Navbar'
import React from 'react'
import Annoucement from '../components/UI/Annoucement'
import Hero from '../components/UI/Hero'
import CategoryList from '../components/UI/CategoryList'
import Footer from '../components/UI/Footer'
import Newsletter from '../components/UI/Newsletter'

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