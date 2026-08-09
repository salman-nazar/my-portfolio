"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      <div>
        <label htmlFor="name" className="block font-mono text-sm text-teal mb-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-transparent border border-slate-border rounded px-4 py-3 text-paper focus:border-teal outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-mono text-sm text-teal mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-transparent border border-slate-border rounded px-4 py-3 text-paper focus:border-teal outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-mono text-sm text-teal mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border border-slate-border rounded px-4 py-3 text-paper focus:border-teal outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-6 py-3 bg-amber text-ink font-sans text-sm font-bold rounded hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-teal text-sm">Message sent — thanks for reaching out!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">{errorMsg}</p>
      )}
    </form>
  );
}