import React from 'react'
import Typical from 'react-typical'
import "./Typpe.css"

function Typpe() {
    
    return (
        
        <div className="type" >
        <h2> Hello, my name is {' '} 
            <div className="jim">Jim Benitah
            </div> and i'm a{' '} 
        </h2> 
<h1 className="green">
    <Typical 
    loop = {3}
    wrapper= "b"
    steps={[
    'Developer_',2500,
    'Designer_',1500,
    'Animator_',1000,        
    'Foodie_',     
    'Pixel_Pusher_',1000,  
    'Magician_',1000,
    '3D_animator_',900,
    'Content_Creator',300,
    'Sith_Lord_',700,
    'Lamp_']
    }/>
</h1>
</div>
    )
}

export default Typpe
