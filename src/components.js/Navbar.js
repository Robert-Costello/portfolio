import React from 'react'
import { NavLink } from 'react-router-dom'
import portfolioImage from '../images/portfolioImage.png'

import LinkedinWhite from '../images/LinkedinWhite.png'
import GithubWhite from '../images/GithubWhite.png'
const Navbar = () => {
  return (
    <div>
      <header className="App-header">
        <p>
          Robert Costello
          <br />
        </p>
        <img id="portfolioImage" src={portfolioImage} alt="" />
        <p>
          Hello, I'm Robert. I am a full stack engineer.
          <br />
        </p>
        <div className="headerLinks">
          {/* <NavLink className="headerLink" to="/resume">
            Resume
          </NavLink> */}
          <a
            href="https://github.com/Robert-Costello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="github" src={GithubWhite} alt=""></img>
          </a>
          <a
            href="https://www.linkedin.com/in/robertecostello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={LinkedinWhite} alt=""></img>
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
