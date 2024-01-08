import React, { useState } from 'react'
import '../contact/Contact.css'
import Header from '../footer/header/Header'
import Button from 'react-bootstrap/Button';
import $ from 'jquery'



export default function Contact() {
  const[thanks,setThanks] = useState(false)

  function Clearinput(){
   $(".clear-input").val("")
  }
  return (
    <>
      <Header />
      <div className='map-area'>
        <div className='container-fluid g-0'>      
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29561.43003890383!2d70.77129846983101!3d22.15726670307074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958359f6684fe6b%3A0xf590914470ce3372!2sShapar%2C%20Gujarat%20360024!5e0!3m2!1sen!2sin!4v1697891069045!5m2!1sen!2sin"allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>

      <section class="form-area">
        <div class="container g-0">
          <div class="row g-0">
            <div class="col-md-5">
              <div class="experince-box" data-aos="fade-right">
                <div class="head-form">
                <div class="b-round">
                                    <span class="benefit-title">GET IN TOUCH</span>
                                </div>
                  <h2>Let's get in</h2>
                  <h2> touch with us. </h2>
                  <div className='paragraph-area'>
                  <p>This is just placeholder text to be replaced when we have actual content </p>
                  <p>written tobe placed here.</p>
                  </div>
                  <div class="clients">
                    <h3>408+</h3>
                    <p>Happy Clients</p>
                  </div>
                  <div class="clients">
                    <h3>20+</h3>
                    <p>Experience</p>
                  </div>
                  <div class="clients">
                    <h3>42+</h3>
                    <p>Employes</p>
                  </div>

                </div>
              </div>

            </div>
            <div class="col-md-7">
              <div class="form-box" data-aos="fade-left">
                <div class="customer-detail">
                  <input id="name-input" className='clear-input' type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" className='clear-input' />
                  <input className="input-subject clear-input" type="text" placeholder="Phone" />
                  <input className="input-subject clear-input" type="text" id="message-box" placeholder="Message" />

                </div>
                  <Button className="spec-btn form-submit-btn" variant="outline-dark" onClick={()=>{setThanks(true);Clearinput()}}>Submit</Button>
              </div>
              {
                thanks &&
                <div className='thanks-area'>
                  <div className='thanks-box'>
                <i className="fa-solid fa-check"></i> <span>Thank you. Our Team Contact You Soon.</span>
              </div>
                  </div>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
