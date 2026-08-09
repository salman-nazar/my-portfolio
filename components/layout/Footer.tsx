export default function Footer() {
  return (
    <footer className="border-t border-slate-border">
      <div className="container-custom py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-mono text-sm text-slate-muted font-bold">
          © {new Date().getFullYear()} Salman Nazar
        </p>
        <div className="flex gap-6 font-mono text-sm font-bold">
         <a 
            href="https://github.com/salman-nazar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-teal transition-colors"
          >
            github
          </a>
          < a
            href="https://pk.linkedin.com/in/salman-nazar-607206323"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-teal transition-colors"
          >
            linkedin
          </a>
          
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=salmannazar284@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-muted hover:text-teal transition-colors"
          >
            email
          </a>
        </div>
      </div>
    </footer>
  );
}