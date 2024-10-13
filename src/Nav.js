import React, { useEffect,useState } from 'react';
import nav from './nav.css';

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        })
        return ()=>{
            window.removeEventListener("scroll",null)
        }
    },[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
    <img 
    className='nav_logo'
    src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
    alt="Netflix Logo"
    ></img>
    <img 
    className='nav_avatar'
    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
    alt="Netflix Avatar"
    ></img> 
    </div>
  )
}

export default Nav
