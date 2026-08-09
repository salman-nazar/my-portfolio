"use client";

import { useState } from "react";

export default function Resume() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="container-custom py-20 border-t border-slate-border">
      <h2 className="font-display text-3xl font-bold text-paper mb-4">Resume</h2>
      <p className="text-slate-muted mb-6 max-w-xl">
        Get a full overview of my education, experience, and skills in one place.
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setShowPreview(true)}
          className="px-5 py-3 border border-slate-border text-paper font-sans text-sm rounded hover:border-teal hover:text-teal transition-colors"
        >
          Preview Resume
        </button>
        <a
          href="/resume.pdf"
          download
          className="px-5 py-3 bg-amber text-ink font-sans text-sm font-bold rounded hover:opacity-90 transition-opacity"
        >
          Download Resume
        </a>
      </div>

      {showPreview && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="bg-ink border border-slate-border rounded-lg w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-border">
              <h3 className="font-display font-bold text-paper">Resume Preview</h3>
              <div className="flex items-center gap-4">
              <a  
                  href="/resume.pdf"
                  download
                  className="font-mono text-xs text-teal hover:underline"
                >
                  Download
                </a>
                <button
                  onClick={() => setShowPreview(false)}
                  aria-label="Close"
                  className="text-slate-muted hover:text-paper text-xl leading-none"
                >
                  ✕
                </button>
              </div>
            </div>
            <iframe src="/resume.pdf" title="Resume" className="flex-1 w-full bg-white" />
          </div>
        </div>
      )}
    </section>
  );
}