import './Header.css'
import logo from '../ecomlogo.png'

function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-items'>
          <div className='header-logo'>
            <img src={logo}></img>
          </div>
          <div className='header-searchbar'>searchbar</div>
          <div>Account</div>
          <div>Cart</div>
        </div>
      </div>
    </>
  );
}

export default Header