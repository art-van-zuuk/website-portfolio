import React, {useState} from 'react'
import './NavBar.css'

const NavBar = () => {

    // Change nav color when scrolling
    const[color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 5){
            setColor(true)
        } else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)

    return(
        <nav className = {color ? 'nav-bg' : null}>
            <img className= 'website-logo' alt='' src={ require('../../assets/images/website/website-logo.png') }/>
            <div className= 'navbar-text'>
                <p className= 'navbar-link'>Test</p>
                <p className= 'navbar-link'>Test</p>
            </div>
        </nav>        
    );
}

export default NavBar;