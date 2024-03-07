import React, { useState, useEffect } from 'react';
import '../../assets/css/navbar.css';
import { useNavigate, useLocation } from 'react-router-dom';
import YoutubeIcon from "../../assets/media/yt.png";
import FacebookIcon from "../../assets/media/fb.png";
import InstagramIcon from "../../assets/media/instagram.png";


const Navbar = () => {
    const navigate = useNavigate();
    const [hamburgerVisible, setHamburgerVisible] = useState(false);

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (

        <div className='landing-navbar'>
            <div className="landing-navbar-left">
                <div className='landing-navbar-logo-container'>
                    <img src={"https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg"} alt='icon' />
                </div>
                <div className="navbar-vertical-line" />
                <div className="navbar-social-button-container">
                    
                    <div className="navbar-social-button">
                        <img className="navbar-social-icon" src={InstagramIcon} alt={'dribble'} />
                    </div>
                    <div className="navbar-social-button">
                        <img className="navbar-social-icon" src={FacebookIcon} alt={'instagram'} />
                    </div>
                    <div className="navbar-social-button">

                        <img className="navbar-social-icon" src={YoutubeIcon} alt={'youtube'} />
                    </div>

                </div>
            </div>

           




            <div className="landing-navbar-right">
            <div className={`landing-navbar-item-container ${hamburgerVisible ? 'landing-navbar-item-container-visible' : 'landing-navbar-item-container-hidden'}`}>
                <div className="landing-navbar-item landing-navbar-item-active">
                    Home
                </div>
                <div className="landing-navbar-item">
                    Features
                </div>
                <div className="landing-navbar-item">
                    Gallery
                </div>
                <div className="landing-navbar-item">
                    Blog
                </div>
                <div className="landing-navbar-item">
                    About
                </div>
                <div className="landing-navbar-item">
                    404 Page
                </div>
                <div className="landing-navbar-item">
                    Contact
                </div>
            </div>
                <input type="checkbox" id="checkbox" onClick={() => { setHamburgerVisible(!hamburgerVisible) }} />
                <label for="checkbox" class="toggle">
                    <div class="bars" id="bar1"></div>
                    <div class="bars" id="bar2"></div>
                    <div class="bars" id="bar3"></div>
                </label>
                <div className="login-button-grad landing-login-button" onClick={handleLoginClick} >Login</div>
            </div>

        </div>
    )


}
export default Navbar;

