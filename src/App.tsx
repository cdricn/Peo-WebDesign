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
    </>
  )
}

export default App
