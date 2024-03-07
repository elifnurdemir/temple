import React, { useState, useEffect, useRef } from 'react';
import '../../assets/css/landing.css';
import Navbar from '../navbar/navbar';
import { useNavigate } from 'react-router-dom';
import SpotifyIcon from "../../assets/media/yt.png";
import PixfortIcon from "../../assets/media/fb.png";
import AirbnbIcon from "../../assets/media/instagram.png";
import Marquee from "react-fast-marquee";
import IpadFrame from "../../assets/media/ipad.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import VANTA from 'vanta';
import * as THREE from 'three'; // THREE.js kütüphanesini yükleyin
import CLOUDS from 'vanta/dist/vanta.birds.min.js'; // Doğru dosya yolunu kullanın

const Landing = () => {
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true);
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: "#test",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        backgroundColor: 0xfbfff4,
        birdSize: 4.00,
        wingSpan: 39.00,
        speedLimit: 6.00,
        separation: 100.00,
        alignment: 100.00,
        cohesion: 4.00,
        quantity: 2.00,
        backgroundAlpha: 0.00
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])


  useEffect(() => {
    AOS.init();
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <>
      {showNavbar && <Navbar />}
      <div className='landing-container' >
        <div className='landing-container-top-container landing-container' id="test">
          <div className='landing-text-container'>
            <div className='landing-title'>
              Simplicity is the ultimate sophistication.
            </div>
            <div className='landing-description'>
              Combine seamlessly fitting layouts, customize everything you want.
            </div>
          </div>
          <div className='landing-button' onClick={() => { handleLoginClick() }} >Create Your Website</div>
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

        </div>

        <div className="landing-sub-container">
          <div className='landing-sub-title'>
            Join The Next <div className="landing-sub-title-revolution">Revolution</div>
          </div>
          <div className='feature-button-container'>
            <div className="feature-item-row">
              <div className='feature-item feature-item-1'>
                <div className='feature-item-content'>
                  Think
                </div>

              </div>
              <div className='feature-item feature-item-hidden' />
            </div>
            <div className="feature-item-row">

              <div className='feature-item feature-item-2'>
                <div className='feature-item-content'>
                  Design
                </div>
              </div>
              <div className='feature-item feature-item-3'>
                <div className='feature-item-content'>
                  Send
                </div>
              </div>
            </div>


          </div>
          <div className='landing-sub-text'>
            Bir Hediye Hiç Bu Kadar Tıklanabilir Olmamıştı!
          </div>
        </div>

        <div className='card-container'>
          <div className="card-container-column">
            <div className='card-title'>Secure</div>
            <div className='card-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='card-detail'>Learn More</div>
          </div>
          <div className="card-container-column">
            <div className='card-title'>Design</div>
            <div className='card-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='card-detail'>Learn More</div>
          </div>
          <div className="card-container-column">
            <div className='card-title'>Collaboration</div>
            <div className='card-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='card-detail'>Learn More</div>
          </div>

        </div>
        <Marquee
          pauseOnHover={true}
          direction='right'
          className="landing-marquee"
        >
          <div className="marquee-content-container">
            <div className="marquee-content marquee-gradient-1">
              Your Website Your Design
            </div>

            <div className="marquee-content">
              🌟
            </div>

            <div className="marquee-content">
              🌟
            </div>


          </div>
        </Marquee>

        <Marquee
          pauseOnHover={true}
          className="landing-marquee"
        >
          <div className="marquee-content-container">
            <div className="marquee-content marquee-gradient-2">
              Elifin
            </div>
            <div className="marquee-content">
              🍑
            </div>
            <div className="marquee-content marquee-gradient-2">
              Yanaklari
            </div>
            <div className="marquee-content">
              🍑
            </div>

            <div className="marquee-content marquee-gradient-2">
              Cok
            </div>
            <div className="marquee-content">
              🍑
            </div>
            <div className="marquee-content marquee-gradient-2">
              Guzel
            </div>
            <div className="marquee-content">
              🍑
            </div>
          </div>
        </Marquee>


        <div className='right-left-container'>
          <div className='left-side-container'>
            <div className='left-side-title'>Gallery</div>
            <div className='left-side-subtitle'>Drag & Drop Builder</div>
            <div className='left-side-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='left-side-subtitle'>Powerful Options</div>
            <div className='left-side-text'>This is just a simple text made for this unique and awesome template, you can replace it with any text.</div>
            <div className='landing-button'>Start your project today</div>

            <div className="left-vertical-text-container">
              <div className='left-vertical-text'>Share.</div>
              <div className='left-vertical-text'>Create.</div>
              <div className='left-vertical-text'>Think.</div>
            </div>

          </div>
          <div className='right-side-container'>
            <div className='lightbox-container'>
              <div className='lightbox-row'>
                <div className='lightbox lightbox-1'
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className='lightbox-text lightbox-text-1'>Fotoğraf Ekle</div>
                </div>
                <div className='lightbox lightbox-2'
                  data-aos="fade-left"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className='lightbox-text lightbox-text-1'> Video Ekle</div>
                </div>
              </div>
              <div className='lightbox-row'>
                <div className='lightbox  lightbox-3'
                  data-aos="fade-right"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className='lightbox-text lightbox-text-1'>  Ses Kaydı Ekle </div>
                </div>
                <div className='lightbox  lightbox-4'
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="1500"
                >
                  <div className='lightbox-text lightbox-text-1'> Metin / Yazı Ekle </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='landing-sub-title'>
          Build a business with affordable prices.
        </div>
        <div className='landing-description'>
          Advanced cameras combined with a large display, fast performance, and highly calibrated sensors have always made uniquely capable.
        </div>

        <div
          className="ipad-mockup"
          data-aos="flip-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={IpadFrame} alt={""} />
          <div className="ipad-mockup-content-container">
            <div className="ipad-mockup-content-wrapper">

            </div>
          </div>
        </div>
      </div >
    </>


  )
}

export default Landing;