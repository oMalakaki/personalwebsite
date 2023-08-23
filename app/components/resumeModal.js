"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useWindowSize } from "rooks";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function ResumeModal() {
    const { innerWidth } = useWindowSize();
  const [modalVisible, setModalVisible] = useState(false);




  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      <div id="openModalBtn" onClick={openModal}>
        <p>View PDF</p>
        <Document file="/AlexCanfieldResume.pdf">
          <Page 
            renderAnnotationLayer={false}
            renderTextLayer={false}
            scale={0.3}
            pageNumber={1}
          />
        </Document>
      </div>

      {modalVisible && (
        <div className="modal-background">
          <div id="closeModalBtn" onClick={closeModal} />

          <div className="pdf-container">
            {innerWidth >= 700 ? (
              <object
                data="/AlexCanfieldResume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Your browser does not support PDFs.{" "}
                  <a href="/AlexCanfieldResume.pdf">Download the PDF</a> instead.
                </p>
              </object>
            ) : (
                <Document file="/AlexCanfieldResume.pdf">
                <Page 
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  scale={innerWidth / 700}
                  pageNumber={1}
                />
              </Document>
            )}
          </div>
        </div>
      )}
    </>
  );
}
