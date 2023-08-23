"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

export default function ResumeModal() {
  const [modalVisible, setModalVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
 
    return () => {
 
      window.removeEventListener("resize", handleResize);
        
    };
}};
  }, []);

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
        <Document file="/Alex Canfield Resume-9.pdf">
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
            {windowWidth >= 700 ? (
              <object
                data="/Alex Canfield Resume-9.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Your browser does not support PDFs.{" "}
                  <a href="/Alex Canfield Resume-9.pdf">Download the PDF</a> instead.
                </p>
              </object>
            ) : (
                <Document file="/Alex Canfield Resume-9.pdf">
                <Page 
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  scale={windowWidth / 700}
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
