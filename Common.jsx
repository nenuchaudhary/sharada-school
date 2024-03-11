import React from "react";
import "./Home.css";
import web from "../src/image/kids-160168.svg";
import { NavLink } from "react-router-dom";



const Common = (props)=>{
  console.log(props);
   return(
     <>

     <section id="header"  className="d-flex flex-wrap align-items-center"> 
      <div className="container-fluid nav-bg">
          <div className="row">
             <div className="col-10 mx-auto">
              <div className="row  ">
                 <div className="col-md-6  pt-4 pt-lg-1 order-2 order-lg-0">
                  <h1 className="my-4">
                  <span className="text-success welcome">{props.name} <br/></span>  <strong className="brand-name"> "Sharda English School " </strong> 
                  </h1>
                 <h3 className="text-success caption" >
                       {props.caption}
                 </h3>
                    <div className="mt-4">
                       <NavLink to={props.visit} className="btn-get-started">
                        {props.btnname}</NavLink>
                    </div>
                 </div>
                
                 <div className="col-lg-6 order-1  lg-2 header-img">
                    
                   <img src={props.srcimage} className="img-fluid animated" alt="hero"/>
                 </div>
               </div>
                 
             </div>
          </div>
      </div>
     </section>
     
     </>

   );
};
export default Common;