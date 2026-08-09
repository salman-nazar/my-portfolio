export default function About() {
  return (
    <section id="about" className="container-custom py-20 border-t border-slate-border">
     
      <h2 className="font-display text-3xl font-bold text-paper mb-6">About</h2>
      <div className="max-w-2xl space-y-4 text-slate-muted leading-relaxed">
        <p>
          My name is <span className="text-paper">Salman Nazar</span>, and I'm based in
          Islamabad, Pakistan. I'm currently pursuing my Bachelor's degree in Cybersecurity at{" "}
          <span className="text-paper">Air University</span>, where my focus has increasingly
          shifted toward the defensive side of the field —{" "}
          <span className="text-teal">Blue Team operations</span>. I'm particularly drawn to the
          SOC Analyst path: monitoring, detecting, and responding to threats before they can do
          real damage to an organization.
        </p>
        <p>
          Alongside security, I also build web applications — full-stack projects using Next.js,
          Node.js, and Python, designed to be responsive, reliable, and secure from the ground up.
          Working across both fields has given me a more complete picture of how systems actually
          function, which I think makes me a sharper defender: it's easier to protect something
          when you understand how it's built.
        </p>
        <p>
          Outside of security and development, I spend time trading crypto and forex. It might
          seem unrelated at first, but it's taught me to think strategically under pressure, read
          patterns quickly, and stay disciplined when conditions change — skills that translate
          directly into how I approach both security analysis and problem-solving in general.
        </p>
       
      </div>
    </section>
  );
}