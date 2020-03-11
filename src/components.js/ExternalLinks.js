import React, { Component } from 'react'
// import EmailTeal from '../images/EmailTeal.png'
import GithubTeal from '../images/GithubTeal.png'
import LinkedinTeal from '../images/LinkedinTeal.png'

class ExternalLinks extends Component {
  render() {
    return (
      <div>
        <div className="aboutLinks">
          {/* <a
            href="mailto:robertedwardcostello@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="email" src={EmailTeal} alt=""></img>
          </a> */}
          <a
            href="https://github.com/Robert-Costello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="github" src={GithubTeal} alt=""></img>
          </a>
          <a
            href="https://www.linkedin.com/in/robertecostello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="linkedin" src={LinkedinTeal} alt=""></img>
          </a>
        </div>
      </div>
    )
  }
}

export default ExternalLinks
