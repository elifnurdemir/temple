import React from "react";
import '../../assets/css/landing.css';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';

const Landing= ()=> {

    return(
        <>
          <div className="login-button-grad landing-login-button" >Login</div>
        <Navbar/>
        </>
      
    )
}
{/*onClick={() => { giris() }}*/}
export default Landing;