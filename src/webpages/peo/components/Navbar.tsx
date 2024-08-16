import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <>
      <div className='peo-navbar'>
        <div>
          <ul className='peo-navbar-items font-antipastoB'>
            <li>
              <Link to='/' className='peo-navbar-title deco-none'>
                <div className='peo-navbar-item'>
                  HOME
                </div>
              </Link>
            </li>
            <li>
              <Link to='/profilepage' className='peo-navbar-title deco-none'>
                <div className='peo-navbar-item'>
                  PROFILE
                </div>
              </Link>
            </li>
            <li>
              <Link to='/contactpage' className='peo-navbar-title deco-none'>
                <div className='peo-navbar-item'>
                  CONTACT
                </div>
              </Link> 
            </li>   
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar