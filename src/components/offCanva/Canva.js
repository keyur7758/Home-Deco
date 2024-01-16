import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../offCanva/Canva.css'

export default function Canva({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="dark" onClick={handleShow} className="me-2 canva-btn">
        <i class="fa-solid fa-bars-staggered"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='menu-area'>

            <div className='menu-box'>
              <Link to="/contact"><Button variant="outline-dark" className="menu-book-btn">MAKE A BOOKING</Button></Link>
              <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
              </ul>
              <p className='line'></p>

              <ul>
                <li><i class="fa-brands fa-facebook"></i>facebook</li>
                <li><i class="fa-brands fa-instagram"></i>instagram</li>
                <li><i class="fa-brands fa-twitter" ></i>tweeter</li>
              </ul>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
