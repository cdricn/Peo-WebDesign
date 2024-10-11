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
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<MainPage />}/>
              <Route path='profilepage' element={<ProfilePage/>}/>
            </Route>
          </Routes>
        </Router>
      </div>
      <div className='main-footer'>
        {//<Footer />
        }
      </div>
    </>
  )
}

export default App
