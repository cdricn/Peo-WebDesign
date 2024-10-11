import styles from './Navbar.module.css'
import React, { useState } from "react";
import { FiMenu  } from "react-icons/fi";
import { Link } from "react-router-dom"


function NavBar() {
  const [navColor, setNavColor] = useState(false);
  let navToggle = ""
  
  const colorToggle = (toggle:boolean) => {
    let clname
    if(toggle) {
      clname = [styles["nav-button"], styles["nav-button-opened"]].join(" ")
      navToggle = styles["nav-container"]
    }
    else {
      clname = [styles["nav-button"], styles["nav-button-closed"]].join(" ")
      navToggle = [styles["nav-container"], styles["nav-container-closed"]].join(" ")
    }

    console.log(navColor)
    return clname
  }

  return (
    <>
      <div 
        className={colorToggle(navColor)} 
        onClick={() => setNavColor(curr => !curr)}>
        <FiMenu />
      </div>
      <div className={navToggle}>
        <NavItems />
      </div>
    </>
  );
}

function NavItems(){
  return (
    <>
      <div className={styles["nav-list-wrapper"]}>
        <ul className={styles["nav-list"]}>
          <li>
            HOME
          </li>
          <li>
            PROFILE
          </li>
          <li>
            ACTIVITY
          </li>
          <li>
            CONTACT
          </li>
        </ul>
      </div>
    </>
  );
}

export default NavBar