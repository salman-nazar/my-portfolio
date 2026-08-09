import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container-custom py-20 border-t border-slate-border">
   
      <h2 className="font-display text-3xl font-bold text-paper mb-8">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="font-mono text-sm text-teal mb-3">{group.category}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="font-mono text-xs px-3 py-1.5 rounded border border-slate-border text-slate-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}