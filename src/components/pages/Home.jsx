import React from 'react'
import Banner from '../layouts/Banner'
import Categories from '../layouts/Categories'
import TrendProduct from '../layouts/TrendProduct'
import DealWork from '../layouts/DealWork'
import Adds from '../layouts/Adds'
import Limited from '../layouts/Limited'
import Gallrey from '../layouts/Gallrey'

const Home = () => {
  return (
    <>
      <Banner/>
      <Categories/>
      <TrendProduct/>
      <DealWork/>
      <Adds/>
      <Limited/>
      <Gallrey/>
    </>
  )
}

export default Home