"use client";

interface CertificateModalProps {
  title: string;
  url: string;
  onClose: () => void;
}

export default function CertificateModal({ title, url, onClose }: CertificateModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <div
        className="bg-ink border border-slate-border rounded-lg w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-border">
          <h3 className="font-display font-bold text-paper">{title}</h3>
          <div className="flex items-center gap-4">
           <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-teal hover:underline"
            >
              Open in new tab
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-slate-muted hover:text-paper text-xl leading-none"
            >
              ✕
            </button>
          </div>
        </div>
        <iframe src={url} title={title} className="flex-1 w-full bg-white" />
      </div>
    </div>
  );
}