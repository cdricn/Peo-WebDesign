import { useState } from 'react'
import './assets/fonts.css'
import headerimg from './assets/headerimg.png'
import Header from './assets/components/Header.tsx'
import Container from './assets/components/Container.tsx'
import Footer from './assets/components/Footer.tsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        {//ternary operator to check min width and switch header to footer
        }<Header />
      </div>

      <div className='wrapper'>
        <div className='ad-images'>
          <img src={headerimg}></img>
        </div>
        
        <div className='group-layout'>
          <div>
            <Container />
          </div>
          <div>
            <Container />
          </div>
          <div>
            <Container />
          </div>
        </div>
      </div>

      <div>
        {//ternary operator to check min width and switch header to footer
        }
      </div>
    </>
  )
}

export default App
