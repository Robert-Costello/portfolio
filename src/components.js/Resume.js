import React, { Component } from 'react'
import RobertCostelloResume from '../images/RobertCostelloResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        RESUME
        <Document file={RobertCostelloResume} />
        {/* <a href="/images/RobertCostelloResume.pdf">
        Resume
          <img
            src="https://docs.google.com/document/d/1QutlWLfySCrGfZTknp9EUaqSsZkVTrGZttnHTYCvvwE/edit?usp=sharing"
            alt=""
            download="RobertCostelloResume.pdf"
          />
        </a> */}
      </div>
    )
  }
}

export default Resume
