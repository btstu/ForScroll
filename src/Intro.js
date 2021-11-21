import React, { useEffect } from 'react'
import './Intro.css'
import gsap from 'gsap';



function Intro() {
   

    useEffect(() => {
        const tl = gsap.timeline({defaults:{ease: 'power1.out'}});
       


        tl.to('.text', { y: "0%", duration: 1 , stagger: 0.25, opacity:1 });
   
        tl.to('.slider', { y: "-100%", duration: 1.5, delay: 0.5});
        tl.to('.intro', { y: "-100%", duration: 1},"-=1.33");
        tl.fromTo('.header__icon', {opacity:0, x:"-50%"},{opacity:1, x:"0%",duration: 1, stagger: 0.25})
        


    })
    

    return (
        <div className="intro">
        <div className="intro__text">
          <h1 className="hide">
            <span className="text">Creativity</span>
          </h1>
          <h1 className="hide">
            <span className="text">starts</span>
          </h1>
          <h1 className="hide">
            <span className="text green2">here.</span>
          </h1>
        </div>
        <div className="slider"></div>
      </div>
    )
}

export default Intro
