import React from 'react'
import Header from '../footer/header/Header'
import '../home/Home.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Button from 'react-bootstrap/Button';
import Spec from '../specific/Spec';
import Marquee from 'react-fast-marquee';
import Marguee from '../marquee/Marguee';
import Award from '../award-area/Award';
import Footer from '../footer/Footer';
import About from '../about/About';
import Backpage from '../backpage/Backpage';
import { Link } from 'react-router-dom';

export default function Home() {
    const options = {
        items: 1.7,
        nav: true,
        rewind: true,
        autoplay: false,
        dots: false,
        loop: true,
    };
    return (
        <>
            <Backpage path={"images/home8.jpg"}/>
            <About src={"/images/home4.webp"}/>
            <div className='slide-head'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='slide-head-detail'>
                            <h2>Make Your Home Design Awesome</h2>
                            <p>We play with ideas, we arrange them and then we bring them to life.s</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='slide-head-detail-2'>
                           <Link to="/contact" ><Button className='book-btn' variant="outline-dark slide-head-btn">Book Now</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='slider-area'>
                <OwlCarousel className='owl-theme' {...options} >
                    <div class='item'>
                        <img src='/images/lr8.avif' />
                        <h4>Awesome</h4>
                    </div>
                    <div class='item'>
                        <img src='/images/lr9.avif' />
                        <h4>Awesome</h4>
                    </div>
                </OwlCarousel>
            </div>

            <div className='wall-deco-area'>
                <div className='row g-0'>
                    <div className='col-md-6'>
                        <div className='deco-box-1'>
                            <div className='deco-boc-details'>
                            <h2>Make Your Wall Beautifull</h2>
                            <p>The first stage of our process is to Think.</p>
                           <Link to="/contact" ><Button className='book-btn' variant="outline-dark slide-head-btn">Book Now</Button></Link>

                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='deco-box-2'>
                          <div className='row g-0 row-cols-2 row-cols-sm-3 row-cols-md-3 '>
                            <div className='col'>
                                <div className='deco-img-box'>
                                    <img className='img-fluid' src='/images/deco7.avif'/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='deco-img-box'>
                                    <img className='img-fluid' src='/images/deco2.jpg'/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='deco-img-box'>
                                    <img className='img-fluid' src='/images/deco9.jpg'/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='deco-img-box'>
                                    <img className='img-fluid' src='/images/deco3.webp'/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='deco-img-box'>
                                    <img className='img-fluid' src='/images/deco5.webp'/>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='deco-img-box'>
                                    <img className='img-fluid' src='/images/deco6.jpg'/>
                                </div>
                            </div>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
            <Spec/>
            <Marguee/>
            <Award url={"images/lr4.jpg"} />
        </>
    )
}
