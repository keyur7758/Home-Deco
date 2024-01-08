import React from 'react'
import '../about/About.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export default function About(props) {
  return (
   <>
   <div className='about-area'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='img-box'>
                            <img className='img-fluid' src={props.src} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='about-box'>
                            <div className='about-title'>
                                <h2>We Have Profesional Developer Team</h2>
                                <p>We play with ideas, we arrange them and then we bring them to life.</p>
                           <Link to="/contact" ><Button className='book-btn' variant="outline-dark slide-head-btn">Book Now</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

   </>
  )
}
