import styles from './Navbar.module.css'
import React, { useState } from "react";
import { FiMenu  } from "react-icons/fi";
import { Link } from "react-router-dom"


function NavBar() {
  const [navColor, setNavColor] = useState(false);
  let navToggle = false
  
  const colorToggle = (toggle:boolean) => {
    let clname
    if(toggle) {
      clname = [styles["nav-button"], styles["nav-button-opened"]].join(" ")
      navToggle = toggle
    }
    else {
      clname = [styles["nav-button"], styles["nav-button-closed"]].join(" ")
      navToggle = toggle
    }

    console.log(navColor)
    return clname
  }

  return (
    <>
      <div 
        id="navButton" 
        className={colorToggle(navColor)} 
        onClick={() => setNavColor(curr => !curr)}>
        <FiMenu />
      </div>
      <div className={navToggle ? styles["nav-container"] : styles["nav-container-closed"]}>
        <NavItems />
      </div>
      <div className='nav-footer'>
      </div>
    </>
  );
}

function NavItems(){
  return (
    <>
      <div className={styles["nav-list"]}>
        <ul className={styles["nav-items"]}>
          <li>
            HOME <br/>
          </li>
          <li>
            PROFILE
            <span></span>
          </li>
          <li>
            ACTIVITY
            <span></span>
          </li>
          <li>
            CONTACT
            <span></span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar