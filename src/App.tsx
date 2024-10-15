import MainPage from './webpages/MainPage.tsx'
import ProfilePage from './webpages/ProfilePage.tsx'
import ActivityPage from './webpages/ActivityPage.tsx'
import ContactPage from './webpages/ContactPage.tsx'
import Layout from './webpages/Layout.tsx'
import './assets/fonts.css'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='main-wrapper'>
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<MainPage />}/>
              <Route path='/profilepage' element={<ProfilePage/>}/>
              <Route path='/activitypage' element={<ActivityPage/>}/>
              <Route path='/contactpage' element={<ContactPage/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
      <div className='main-footer'>
        <div className='footer-bar'></div>
      </div>
    </>
  )
}

export default App
