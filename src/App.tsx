import { useState } from 'react'
import './assets/fonts.css'
import Container from './assets/components/Container.tsx'
import Footer from './assets/components/Footer.tsx'
import './App.css'

function App() {

  return (
    <>
      <div>
        <div>bg image</div>
        <div>
          <Container />
        </div>

        <div>
          <Container />
        </div>

        <div>
          <Container />
        </div>

        <div>footer, sticky
          <Footer />
        </div>

      </div>
    </>
  )
}

export default App
