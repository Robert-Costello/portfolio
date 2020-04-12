import React from 'react'
import { NavLink } from 'react-router-dom'
import portfolioImage from '../images/portfolioImage.png'
import Modal from './Modal'
import LinkedinWhite from '../images/LinkedinWhite.png'
import GithubWhite from '../images/GithubWhite.png'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <p>
          Robert Costello
          <br />
        </p>
        <img id="portfolioImage" src={portfolioImage} alt="" />

        <div className="headerLinks">
          <a
            id="nav-icon"
            href="https://github.com/Robert-Costello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="github" src={GithubWhite} alt=""></img>
          </a>

          <a
            id="nav-icon"
            href="https://www.linkedin.com/in/robertecostello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={LinkedinWhite} alt=""></img>
          </a>
          <Modal />
        </div>
      </div>
    </div>
  )
}

export default Navbar
