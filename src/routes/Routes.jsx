import React from 'react'
import { Routes, Route } from "react-router";
import Homepage from '../pages/Homepage/Homepage';
import AboutUsPage from '../pages/Aboutuspage/AboutUsPage';
import ServicePage from '../pages/Service/ServicePage';
import ContactUsPage from "../pages/ContactUS/ContactUsPage";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/aboutUs' element={<AboutUsPage/>}/>
        <Route path='/service' element={<ServicePage/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>

      </Routes>
    </>
  )
}

export default Router;
