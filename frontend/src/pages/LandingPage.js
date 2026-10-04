import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "../App.css";
function LandingPage() {
  let router=useNavigate();
  return ( 
<div className='landingContainer ' >
  <nav>
    <div className='navHeader'>
      <h2>MEET<span style={{color:"#3B82F6"}}>x</span></h2>
    </div>
    <div className='navList'>
      <p onClick={()=>{
       router("/queeety")
      }}>Join as Guest</p>
      <p onClick={()=>{router("/auth")}}>Register</p>
      <div onClick={()=>{router("/auth")}} role='button'>Login</div>
    </div>
  </nav>
  <div className='landingMainContainer'>
    <div > 
      <h1><span style={{color:"#ff9839"}}> Connect</span> with loved ones
      </h1>
      <p>Bring Everyone Together, Wherever They Are</p>
      <div role='button'>
        <Link to="/auth" style={{textDecoration:"none"}}>Get Started</Link>
      </div>
      </div>
    <div>
      <img src='/images/mobile.png' alt='Mobile Image'/>
    </div>
  </div>
</div>

   );
}

export default LandingPage;