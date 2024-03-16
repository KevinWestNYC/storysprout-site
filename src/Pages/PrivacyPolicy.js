import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import "react-pdf/dist/esm/Page/TextLayer.css"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"

// Set the workerSrc to load PDF.js worker from CDN
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PrivacyPolicy = () => {
  // Direct URL to PDF file placed in the public folder
  const PrivacyPolicyPDF = process.env.PUBLIC_URL + '/assets/PrivacyPolicyStorySprouts.pdf';

  return (
    <div style={{display:'flex', justifyContent:'center'}}>
      <Document
        file={PrivacyPolicyPDF}
        onLoadError={(error) => console.error('Failed to load PDF file:', error)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PrivacyPolicy;