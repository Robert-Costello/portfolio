import React, { Component } from 'react'
import EmailPurple from '../images/EmailPurple.png'
import GithubPurple from '../images/GithubPurple.png'
import LinkedinPurple from '../images/LinkedinPurple.png'

class ExternalLinks extends Component {
  render() {
    return (
      <div>
        <div className="aboutLinks">
          <a
            href="mailto:robertedwardcostello@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="email" src={EmailPurple} alt=""></img>
          </a>
          <a
            href="https://github.com/Robert-Costello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="github" src={GithubPurple} alt=""></img>
          </a>
          <a
            href="https://www.linkedin.com/in/robertecostello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={LinkedinPurple} alt=""></img>
          </a>
        </div>
      </div>
    )
  }
}

export default ExternalLinks
