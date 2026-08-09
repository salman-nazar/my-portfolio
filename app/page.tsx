import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Certifications from "@/components/sections/Certifications";
import Internships from "@/components/sections/Internships";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Internships />
    </>
  );
}