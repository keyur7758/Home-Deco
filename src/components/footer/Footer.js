import React from 'react'
import '../footer/Footer.css'

export default function Footer() {
  return (
    <>
    <section class="footer-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-heading">
            <h1>Let's Discuss</h1>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-box">
            <h4>Address</h4>
            <p>Germany — 785 15h Street, Office 478 Berlin, De 81566</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-box">
            <h4>Say Hello</h4>
            <p>keyurk397@gmail.com</p>
            <h2>+91 9638458932</h2>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-box">
            <h4>Social</h4>
            <p>FACEBOOK</p>
            <p>TWITTER</p>
            <p>LINKDIN</p>
            <p>INSTAGRAM</p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="footer-box">
            <h4>Newsletter</h4>
            <input type="text" class="input-footer" placeholder="Type Your Email"/>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="footer-last-area">
    <div class="row g-0">
      <div class="col-lg-6 col-md-6">
        <div class="footer-logo-box">
          <h4 className='footer-logo'><img className='img-fluid home-logo' src='/images/Home-Logo.png'/></h4>
        </div>
      </div>
      <div class="col-lg-6 col-md-6">
        <div class="footer-logo-box">
          <p> &copy;2023 HOME DeCoR is Powered by Keyur</p>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}
