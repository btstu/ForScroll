import React , { useRef, useEffect, useState} from 'react'
import video1 from './img/jspin_glow.mp4'
import video2 from './img/web_prev.mp4'
import "./IntroVid.css"

import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Typpe from "./Typpe"

function IntroVid() {
    const vidd = useRef()
    const btn = useRef()
    const btnwrap = useRef()
    let roundvid = useRef(null)
    let roundvid2 = useRef(null)
 
    const [isShown, setIsShown] = useState(false);
    

    
    
    useEffect(() => { 
   
    const tl = gsap.timeline({defaults:{ease: 'power3.easeout'}});
    
        setTimeout(()=>{   

            tl.fromTo('.vid1', {opacity:0, x:"-50%"},{opacity:1, x:"-5%",duration: 2.5, delay:1.5})
        },500)

    tl.from('.hover-this', {opacity:0},{opacity:1, duration: 5.3, delay:1.5})


    },[])
        
let mouse = (e) => {

    if (isShown){
        e.stopPropagation();
        
        const tl = gsap.timeline({defaults:{ease: 'power3.easeout'}});
tl.fromTo('.roundvid2', {opacity:.5, boxShadow: "0px 0px 0px 0 rgba(255, 0, 0, 0.952), 0px 0px 0px 0 rgba(245, 100, 100, 0.952)"   },{opacity:1 ,boxShadow: "2px 2px 6px 0 rgba(255, 0, 0, 0.952), -2px -2px 6px 0 rgba(245, 100, 100, 0.952)",duration: .5})
        tl.fromTo('.roundvid', {opacity:.5,  scale:1},{opacity:1 ,duration: 4})
        

   roundvid.current.setAttribute("style", "top:" + (e.pageY - 160) + "px; left:" + (e.pageX - 190) + "px;")
   roundvid2.current.setAttribute("style", "top:" + (e.pageY - 160) + "px; left:" + (e.pageX - 190) + "px;")
 
    }  
    }

  

    return (
    <div className="introvid"   >
            <div className="introtxt">
                {isShown && (

                <> 
                <div className= "roundvid" ref={roundvid}>
                   
                        <video muted autoPlay={true} className= "viddd" loop    >
                             <source src={video2} />
                        </video> 

                    </div>
                    <div className= "roundvid2" ref={roundvid2}>
                </div>
                </>
       
            
                 )}
        <div className="div">
              <Typpe /></div>
                <div className="btnwrap" ref ={btnwrap}  >
                    <div className="btns"  >
                        <Link to='/about' className="hover-this"> <div onMouseMove={mouse}  onMouseEnter={() => setIsShown(true)}
                                onMouseOut={() => setIsShown(false)} className="likea" ref={btn}> Infos</div>
                        </Link>
                        <Link to='/work' className="hover-this"><div onMouseMove={mouse}  onMouseEnter={() => setIsShown(true)}
                                onMouseOut={() => setIsShown(false)}  className="likea" ref={btn}>Work</div>
                        </Link>
                  
                    </div>
                 </div>
        
                

     </div>
            <div className="vid1" >
                
            <video autoPlay={true} muted ref={vidd} width="800" height="600" loop  type="video/mp4">
                <source  src={video1} ></source>
                </video>
            </div>
        </div>
    )
}

export default IntroVid
