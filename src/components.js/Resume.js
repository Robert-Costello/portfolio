import React, { Component } from 'react'
import RobertCostelloResume from '../images/RobertCostelloResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

class Resume extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numPages: null,
      pageNumber: 1,
      width: 0,
      height: 0,
    }
    this.updateWindowDims = this.updateWindowDims.bind(this)
  }

  componentDidMount() {
    this.updateWindowDims()
    window.addEventListener('resize', this.updateWindowDims)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDims)
  }

  updateWindowDims() {
    if (window.innerHeight < 600) {
      this.setState({ height: 500 })
    } else {
      this.setState({ width: window.innerWidth, height: window.innerHeight })
    }
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
          <Page
            // style={{ width: '100vw' }}
            id="page"
            renderMode="canvas"
            pageNumber={pageNumber}
            height={this.state.height * 0.8}
          />
          <a
            href={RobertCostelloResume}
            download="RobertCostelloResume.pdf"
            className="buttonResumeDownload"
          >
            <button style={{ margin: 0 }}>DOWNLOAD</button>
          </a>
        </Document>
      </div>
    )
  }
}

export default Resume
