import React from 'react'
import Marquee from "react-fast-marquee";
import '../marquee/Marquee.css'

export default function Marguee() {
    return (
        <>
            <div className='mark-area'>
                <div className='container'>
        <h2>Top Brands</h2>

                    <Marquee >
                        <div className='mark-img'>
                            <img src='/images/brend-1.webp' />
                        </div>
                        <div className='mark-img'>
                            <img src='/images/brend-2.webp' />
                        </div>
                        <div className='mark-img'>
                            <img src='/images/brend-3.webp' />
                        </div>
                        <div className='mark-img'>
                            <img src='/images/brend-4.webp' />
                        </div>
                        <div className='mark-img'>
                            <img src='/images/brend-5.webp' />
                        </div>
                        <div className='mark-img'>
                            <img src='/images/brend-3.webp' />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}
