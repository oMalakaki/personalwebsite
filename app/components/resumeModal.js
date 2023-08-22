"use client";
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

export default function ResumeModal() {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    };
    
    const openModal = () => {
        setModalVisible(true);
    };
    
    return (
        <>
        <div id="openModalBtn" onClick={openModal}></div>
        {modalVisible && (
            <div className='modal-background'>
                <div id="closeModalBtn" onClick={closeModal}>
                    Close
                </div>
  
                <div className="pdf-container">
                    <object data="/Alex Canfield Resume-9.pdf" type="application/pdf" width="100%" height="100%">
        <p>Your browser does not support PDFs. <a href="your-pdf-file.pdf">Download the PDF</a> instead.</p>
      </object>
                </div>
            </div>
        )}
        </>
    );
}
