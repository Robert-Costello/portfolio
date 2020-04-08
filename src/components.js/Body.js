import React from 'react'
import Resume from './Resume'
const MR = require('../images/MR-Screenshot.png')
const MM = require('../images/MM-Screenshot.png')
function Body() {
  return (
    <div className="body">
      <div>
        <h2>Hi, I'm Robert. I am a full stack software engineer.</h2>
      </div>
      <div>
        <img className="project-image" src={MM}></img>
      </div>
      <div>
        <img className="project-image" src={MR}></img>
      </div>
    </div>
  )
}

export default Body
