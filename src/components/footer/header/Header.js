import React, { useEffect, useState } from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Header() {
  const [nav, setNav] = useState(false)
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const headerStyles = {
    position: 'fixed',
    width: '100%',
    zIndex: 10,
    transition: 'all',
    transition: "ease-out 0.3s",
    backgroundColor: isActive ? '#ffffff' : 'transparent',
    boxShadow: isActive ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
  };

    return (
        <>
            <div className="Header-area" style={headerStyles}>
                <div className='row g-0'>
                    <div className='col-md-6 col-6'>
                        <div className='header-box'>
                            <h2 className='logo'><img className='img-fluid home-logo' src='/images/Home-Logo.png'/></h2>
                        </div>
                    </div>
                    <div className='col-md-6 col-6'>
                        <div className='header-box-2'>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><Link to="/contact">CONTACT</Link></li>
                            </ul>
                            <i class="fa-solid fa-bars-staggered" onClick={() => setNav(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
            {
                nav &&
                <div className='menu-area'>
                    <div className='row g-0'>
                        <div className='col-md-6'>
                            <div className='menu-box'>

                            </div>
                        </div>
                        <div className='col-md-6 text-end'>
                            <i class="fa-solid fa-xmark" onClick={() => setNav(false)}></i>
                            <div className='menu-box'>
                            <Link to="/contact"><Button variant="outline-dark" className="book-btn">MAKE A BOOKING</Button></Link>
                                <ul>
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/about">ABOUT</Link></li>
                                    <li><Link to="/contact">CONTACT</Link></li>
                                </ul>
                                <p className='line'></p>
                                <ul>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                    <li>lorem ipsum</li>
                                </ul>
                                <p className='line'></p>
                                <ul>
                                    <li><i class="fa-brands fa-facebook"></i>facebook</li>
                                    <li><i class="fa-brands fa-instagram"></i>instagram</li>
                                    <li><i class="fa-brands fa-twitter" ></i>tweeter</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
