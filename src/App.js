import React from 'react'
// import logo from './logo.svg'
import './App.css'
import Navbar from './components.js/Navbar'
import Routes from './components.js/Routes'
import ExternalLinks from './components.js/ExternalLinks'
import Body from './components.js/Body'
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="body">
        <Body />
        <Routes />
      </div>
      <ExternalLinks />
    </div>
  )
}

export default App
