import React from 'react'
import background from '../assets/images/Group 48.png'
import phone2 from '../assets/images/png-phone2.png'
import download from '../assets/images/Group 50.png'
import corp from '../assets/images/Group 51.png'
import icon1 from "../assets/images/Group 10.png"
import icon2 from "../assets/images/Group 11.png"
import icon3 from "../assets/images/Group 12.png"


const Landingpage = () => {
  return (
    <>
    <div>
      <div className="header">
          <p className="title">DORA</p>
          <div className="togle">
              <a href="/login.html" className="login">Login</a>
              <a href="/signUp.html" className="signUp">Sign Up</a>
          </div>
      </div>
    </div>
    <div>
      <div className='awesome'>
        <div className='pict'>
          <img src={background} className='awesome-background' alt='background'/>
          <img src={phone2} className='awesome-phone' alt='imagesphone'/>
        </div>
        <div className='awesome-text'>
          <p className="awesome-title" >Awesome App For Saving <span className="awesome-title-span">Time.</span></p>
          <p className="awesome-desc"> We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
          <a href="/signUp.html" className="tryIt">Try It Free</a><br/><br/>
          <img src={download}alt="download"/>
        </div>
      </div>
    </div>
    <div>
        <div className="img-corp">
            <img src={corp} className="img-display" alt="corp"/>
        </div>
    </div>
    <div>
        <div className="about">
            <p className="about-title"><span className='awesome-title-span'>About</span> the Application.</p>
            <p className="about-desc">We have some great features from the application and it's totally free to use by all users around the world.</p>
            <div className="card-wrap">
                <div>
                    <img src={icon1} alt=""/>
                    <p className="card-title">24/7 Support</p>
                    <p className="textCard">We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
                </div>
                <div className="cardItems">
                    <img src={icon2} alt=""/>
                    <p className="card-title" >Data Privacy</p>
                    <p className="textCard">We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
                </div>
                <div>
                    <img src={icon3} alt=""/>
                    <p className="card-title" >Easy Download</p>
                    <p className="textCard">DORA is 100% totally free to use it's now available on Google Play Store and App Store. </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landingpage