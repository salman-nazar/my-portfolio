"use client";

import { useState } from "react";
import { internships } from "@/data/internships";
import CertificateModal from "./CertificateModal";

export default function Internships() {
  const [activeCert, setActiveCert] = useState<{ title: string; url: string } | null>(null);

  return (
    <section id="internships" className="container-custom py-20 border-t border-slate-border">
      <h2 className="font-display text-3xl font-bold text-paper mb-8">Internships</h2>
      <div className="space-y-6">
        {internships.map((internship) => (
          <div
            key={internship.role + internship.organization}
            className="border border-slate-border rounded-lg p-6 hover:border-teal transition-colors"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
              <h3 className="font-display text-lg font-bold text-paper">
                {internship.role} — <span className="text-teal">{internship.organization}</span>
              </h3>
              <span className="font-mono text-xs text-slate-muted">{internship.period}</span>
            </div>
            <p className="text-slate-muted text-sm leading-relaxed mb-4">
              {internship.description}
            </p>
            {internship.certificateUrl && (
              <button
                onClick={() =>
                  setActiveCert({ title: internship.role, url: internship.certificateUrl! })
                }
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