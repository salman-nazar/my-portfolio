import ContactForm from "@/components/sections/ContactForm";

export default function ContactPage() {
  return (
    <section className="container-custom py-24">
      <h1 className="font-display text-3xl font-bold text-paper mb-4">Get in Touch</h1>
      <p className="text-slate-muted mb-10 max-w-xl">
        Whether you're hiring, collaborating, or just want to talk shop about security — I'd
  love to hear from you. Drop a message below, or reach out directly at{" "}
        <a
       href="https://mail.google.com/mail/?view=cm&fs=1&to=salmannazar284@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-teal hover:underline"
>
  salmannazar284@gmail.com
</a>
        .
      </p>
      <ContactForm />
    </section>
  );
}