import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Router from "./routes/Routes";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
