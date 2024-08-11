import { useState } from 'react'
import Navbar from './assets/components/Navbar.tsx'
import ProfilePage from './assets/components/ProfilePage.tsx'
import LinkGroup from './assets/components/LinkGroup.tsx'
import Footer from './assets/components/Footer.tsx'
import './assets/fonts.css'
import './App.css'

function App() {

  return (
    <>
      <div className='main-nav'>
        <Navbar />
      </div>
      <div className='main-content'>
        {
          //<MainPage />
          <ProfilePage />
          //<ContactPage />
          //<SheetPage />
          //<ToSPage />
        }
      </div>
      <div className='main-links'>
        <LinkGroup />
      </div>
      <div className='main-footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
