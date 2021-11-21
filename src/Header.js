import React, { useState } from 'react'
import "./Header.css";
import logo from './img/spade_white.png'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {IconButton} from '@material-ui/core'
import OndemandVideoTwoToneIcon from '@material-ui/icons/OndemandVideoTwoTone';

function Header() {

const [active , setActive] = useState(false)


    return (
        <div className="header">
                 <img id="logo" src={logo} alt="logo" ></img>
          <nav>
        <div className="header__icon">
            {active ? (<IconButton onClick={(e)=> setActive(false)}>
                <OndemandVideoTwoToneIcon />
            </IconButton> ) : (
            <IconButton onClick={(e)=> setActive(true)}>
                <OndemandVideoIcon  />
            </IconButton> )}
        </div>
        <div className="header__icon">
            <IconButton>
                <PhotoLibraryIcon />
            </IconButton>
         </div>   
        <div className="header__icon">
            <IconButton>
                <ContactMailIcon />
            </IconButton>
         </div>   
         
          </nav>
        </div>
    )
}

export default Header
