import React from 'react';

const resumeUrl = '/src/resume.pdf';

const DownloadSection = () => (
  <section id="download" className="w-full min-h-screen flex flex-col items-center justify-center bg-light px-4 py-20 fade-in-section relative overflow-hidden">
    <h3 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-navy text-center">Download My Resume</h3>
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
      {/* Resume preview on the left */}
      <div className="flex-1 flex items-center justify-center">
        <embed
          src={resumeUrl}
          type="application/pdf"
          className="w-full h-[400px] md:h-[500px] bg-white rounded-xl shadow-md border-2 border-blue max-w-md"
        />
      </div>
      {/* Download button on the right */}
      <div className="flex-1 flex flex-col items-center justify-center mt-8 md:mt-0">
        <a href={resumeUrl} download className="inline-block bg-blue text-white px-10 py-4 rounded-2xl shadow-xl hover:bg-navy transition-all duration-300 text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-blue/40">
          Download PDF
        </a>
      </div>
    </div>
  </section>
);

export default DownloadSection; 