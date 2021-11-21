import React from 'react'
import './Particle.css'
import Particles from 'react-particles-js';
import logo from './img/spade.svg';



class Particle extends React.Component{

    render(){
        return (
			<div className="p">
            <Particles
    params={{
	    "fps_limit": 28,
	    "particles": {
	        "collisions": {
	            "enable": true
	        },
	        "number": {
	            "value": 210,
	            "density": {
	                "enable": false
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "distance": 90,
	            "opacity": 0.4
	        },
	        "move": {
	            "speed": 1
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "opacity_min": 0.05,
	                "speed": 1,
	                "sync": false
	            },
	            "value": 0.4
	        }
	    },
	    "polygon": {
	        "enable": true,
	        "scale": 0.8,
	        "type": "inline",
	        "move": {
	            "radius": 300
	        },
	        "url": logo,
	        "inline": {
	            "arrangement": "equidistant"
	        },
	        "draw": {
	            "enable": true,
	            "stroke": {
	                "color": "rgba(255, 255, 255, .2)"
	            }
	        }
	    },
	    "retina_detect": false,
	    "interactivity": {
	        "events": {
	            
                "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
                "onclick": {
	                "enable": true,
	                "mode": "repulse"
                },
	        },
	        "modes": {
	            "bubble": {
	                "size": 45,
	                "distance": 40
                },
                "repulse": {
                    "distance": 100,
                    "duration": 1
                  }
	        }
	    }
	}} /></div>
        );
    };
 
}


export default Particle
