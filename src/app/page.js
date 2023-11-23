"use client";
import "./page.css";

import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import Signin from "./Signin";
import Login from "./Login";
import "./page.css"
function page() {
  return (
    <div  >

       {/* this  is   for home page
       <Header></Header>    
       <Footer></Footer>     */}
     

     
         {/* 
         once the  user is login then rediret him to home page 
          <Login></Login>  */}
       {/* fisrt sign up page will be display when the  user click the sign button he will  be redirected to the log in page 
        <Signin></Signin>   */}
    </div>
  
  );
}

export default page;
