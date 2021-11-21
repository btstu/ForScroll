import React , { useRef, useEffect} from 'react'
import './App.css';
import Header from './Header';
import Intro from './Intro';
import Landing from './Landing.js';
// import VideoScroll from './VideoScroll.js'
//import Threee from './Threee'
import IntroVid from './IntroVid'
import ScrollVid from './ScrollVid'

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  const cursor = useRef(null);
  const cursor2 = useRef(null);

useEffect(() => { 

 document.addEventListener("mousemove", e => {
  //  console.log(e.pageY)
      cursor.current.setAttribute("style", "top:" + (e.pageY - 10) + "px; left:" + (e.pageX - 10) + "px;")
      cursor2.current.setAttribute("style", "top:" + (e.pageY - 11.559 ) + "px; left:" + (e.pageX - 11.54) + "px;")
  })
})
  useEffect(() => { 
  document.addEventListener("click", ()=> {
    cursor.current.classList.add("expand");
    cursor2.current.classList.add("expand2")

    setTimeout(()=>{
      cursor.current.classList.remove("expand");
      cursor2.current.classList.remove("expand2")
    },500)
  }, )


  })
  
  return (
    <BrowserRouter>
<>   
<div className="cursor" ref={cursor} ></div>   
<div className="cursor2" ref={cursor2} ></div>   
        <Header />   
        {/* <Intro className="intro" /> */}
       <Landing /> 
  {/* <VideoScroll />  */}
       {/* <IntroVid />  */}
  <ScrollVid /> 
        {/* <Threee />*/}
</>
      
       <Switch>
          {/* <Route path="/" exact component={Home}/> */}
            <Route path="/artistes" component={"Artistes"}/>
            <Route path="/galerie" component={"Galerie"}/>
            <Route path="/contact" component={"Contact"}/>
            {/* <Route component={PageNotFound}/> */}
         
            
        </Switch>
       

      {/* <Footer/> */ }
    </BrowserRouter>
  );
}

export default App;
