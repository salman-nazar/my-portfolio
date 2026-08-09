import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    category: "Security",
    items: [
      "Threat Detection",
      "Incident Response",
      "NIDS / NIPS",
      "Blue Team Operations",
      "Log Analysis",
      "Networking",
    ],
  },
  {
    category: "Security Tools",
    items: ["Snort", "Suricata", "VirusTotal", "OPNsense", "Wazuh", "Splunk"],
  },
  {
    category: "Frontend",
    items: ["Next.js", "JavaScript", "Python", "HTML / CSS"],
  },
  {
    category: "Backend",
    items: ["Python", "Java", "Node.js", "MongoDB"],
  },
];