import React, { useRef , useEffect }from 'react'
import Vid from "./img/Glasses_Shot_RnD_h6_2.mp4"
import "./ScrollVid.css"
import { ScrollTrigger, videoCurrentTime, videoDuration  } from "gsap/ScrollTrigger";
import {gsap} from "gsap"





const ScrollVid = () => {
    const viddd = useRef()



    gsap.registerPlugin(ScrollTrigger);

 useEffect(() => {


    const video =  document.querySelector("video");
    let videoDuration;
    video.onloadedmetadata = function() {
      console.log("Loaded");
      videoDuration = this.duration;
    };
    
    function init() {
      const st = ScrollTrigger.create({
        trigger:".intro",
        start:"top top",
        end:"bottom+=2000 top",
        markers:true,
        pin:true,
        scrub: true,
        onUpdate: (self) => {
          console.log(self.progress);
          videoDuration = videoDuration || 10;
          video.currentTime = self.progress * videoDuration ;
        }
      })
      }
    
    window.addEventListener("load", init);
    
  
 }, ) 
    

    return (
            
            <div className="scrollcontainer">
               <div className="intro">
               <video className="video" ref={viddd} type="video/mp4" src={Vid}></video>
        </div>
      </div>)
}

export default ScrollVid
