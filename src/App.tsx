import MainPage from './webpages/peo/subpages/MainPage.tsx'
import ProfilePage from './webpages/peo/subpages/ProfilePage.tsx'
import ContactPage from './webpages/peo/subpages/ContactPage.tsx'
import Footer from './webpages/peo/components/Footer.tsx'
import Layout from './webpages/peo/peoLayout.tsx'
import './assets/fonts.css'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='peo-main-wrapper'>
        <div className='peo-main-content'>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/profilepage' element={<ProfilePage/>}/>
                <Route path='/contactpage' element={<ContactPage/>}/>
              </Route>
            </Routes>
          </Router>
        <div className='peo-main-links'>
        </div>
        </div>
        <div className='peo-main-footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
