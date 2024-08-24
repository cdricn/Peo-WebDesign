import MainPage from './webpages/MainPage.tsx'
import ProfilePage from './webpages/ProfilePage.tsx'
import ContactPage from './webpages/ContactPage.tsx'
import SheetPage from './webpages/SheetPage.tsx'
import Layout from './webpages/Layout.tsx'
import Footer from './components/Footer.tsx'
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
                <Route path='/sheetpage' element={<SheetPage/>}/>
              </Route>
            </Routes>
          </Router>
        </div>
        <div className='peo-main-footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
