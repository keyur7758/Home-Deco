import React from 'react'
import '../award-area/Award.css'

export default function Award(props) {

    return (
        <>
            <div className='award-area'>
                <div className='award-box' style={{backgroundImage:`url(${props.url})`}}>
                    <div className='award-detail'>
                        <div className='award-head'>
                            <h1 className='award-title'>2023</h1>
                            <div className='award-info'>
                                <h2>Prew Awards-Helsinki</h2>
                                <p>More Than 200 satisfied customers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
