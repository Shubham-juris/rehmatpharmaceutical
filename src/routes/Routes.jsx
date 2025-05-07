import React from 'react'
import { Routes, Route } from "react-router";
import Homepage from '../pages/Homepage/Homepage';
import AboutUsPage from '../pages/Aboutuspage/AboutUsPage';
import ServicePage from '../pages/Service/ServicePage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutUs' element={<AboutUsPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
      </Routes>
    </>
  )
}

export default Router;
