import React from 'react'
import logo from './logo.svg'
import './App.css'
import ExternalLinks from './components.js/ExternalLinks'
import Pitch from './components.js/Pitch'
import Resume from './components.js/Resume'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Robert Costello
          <br />
        </p>
        <Pitch />
        <p>
          Hello, I'm Robert. I am a painter turned full stack engineer.
          <br />
        </p>
      </header>
      <Resume />
      <ExternalLinks />
    </div>
  )
}

export default App
