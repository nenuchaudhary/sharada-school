import React from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { PiFacebookLogoBold } from "react-icons/pi";

import { text } from "@fortawesome/fontawesome-svg-core";






const Navbar=()=> {


  return(
     <>
<div className=" col-12 bg-info ">
      <div className="container-fluid nav_bg">
            <div className="row " >
                    <div className="col-11  mx-auto">
                       
                          <nav className="navbar navbar-expand-lg mt-2 ">
                            
                              <div className="container-fluid bg-info z-3 ">
                                
                                      <NavLink className="navbar-brand" to ="">
                                      <img className="brand-logo" src="./image1/stamp.png" alt="logo"/>
                                      </NavLink>
                                

                                  
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                      <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                                          
                                               
                                                <li className="nav-item ">
                                                  <NavLink  className="nav-link active " aria-current="page" to ="./Home">Home </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                  <NavLink className="nav-link" to ="./About">About us</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                  <NavLink className="nav-link " to ="./Contact">Contact us</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                  <NavLink className="nav-link " to ="./Blog">Blog</NavLink>
                                                </li>

                                                <li className="nav-item dropdown ">
                                                    <NavLink className="nav-link dropdown-toggle  " to ="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                      Dropdown
                                                    </NavLink>
                                                      <ul className="dropdown-menu">
                                                          <li><NavLink className="dropdown-item" to ="#">Action</NavLink></li>
                                                          <li><NavLink className="dropdown-item" to ="#">Another action</NavLink></li>
                                                          <li><hr className="dropdown-divider"/></li>
                                                          <li><NavLink className="dropdown-item" to ="#">Something else here</NavLink></li>
                                                      </ul>
                                                </li>   
                                          </ul>
                                          
                                          
                                      </div>
                                  
                              </div>
                        </nav>
                        
                </div>
            </div>
        </div>
  </div>
  
  
 



    
  
  

     
     </>

  );
};
   export default Navbar;