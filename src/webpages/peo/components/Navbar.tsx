import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='peo-navbar'>
        <div>
          <ul className='peo-navbar-items font-antipastoB'>
            <li className='peo-navbar-item'>
              <Link to='/' className='peo-navbar-title deco-none'>
                HOME
              </Link>
            </li>
            <li className='peo-navbar-item'>
              <Link to='/profilepage' className='peo-navbar-title deco-none'>
                PROFILE
              </Link>
            </li>
            <li className='peo-navbar-item'>
              <Link to='' className='peo-navbar-title deco-none'>
                CONTACT
              </Link> 
            </li>   
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar