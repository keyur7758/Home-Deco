import React from 'react'
import '../about/About.css'
import About from './About'
import Header from '../header/Header'
import Marguee from '../marquee/Marguee'
import Award from '../award-area/Award'
import Backpage from '../backpage/Backpage'

export default function Aboutmain() {
  return (
   <>
         <Backpage path={"images/l7.jpg"}/>
        <About src={"/images/team.jpg"}/>
        <Award url={"images/l7.jpg"}/>
        <Marguee/>
   </>
  )
}
