import React, { Component } from 'react'
import RobertCostelloResume from '../images/RobertCostelloResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class Resume extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages })
  }
  render() {
    const { pageNumber } = this.state
    return (
      <div id="resume">
        <Document
          file={RobertCostelloResume}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page id="page" renderMode="canvas" pageNumber={pageNumber} />
          <a
            href={RobertCostelloResume}
            download="RobertCostelloResume.pdf"
            className="buttonResumeDownload"
          >
            <button>DOWNLOAD</button>
          </a>
        </Document>
      </div>
    )
  }
}

export default Resume
