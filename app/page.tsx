import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Internships from "@/components/sections/Internships";
import Resume from "@/components/sections/Resume";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Internships />
      <Resume />
    </>
  );
}