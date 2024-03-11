import React from "react";
import "./Home.css";
import web from "../src/image/kids-160168.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";



const Home = ()=>{
   return(
     <>

  <Common name="Welcome to" 
     caption = ' "Where quality education meets scenic beauty. Our dedicated faculty and modern facilities ensure holistic development for every student. Join us on a journey of academic excellence and personal growth. " '
                 
     srcimage = {web} 
     visit = "/Blog" 
     btnname = "Get Started" />

     </>

   );
};
export default Home ;