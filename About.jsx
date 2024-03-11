import React from "react";
import "./Home.css";
import aboutimg from "../src/image/goschool.jpeg";

import { NavLink } from "react-router-dom";
import Common from "./Common";



const About = ()=>{
   return(
     <>
   
     <Common name="Namaste To All " 
     caption = "Welcome to Sharda English School, where excellence in education meets nurturing guidance. Established with a vision to inspire young minds, we pride ourselves on fostering a dynamic learning environment. At Sharda, we are committed to providing holistic education that empowers students to excel academically, socially, and morally. With a dedicated team of experienced educators, we strive to cultivate critical thinking, creativity, and character development in our students. Join us on a journey of educational exploration and personal growth at Sharda English School. " 
     srcimage = {aboutimg} 
     visit = "/Contact" 
     btnname = "Contact Now" />
     
     </>

   );
};
export default About;