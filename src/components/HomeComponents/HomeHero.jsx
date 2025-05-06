import React from 'react'
import heroImage  from "../../assets/home/herobg.jpg"

const HomeHero = () => {
  return (
    <>
      <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="bg-opacity-50 text-white text-center px-4 py-8 rounded-md max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Evaluation of the Current Safety
        </h1>
        <p className="text-lg">
          Labora aims to connect professionals with companies and organizations in the sector of laboratory automation.
        </p>
      </div>
    </section> 
    </>
  )
}

export default HomeHero
