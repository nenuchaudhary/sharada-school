import React from "react";
import { TiSocialFacebookCircular } from "react-icons/ti";


const Contact =()=>{
   return(
     <>
     <h1 className="text-center mt-5">Welcome to my Contact page</h1>
     <form className="d-flex" role="search">
            <input className="form-control ms-4 " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="d-flex ms-5">
          <TiSocialFacebookCircular />
          </div>
          
       
     </>

   );
};
export default Contact;