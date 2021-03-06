import React from 'react'
import GithubWhite from '../images/GithubWhite.png'
const MR = require('../images/MR-Screenshot.png')
const MM = require('../images/MM-Screenshot.png')
const SGL = require('../images/SGL.mp4')
const FNav = require('../images/FNav.mp4')
function Body() {
  return (
    <div className="body">
      <div id="hi">
        <p>
          Hi, I'm Robert.
          <br />
          I'm a full stack software engineer.
        </p>
      </div>
      {/* ===================================== */}

      <div className="project">
        <a
          href="https://mind-over-matter.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Mind Over Matter</p>
          {/* </a>

        <a href="https://mind-over-matter.herokuapp.com/" target="_blank"> */}
          <img className="project-image" src={MM} alt=""></img>
        </a>

        <div className="description">
          <h3>
            {' '}
            Mind Over Matter is a mental health analytics platform that uses
            facial recognition software to track the user's emotional state
            throughout the work day.
            <br />
            <br />
            Built with React, Redux, Express, Passport, PostgreSQL, Face-api.js,
            Chart.js and D3.js
          </h3>
        </div>
        <a
          href="https://github.com/FullstackHeroes/Mind-Over-Matter
          "
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github-body" src={GithubWhite} alt=""></img>
        </a>
      </div>

      {/* ===================================== */}
      <div className="project">
        <a
          href="https://marvel-relics.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Marvels Relics</p>
          {/* </a>
        <a href="https://marvel-relics.herokuapp.com/" target="_blank"> */}
          <img className="project-image" src={MR} alt=""></img>
        </a>
        <div className="description">
          <h3>
            Marvels Relics is a fully functional mock e-commerce website
            <br />
            <br />
            Built with React, Redux, Express, Passport and PostgreSQL
          </h3>
        </div>
        <a
          href="https://github.com/RDJGraceShopper/graceshopper"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github-body" src={GithubWhite} alt=""></img>
        </a>
      </div>

      {/* ===================================== */}
      <div className="project">
        <a
          href="https://face-nav.firebaseapp.com/camera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Face Navigator</p>
          <video
            className="project-image"
            src={FNav}
            preload="true"
            loop
            controls
            autoPlay
          ></video>
        </a>
        <div className="description">
          <h3>
            Face Navigator is a fun proof of concept for an application that
            navigates the web using facial expressions.
            <br />
            <br />
            Built with React and Face-api.js
          </h3>
        </div>
        <a
          href="https://github.com/Robert-Costello/face-nav"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github-body" src={GithubWhite} alt=""></img>
        </a>
      </div>

      {/* ===================================== */}
      <div className="project">
        <a
          href="https://snake-game-of-life.firebaseapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>Snake Game of Life</p>
          <video
            className="project-image"
            src={SGL}
            preload="true"
            loop
            controls
            autoPlay
          ></video>
        </a>
        <div className="description">
          <h3>
            Snake Game of Life is a combination of Conway's Game of Life and the
            classic Snake Game
            <br />
            <br />
            Built with React and P5.js
          </h3>
        </div>
        <a
          href="https://github.com/Robert-Costello/snake-game-of-life"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="github-body" src={GithubWhite} alt=""></img>
        </a>
      </div>
      {/* ===================================== */}
    </div>
  )
}

export default Body
