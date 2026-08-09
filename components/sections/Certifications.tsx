"use client";

import { useState } from "react";
import { certifications } from "@/data/certifications";
import CertificateModal from "./CertificateModal";

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<{ title: string; url: string } | null>(null);

  return (
    <section id="certifications" className="container-custom py-20 border-t border-slate-border">
  
      <h2 className="font-display text-3xl font-bold text-paper mb-8">
        Certifications & Courses
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="border border-slate-border rounded-lg p-6 hover:border-teal transition-colors"
          >
            <h3 className="font-display text-lg font-bold text-paper mb-1">
              {cert.title}
            </h3>
            <p className="text-slate-muted text-sm mb-1">{cert.issuer}</p>
            <p className="font-mono text-xs text-teal mb-4">{cert.date}</p>
            {cert.credentialUrl && (
              <button
                onClick={() => setActiveCert({ title: cert.title, url: cert.credentialUrl! })}
                className="font-mono text-sm text-amber hover:underline"
              >
                View Certificate →
              </button>
            )}
          </div>
        ))}
      </div>

      {activeCert && (
        <CertificateModal
          title={activeCert.title}
          url={activeCert.url}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}