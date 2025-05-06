import React from 'react'
import { Routes, Route } from "react-router";
import Homepage from '../pages/Homepage/Homepage';
import AboutUsPage from '../pages/Aboutuspage/AboutUsPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutUs' element={<AboutUsPage/>}/>

      </Routes>
    </>
  )
}

export default Router;
