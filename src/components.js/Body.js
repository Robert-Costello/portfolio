import React from 'react'
import Resume from './Resume'
import GithubWhite from '../images/GithubWhite.png'
const MR = require('../images/MR-Screenshot.png')
const MM = require('../images/MM-Screenshot.png')
const SGL = require('../images/SGL.mp4')
const FNav = require('../images/FNav.mp4')
function Body() {
  return (
    <div className="body">
      <div className="project" id="hi">
        <h2>Hi, I'm Robert. I am a full stack software engineer.</h2>
      </div>
      {/* ===================================== */}

      <div className="project">
        <p>Mind Over Matter</p>
        <a href="https://mind-over-matter.herokuapp.com/" target="_blank">
          <img className="project-image" src={MM}></img>
        </a>
        <div className="description">
          <p>
            {' '}
            Mind Over Matter is a mental health analytics platform that tracks
            the user's emotional state throughout the work day.
          </p>
          <a
            href="https://github.com/FullstackHeroes/Mind-Over-Matter
          "
            target="_blank"
          >
            <img id="github" src={GithubWhite} alt=""></img>
          </a>
        </div>
      </div>

      {/* ===================================== */}
      <div className="project">
        <p>Marvels Relics</p>
        <a href="https://marvel-relics.herokuapp.com/" target="_blank">
          <img className="project-image" src={MR}></img>
        </a>
        <div className="description">
          <p>Marvels Relics is a fully functional mock e-commerce website</p>
          <a
            href="https://github.com/RDJGraceShopper/graceshopper"
            target="_blank"
          >
            <img id="github" src={GithubWhite} alt=""></img>
          </a>
        </div>
      </div>

      {/* ===================================== */}
      <div className="project">
        <p>Face Navigator</p>
        <video
          className="project-image"
          src={FNav}
          preload="true"
          loop
          controls
          autoPlay
        ></video>
        <div className="description">
          <p>
            Face Navigator is a fun proof of concept for an application that
            navigates the web using facial expressions.
          </p>
          <a href="https://github.com/Robert-Costello/face-nav" target="_blank">
            <img id="github" src={GithubWhite} alt=""></img>
          </a>
        </div>
      </div>

      {/* ===================================== */}
      <div className="project">
        <p>Snake Game of Life</p>
        <video
          className="project-image"
          src={SGL}
          preload="true"
          loop
          controls
          autoPlay
        ></video>
        <div className="description">
          <p>
            Snake Game of Life is a combination of Conway's Game of Life and the
            classic Snake Game built in p5.js.
          </p>
          <a
            href="https://github.com/Robert-Costello/snake-game-of-life"
            target="_blank"
          >
            <img id="github" src={GithubWhite} alt=""></img>
          </a>
        </div>
      </div>
      {/* ===================================== */}
    </div>
  )
}

export default Body
