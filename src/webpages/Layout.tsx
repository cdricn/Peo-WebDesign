import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import './Layout.css'

function Layout() {
  return (
    <>
      <Navbar />
      <div id='main-wrapper'>
        <main>
          <Outlet />
        </main>
        <div className='main-footer'>
        </div>
      </div>
    </>
  );
}

export default Layout