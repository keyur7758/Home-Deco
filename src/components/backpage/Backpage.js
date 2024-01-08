import React from 'react'
import Button from 'react-bootstrap/Button';
import '../backpage/Backpage.css'
import Header from '../footer/header/Header';
import { Link } from 'react-router-dom';
export default function Backpage(props) {
  return (
   <>
   <div className='home-main'>
                <div className='home-area' style={{backgroundImage:`url(${props.path})`}}>
                    <Header />
                    <div className='home-box' >
                        <div className='home-content'>
                            <i class="fa-regular fa-circle-play"></i>
                            <h2>MAKE YOUR HOME DESIGN AWESOME</h2>
                            <p>We play with ideas, we arrange them and then we bring them to life.</p>
                         <Link to="/contact"><Button className='home-btn' variant="outline-dark">BOOK NOW</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
   </>
  )
}
