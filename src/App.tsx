import Navbar from './webpages/peo/components/Navbar.tsx'
import MainPage from './webpages/peo/subpages/MainPage.tsx'
import ProfilePage from './webpages/peo/subpages/ProfilePage.tsx'
import LinkGroup from './webpages/peo/components/LinkGroup.tsx'
import Footer from './webpages/peo/components/Footer.tsx'
import './assets/fonts.css'
import './App.css'

function App() {

  return (
    <>
      <div className='main-nav'>
        <Navbar />
      </div>
      <div id='wrapper'>
        <div className='main-content'>
          {
            <MainPage />
            //<ProfilePage />
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
      </div>
    </>
  )
}

export default App
