import React, { useEffect, useState } from 'react'
import './Header.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Canva from '../offCanva/Canva';

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
                            <h2 className='logo'><Link to="/"><img className='img-fluid home-logo' src='/images/Home-Logo.png' /></Link></h2>
                        </div>
                    </div>
                    <div className='col-md-6 col-6'>
                        <div className='header-box-2'>
                            <ul>
                                <li><Link to="/">HOME</Link></li>
                                <li><Link to="/about">ABOUT</Link></li>
                                <li><Link to="/contact">CONTACT</Link></li>
                            </ul>
                            {/* <i class="fa-solid fa-bars-staggered" onClick={() => setNav(true)}></i> */}
                            {['end'].map((end, idx) => (
                                <Canva key={idx} placement={end}  />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
