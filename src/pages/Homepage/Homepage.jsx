import React from 'react'
import HomeHero from '../../components/HomeComponents/HomeHero'
import Labortry from '../../components/HomeComponents/Labortry'
import TrustedSec from '../../components/HomeComponents/TrustedSec'
import NewsEvents from '../../components/HomeComponents/NewsEvents'

const Homepage = () => {
  return (
    <>
      <HomeHero/>
      <Labortry/>
      <TrustedSec/>
      <NewsEvents/>
    </>
  )
}

export default Homepage
