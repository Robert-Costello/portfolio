import React from 'react'
import Resume from './Resume'
import GithubWhite from '../images/GithubWhite.png'
const MR = require('../images/MR-Screenshot.png')
const MM = require('../images/MM-Screenshot.png')
const SGL = require('../images/SGL.mp4')
function Body() {
  return (
    <div className="body">
      <div className="project">
        <h2>Hi, I'm Robert. I am a full stack software engineer.</h2>
      </div>
      {/* ===================================== */}
      <div className="project">
        <a href="https://mind-over-matter.herokuapp.com/" target="_blank">
          <img className="project-image" src={MM}></img>
        </a>
        <div className="description">
          <p>
            {' '}
            Mind Over Matter
            <br />
            Mental Health Analytics App
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
        <a href="https://marvel-relics.herokuapp.com/" target="_blank">
          <img className="project-image" src={MR}></img>
        </a>
        <div className="description">
          <p>
            Marvels Relics
            <br />
            Fully Functional Mock E-commerce Website
          </p>
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
        <video
          className="project-image"
          src={SGL}
          preload
          loop
          controls
          autoPlay
        ></video>
        <div className="description">
          <p>
            Snake Game of Life
            <br />
            Built in p5.js
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
