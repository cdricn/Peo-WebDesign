import MainPage from './webpages/MainPage.tsx'
import Layout from './webpages/Layout.tsx'
import './assets/fonts.css'
import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div id='main-wrapper'>
        <div className='main-content'>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path='/' element={<MainPage />}/>
                {/*<Route path='/sheetpage' element={<SheetPage/>}/>*/}
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
