import React, { useState } from 'react';
import '../../assets/css/landing.css';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import SpotifyIcon from "../../assets/media/yt.png";
import PixfortIcon from "../../assets/media/fb.png";
import AirbnbIcon from "../../assets/media/instagram.png";



const Landing = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <>
      {showNavbar && <Navbar />}
      <div className='landing-container'>
        <div className='landing-text-container'>
          <div className='landing-title'>
            Simplicity is the ultimate sophistication.
          </div>
          <div className='landing-description'>
            Combine seamlessly fitting layouts, customize everything you want.
          </div>
        </div>
        <div className='landing-button'>Create Your Website</div>
        <div className='brand-container'>
          <div className="brand">
            <img className="brand-icon" src={SpotifyIcon} alt={'spotify'} />
          </div>
          <div className="brand">
            <img className="brand-icon" src={AirbnbIcon} alt={'airbnb'} />
          </div>
          <div className="brand">
            <img className="brand-icon" src={PixfortIcon} alt={'pixfort'} />
          </div>
        </div>
        <div className='landing-bottom-button'>
          v
        </div>
        <div className='landing-sub-title'>
          Join The Next Revolution.
        </div>
        <div className='feature-button-container'>
          <div className='feature-item'>Perfect Design</div>
          <div className='feature-item'>Perfect Design</div>
          <div className='feature-item'>Perfect Design</div>
        </div>
        <div className='landing-sub-text'>
          Advanced cameras combined with a large display, fast performance, and highly calibrated sensors have always made uniquely capable.
        </div>
        <div className='card-container'>

          <div className='c-item'>
            <div className='card-title'>Secure</div>
            <div className='card-title'>Design</div>
            <div className='card-title'>Collaboration</div>
          </div>
          <div className='c-item'>
            <div className='card-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='card-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='card-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
          </div>
          <div className='c-item'>
            <div className='card-detail'>Learn More</div>
            <div className='card-detail'>Learn More</div>
            <div className='card-detail'>Learn More</div>
          </div>
        </div>
        <div class="kayan-yazi-container">
          <div class="kayan-yazi sol-yon">
            Essentials Theme A  - New Revolution In Here  Essentials Theme A  - New Revolution In Here  Essentials Theme A  - New Revolution In Here  Essentials Theme A  - New Revolution In Here
          </div>
          <div class="kayan-yazi sag-yon">
            Follow Us On Facebook  Follow Us On Facebook  Follow Us On Facebook  Follow Us On Facebook  Follow Us On Facebook  Follow Us On Facebook
          </div>
        </div>
        <div className='right-left-container'>
          <div className='left-side-container'>
            <div className='left-side-title'>Gallery</div>
            <div className='left-side-subtitle'>Drag & Drop Builder</div>
            <div className='left-side-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='left-side-subtitle'>Powerful Options</div>
            <div className='left-side-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='landing-button'>Start your project today</div>
            <div className='left-vertical-text'>Share</div>
            <div className='left-vertical-text'>Create</div>
            <div className='left-vertical-text'>Think</div>
          </div>
          <div className='right-side-container'>
            <div className='lightbox'>
              Lightbox 1
            </div>
            <div className='lightbox'>
              Lightbox 2
            </div>
            <div className='lightbox'>
              Lightbox 3
            </div>
            <div className='lightbox'>
              Lightbox 4
            </div>
          </div>
        </div>
       <div className='high-conversion-button'>High Conversion</div>
       <div className='landing-sub-title'>
       Build a business with affordable prices.
        </div>
        <div className='landing-description'>
        Advanced cameras combined with a large display, fast performance, and highly calibrated sensors have always made uniquely capable.
        </div>
      </div>
    </>


  )
}

export default Landing;