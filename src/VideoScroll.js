import React,   {  useEffect } from 'react'
import './VideoScroll.css'
import  {Controller, Scene} from 'react-scrollmagic';

function VideoScroll() {
    const videoscroll = document.querySelector("videoscroll")  



useEffect(()=>{
    const scene = new Scene({
    
        triggerElement: videoscroll ,
        triggerHook: 0,
    
    })
    
    var scrollpos  = 0
    var video  = document.querySelector("video")

    window.addEventListener("update", e => {
      scrollpos= e.scrollPos / 1000;


  });
  


  video.currentTime = scrollpos

})
    return (

        <>
       <div className="videoscroll">
           <h1>Classic Style with a twist</h1>
           <Controller>
      <Scene  duration = {2000} pin>
       <video src="./img/Glasses_Web2"></video>
      </Scene>
    </Controller>
           

       </div>
       <div className="videoscroll__bottom">
    <h1>Learn More</h1>

</div>
</>
      
    )
}

export default VideoScroll
