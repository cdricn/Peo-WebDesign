import './Header.css'
import logo from '../ecomlogo.png'
import { GoSearch } from "react-icons/go";
import { GoPerson } from "react-icons/go";
import { GoBell } from "react-icons/go";
import { CgShoppingCart } from "react-icons/cg";


function Header() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar-left'>
          <a href='http://localhost:5173/'>
            <img src={logo} className='logo'></img>
          </a>    
        </div>
        <div className='navbar-middle'>
          <form className='navbar-form'>
            <input
              className='input-field'
              type="text"
              placeholder="Search"
            ></input>
            <div className='button-search'>
              <GoSearch />
            </div>
          </form>
        </div>
        <div className='navbar-right'>
          <div className='navbar-icon'>
            <CgShoppingCart />  
          </div>
          <div className='navbar-icon'>
            <GoPerson />
          </div>
          <div className='navbar-icon'>
            <GoBell />
          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='footer-top'>
        <form className='navbar-form'>
          <input
            className='input-field'
            type="text"
            placeholder="Search"
          ></input>
          <div className='button-search'>
            <GoSearch />
          </div>
          </form>
        </div>
        <div className='footer-bottom'>
          <div className='navbar-right'>
            <div className='navbar-icon'>
              B
            </div>
            <div className='navbar-icon'>
              <GoBell />
            </div>
            <div className='navbar-icon'>
              <CgShoppingCart />  
            </div>
            <div className='navbar-icon'>
              <GoPerson />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header