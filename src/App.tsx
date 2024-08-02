import { useState } from 'react'
import './assets/fonts.css'
import headerimg from './assets/headerimg.png'
import Header from './assets/components/Header.tsx'
import Container from './assets/components/Container.tsx'
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
            <div className='group-container'>
              <h2>Categories</h2>
            </div>
          </div>
          <div>
            <div className='group-container'>
              <h2>Top Deals</h2>
              <Container />
            </div>
          </div>
          <div>
            <div className='group-container'>
              <h2>Recommended for you</h2>
              <Container />
            </div>
          </div>
          <div>
            <div className='group-container'>
              <h2>Recommended for you</h2>
              <Container />
            </div>
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
