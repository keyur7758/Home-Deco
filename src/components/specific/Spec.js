import React from 'react'
import '../specific/Spec.css'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Spec() {
    return (
        <>
            <div className='spec-area'>
                <div className='row g-0 row-cols-2'>
                    <div className='col'>
                        <div className='spec-box'>
                            <img className='img-fluid' src='/images/lr4.jpg' />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='spec-box-heading'>
                            <div className='spec-detail'>
                            <h6>EXCLUSIVE CLOTHES FOR</h6>
                            <h1>Living Room</h1>
                            <p className='spec-line'></p>
                            <p className='spec-para'>We’ve created the coziest online furniture store. If you are <br/>looking for a single item or are planning to furnish a..</p>
                         <Link to="/contact"><Button className="spec-btn" variant="outline-dark">BOOK NOW</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='spec-box-heading'>
                            <div className='spec-detail'>
                            <h6>SUMMER STYLE FOR</h6>
                            <h1>Bedroom</h1>
                            <p className='spec-line'></p>
                            <p className='spec-para'>We’ve created the coziest online furniture store. If you are <br/>looking for a single item or are planning to furnish a..</p>
                            <Link to="/contact"><Button className="spec-btn" variant="outline-dark">BOOK NOW</Button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='spec-box'>
                            <img className='img-fluid' src='/images/lr5.jpg' />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='spec-box'>
                            <img className='img-fluid' src='/images/l7.jpg' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='spec-box-heading'>
                            <div className='spec-detail'>
                            <h6>FUN & ADVENTURE FOR</h6>
                            <h1>Bathroom</h1>
                            <p className='spec-line'></p>
                            <p className='spec-para'>We’ve created the coziest online furniture store. If you are <br/>looking for a single item or are planning to furnish a..</p>
                            <Link to="/contact"><Button className="spec-btn" variant="outline-dark">BOOK NOW</Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
