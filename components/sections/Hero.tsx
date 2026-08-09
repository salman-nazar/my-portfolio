export default function Hero() {
  return (
    <section className="container-custom pt-24 pb-20">
   
     <h1 className="font-display text-4xl md:text-6xl font-bold text-paper leading-tight">
  <span className="typewriter">
    Hi, I'm <span className="text-amber">Salman Nazar</span>
  </span>
</h1>
      <p className="mt-4 text-lg text-slate-muted max-w-xl">
        I'm drawn to the defensive side of cybersecurity — understanding how attacks unfold so I can help stop them before they cause damage. I'm currently building my foundation in threat detection, network defense, and incident response while finishing my degree at Air University, and I'm actively looking for an opportunity to start my career as a SOC Analyst. Alongside that, I build full-stack web applications, which keeps me sharp on how systems actually work under the hood — knowledge I think makes for a stronger defender.
      </p>
<div className="mt-8 flex flex-wrap gap-4">
  <a href="/projects" className="px-5 py-3 bg-amber text-ink font-sans text-sm font-bold rounded hover:opacity-90 transition-opacity">
    View Projects
  </a>
 <a href="https://mail.google.com/mail/?view=cm&fs=1&to=salmannazar284@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="px-5 py-3 border border-slate-border text-paper font-sans text-sm rounded hover:border-teal hover:text-teal transition-colors"
>
  Get in Touch
</a>
</div>
    </section>
  );
}