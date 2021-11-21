
import React,{ useEffect, useState } from 'react'
import './Landing.css'
import Particle from './Particle'
import gsap from 'gsap';
import Typical from 'react-typical'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Landing() {



    useEffect(() => {
        const tl = gsap.timeline({defaults:{ease:'power1.easeOut'}});

        tl.fromTo('.landing__box', {opacity:0, x:"0%"},{opacity:1, x:"30%",duration: 2, stagger: 0.25})
        tl.fromTo(['.black','.black2'], {opacity:1, x:"100%",width:"0px"},{opacity:1, x:"0%",width:"600px", duration: 2.3, stagger: 0.5})
       
        tl.fromTo('.maintext', {opacity:0},{opacity:1,  duration: 1.4})



        let tl2 = gsap.timeline({
            // yes, we can add it to an entire timeline!
            scrollTrigger: {
              trigger: ".landing__box",
              pin: true,   // pin the trigger element while active
              start: "top top", // when the top of the trigger hits the top of the viewport
              end: "+=60", // end after scrolling 500px beyond the start
              scrub: 2, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
              snap: {
                snapTo: "labels", // snap to the closest label in the timeline
                duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.5, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
              }
            }
          },);
        
        // add animations and labels to the timeline
        tl2.addLabel("start")
          .from([".type", ".black", ".black2"],{y: "30%"})
          .addLabel("color")
          .from([".type", ".black", ".black2"], {blackgroundColor: "red"})
          .addLabel("spin")
          .to(".type", {opacity :0 })
          .addLabel("end");
    })
 
    return (
        <div className="landing">
            <div className="landing__1">
             <div className="landing__box"  >
                <Particle />
             </div>
            <div className="top">
             <div className="type" >
                    <h2> Hello, my name is <div className="jim">Jim Benitah
                        </div> and i'm a{' '} 
                     </h2> 
            <h1 className="green">
                <Typical
                loop = {Infinity}
                wrapper= "b"
                steps={[
                'Developer_',4500,
                'Designer_',1500,
                'Animator_',1000,        
                'Foodie_',     
                'Pixel_Pusher_',1000,  
                'Magician_',1000,
                '3D_animator_',900,
                'Content_Creator_',900,
                'Sith_Lord_',700,
                'Lamp_']
                }/>
            </h1>
            </div>
            <div className="black">
           

                 <div className="maintext"><p>Conceive and produce visual and narrative solutions adapted to the needs of the final users, while respecting stakeholder’s vision and commercial aim.</p><br></br><p>
                Solving problems with ideas, symbols and images. It is about fulfilling the demand by orienting the need analysis through dialogue. The creative process being consolidated with knowledge of interactive best practices and up-to-date understanding of technology.
                </p>
                </div>   
            </div>  
                    <div className="black2" ></div>
          </div>
          </div>
          <div className="landing__2">


          </div>
        </div>
    )
}

export default Landing
