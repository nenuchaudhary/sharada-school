import React from 'react';
import './App.css';
import Home from "./Home" ;
import About from "./About";
import Contact from './Contact';
import Blog from './Blog';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Routes, } from 'react-router-dom';
import Footer from './Footer';




const App=() =>{

  return (

    <>
     <Navbar/>
     
     <switch>
      <Routes>
      <Route path = "/" Component={Home}/>
      <Route path = "/home" Component={Home}/>
      <Route path = "/about" Component={About}/>
      <Route path = "/contact" Component={Contact}/>
      <Route path = "/blog" Component={Blog}/>
      </Routes>
     </switch>
     <Footer/>
     
   
   
    </>
    
  );
}

export default App;
