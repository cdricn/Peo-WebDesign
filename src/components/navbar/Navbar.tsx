import styles from './Navbar.module.css'
import React, { useState } from "react";
import { FiMenu  } from "react-icons/fi";
import { Link } from "react-router-dom"


function NavBar() {
  const [navColor, setNavColor] = useState(false);
  let navToggle = ""
  let navBlur = ""
  
  const colorToggle = (toggle:boolean) => {
    let clname
    if(toggle) {
      clname = [styles["nav-button"], styles["nav-button-opened"]].join(" ")
      navToggle = styles["nav-container"]
      navBlur = styles["nav-blur"]
    }
    else {
      clname = [styles["nav-button"], styles["nav-button-closed"]].join(" ")
      navToggle = [styles["nav-container"], styles["nav-container-closed"]].join(" ")
      navBlur = styles["nav-blur-closed"]
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
      <div 
        className={navBlur}
        onClick={() => setNavColor(curr => !curr)}>
      </div>
    </>
  );
}

function NavItems(){
  return (
    <>
      <div className={styles["nav-list-wrapper"]}>
        <ul className={styles["nav-list"]}>
          <Link to="/">
            <li> HOME </li>
          </Link>
          <Link to="/profilepage">
            <li> PROFILE </li>
          </Link>
          <Link to="/activitypage">
            <li> ACTIVITY </li>
          </Link>
          <Link to="/contactpage">
            <li> CONTACT </li>
          </Link>
        </ul>
      </div>
    </>
  );
}

export default NavBar