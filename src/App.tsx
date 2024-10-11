import MainPage from './webpages/MainPage.tsx'
import ProfilePage from './webpages/ProfilePage.tsx'
import Layout from './webpages/Layout.tsx'
import './assets/fonts.css'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='main-wrapper'>
        <div className='wrapper'>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<ProfilePage />}/>
                <Route path='profilepage' element={<ProfilePage />}/>
              </Route>
            </Routes>
          </Router>
        </div>
        <div className='main-footer'>
          {//<Footer />
          }
        </div>
      </div>
    </>
  )
}

export default App
